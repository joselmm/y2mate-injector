(async function(){
  // ==================== helpers ====================
  function hexToUint8Array(hex){
    hex = hex.replace(/\s+/g, '');
    if(hex.length % 2) throw new Error('hex inválido');
    const len = hex.length/2;
    const out = new Uint8Array(len);
    for(let i=0;i<len;i++) out[i] = parseInt(hex.substr(i*2,2),16);
    return out;
  }

  function base64ToArrayBuffer(b64){
    const bin = atob(b64.replace(/\s+/g,''));
    const buf = new Uint8Array(bin.length);
    for(let i=0;i<bin.length;i++) buf[i] = bin.charCodeAt(i);
    return buf.buffer;
  }

  function findSeedInScripts(){
    const marker = 'C5D58EF67A';
    const scripts = Array.from(document.scripts);
    for(const s of scripts){
      try{
        const txt = s.textContent || '';
        if(!txt) continue;
        let m = txt.match(/["'](C5D58EF67A[a-fA-F0-9]{8,120})["']/);
        if(m) return m[1];
        m = txt.match(/let\s+y\s*=\s*["']([A-Fa-f0-9]{10,200})["']/);
        if(m) return m[1];
        m = txt.match(/["']C5D58EF67A["']\s*\+\s*["']([A-Fa-f0-9]{4,120})["']/);
        if(m) return 'C5D58EF67A' + m[1];
      }catch(e){}
    }
    return null;
  }

  async function importAesKeyFromHex(seedHex){
    const keyBytes = hexToUint8Array(seedHex);
    return await window.crypto.subtle.importKey(
      'raw',
      keyBytes,
      { name: 'AES-CBC' },
      false,
      ['decrypt']
    );
  }

  async function decryptBase64Payload(b64payload, aesKey){
    const buf = base64ToArrayBuffer(b64payload);
    const u8 = new Uint8Array(buf);
    if(u8.length < 17) throw new Error('payload demasiado corto');
    const iv = u8.slice(0,16);
    const cipher = u8.slice(16).buffer;
    const plainBuf = await window.crypto.subtle.decrypt(
      { name: 'AES-CBC', iv: iv },
      aesKey,
      cipher
    );
    const decoded = new TextDecoder().decode(new Uint8Array(plainBuf));
    return JSON.parse(decoded);
  }

  async function getRandomCdn(){
    const res = await fetch('https://media.savetube.me/api/random-cdn', { cache: 'no-store' });
    if(!res.ok) throw new Error('getRandomCdn failed: ' + res.status);
    const json = await res.json();
    if(!json || !json.cdn) throw new Error('getRandomCdn: respuesta inválida');
    return json.cdn;
  }

  // ==================== APIs ====================
  async function fetchData(url){
    if(!url || typeof url !== 'string') throw new TypeError('fetchData requiere una URL string');
    const cdn = await getRandomCdn();
    const endpoint = `https://${cdn}/v2/info`;

    const resp = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    });

    if(!resp.ok){
      const text = await resp.text().catch(()=>'<no body>');
      throw new Error(`Error ${resp.status} desde ${endpoint}: ${text}`);
    }

    return await resp.json();
  }

  async function getDecryptedFromFetch(urlOrReturn){
    let payloadBase64;
    if(urlOrReturn && typeof urlOrReturn === 'object' && (urlOrReturn.data || urlOrReturn.status !== undefined)){
      if(urlOrReturn.data && typeof urlOrReturn.data === 'string') {
        payloadBase64 = urlOrReturn.data;
      } else if(urlOrReturn.data && typeof urlOrReturn.data.YrlUc === 'string'){
        payloadBase64 = urlOrReturn.data.YrlUc;
      } else if(typeof urlOrReturn === 'string'){
        payloadBase64 = urlOrReturn;
      } else {
        throw new Error('Objeto pasado no contiene `.data` string base64');
      }
    } else {
      if(typeof globalThis.fetchData !== 'function') throw new Error('fetchData no está definida');
      const resp = await globalThis.fetchData(urlOrReturn);
      if(resp.data && typeof resp.data === 'string'){
        payloadBase64 = resp.data;
      } else if(resp.data && typeof resp.data.YrlUc === 'string'){
        payloadBase64 = resp.data.YrlUc;
      } else if(typeof resp === 'string'){
        payloadBase64 = resp;
      } else {
        throw new Error('No se encontró campo base64 en la respuesta de fetchData.');
      }
    }

    let seedHex = findSeedInScripts();
    if(!seedHex){
      seedHex = "C5D58EF67A7584E4A29F6C35BBC4EB12"; // tu semilla fija
    }

    const key = await importAesKeyFromHex(seedHex);
    return await decryptBase64Payload(payloadBase64, key);
  }

  async function getDownloadUrl(key, quality, downloadType){
    if(!key || !quality || !downloadType) throw new Error('Faltan parámetros (key, quality, downloadType)');
    const cdn = await getRandomCdn();
    const endpoint = `https://${cdn}/download`;

    const resp = await fetch(endpoint, {
      method: "POST",
      headers: {
        "accept": "*/*",
        "content-type": "application/json"
      },
      body: JSON.stringify({ downloadType, quality, key })
    });

    if(!resp.ok){
      const text = await resp.text().catch(()=>'<no body>');
      throw new Error(`Error ${resp.status} desde ${endpoint}: ${text}`);
    }

    return await resp.json();
  }

  // ==================== export ====================
  globalThis.fetchData = fetchData;
  globalThis.getDecryptedFromFetch = getDecryptedFromFetch;
  globalThis.getDownloadUrl = getDownloadUrl;

  console.log("✅ Listo: fetchData(), getDecryptedFromFetch(), getDownloadUrl() disponibles en window/globalThis.");
})();
