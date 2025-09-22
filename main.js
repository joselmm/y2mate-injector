
const appState = {
  searchQuery: "",
  queryResults: [],
  videoFormats: "",
  directLink: "",
}
var browser =null;
function getElementInDOM(selector) {
  return document.querySelector(selector)
}

function hideElementInDOM(selector) {
  document.querySelector(selector).classList.add("not-to-show")
}
function showElementInDOM(selector) {
  document.querySelector(selector).classList.remove("not-to-show")
}

class Results{
  list=[];
  query=""
  constructor(json){
    var {vitems, keyword}=JSON.parse(json);
    this.list=vitems;
    this.query=keyword;
  }
  insertHtmlInDOM(){
    var html = ``;
    this.list.forEach(vitem=>{
      var itemResult=new ItemResult({
        title:vitem.t,
        id:vitem.v,
      })

      html+=itemResult.html.outerHTML;
      
    })
    getElementInDOM(".results-container").innerHTML=html;

  }
}

class ItemResult {
  title = "";
  id = "";
  html;

  constructor({
    title,
    id,
    k
  }) {
    this.title = title;
    this.id = id;
    var imgSrc = `https://i.ytimg.com/vi/${id}/0.jpg`;

    // Crear un parser de HTML
    const parser = new DOMParser();

    // Crear un documento HTML en memoria
    const doc = parser.parseFromString('<div>', 'text/html');

    // Crear un elemento div en memoria
    const div = doc.body.firstChild;

    // Configurar el contenido del elemento div
    div.innerHTML = `
    <div class="result-item" onclick="getVideoFormatsAndInfo('${this.id}')">
      <img
        src="${imgSrc}"
        class="result-item-thumbail"
      />
      <p class="result-item-titles">${this.title}</p>
      </div>
    `;

    // Obtener el outerHTML del elemento div
    this.html = div.querySelector("div");
  }

}



class VideoFormats {
  id = "";
  title = "";
  mess = "";
  list = [];
  status = ""
  constructor(json) {
    json = JSON.parse(json);
    var { vid: id, title, links, mess } = json;
    //console.log(links)
    if (mess === "") {
      this.mess = mess
      this.id = id;
      this.title = title;
      this.list = this.transformToObjectArrays(links);
      this.status = "ok"
    } else {
      this.mess = mess;
      this.status = "error";
    }

  }

  transformToObjectArrays(obj) {
    const result = {};
    for (const key in obj) {
      result[key] = Object.values(obj[key]);
    }
    return result;
  }

  insertHtmlInDOM() {
    //console.log(this.list)
    const { mp3, mp4 } = this.list;
    var mp4ListHtml = ``;
    mp4.forEach(format => {
      var htmlMp4 = `<option
                    value="${format.k}"
                  >
                   ${format.q_text} ${format.size ? "(" + format.size + ")" : ""}
                  </option>
                  `
      mp4ListHtml += htmlMp4;
    });
    var mp3ListHtml = ``;
    mp3.forEach(format => {
      var htmlMp3 = `<option
                    value="${format.k}"
                  >
                  ${format.q_text} ${format.size ? "(" + format.size + ")" : ""}
                  </option>
                  `
      mp3ListHtml += htmlMp3;

    })
    var html = `<div class="thumbail-container">
    <img
              src="https://i.ytimg.com/vi/${this.id}/0.jpg"
              class="formats-thumbail"
            />
            <div class="formats-video-title">
              <b> ${this.title} </b>
            </div>
            <div>
            https://www.youtube.com/watch?v=${this.id}
            </div>
            <div class="formats">
              <select id="videoFormatSelect" class="video-format-select">
                <optgroup label="Video Mp4">
                  ${mp4ListHtml}
                </optgroup>
                <optgroup label="Mp3">
                  ${mp3ListHtml}
                </optgroup>
              </select>
              <button class="btn btn-success get-dl-btn p-2" onclick="getDirectVideoFormatDirectLink('${this.id}')">Descargar</button>
            </div>
          </div>`
    getElementInDOM(".formats-container").innerHTML=html;
  }
}

function renderDirectLink(json) {
  var json = JSON.parse(json);
  hideElementInDOM(".popup-loading");
  getElementInDOM(".pop-dl-title").innerText=json.title;
  getElementInDOM(".direct-link-a").href = json.dlink;
  showElementInDOM(".popup-dl");
  appState.directLink=json.dlink;
}

async function getDirectVideoFormatDirectLink(id) {
  var k = getElementInDOM('#videoFormatSelect').value;
  showElementInDOM(".popup-loading");
  await resetBackground();
  var loop = setInterval(() => {
    /*  console.log(++t) */
     browser.executeScript({code:'sessionStorage.getItem("directLink")'},(values)=>{
       if(values && values[0]){
         clearInterval(loop);
         //confirm(values[0])
         /* var videoFormats= new VideoFormats(values[0]);
         appState.videoFormats=videoFormats;
         videoFormats.insertHtmlInDOM(); */
         console.log(values[0])
         renderDirectLink(values[0]);
       }
     })
   }, 500);

   var script = `
   var data = {
  vid: '${id}',
  k: '${k}',
};

$.ajax({
  type: 'POST',
  url: 'https://www.y2mate.com/mates/convertV2/index',
  data: data,
  contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
  success: function(response) {
    //console.log(response);
    sessionStorage.setItem("directLink", JSON.stringify(response));
  },
  error: function(xhr, status, error) {
    sessionStorage.setItem("directLink", error);
  }
});`
browser.executeScript({code:script})
}

function extractYouTubeId(url) {
  const youtubeRegex = /^(?:https?:\/\/)?(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|)([a-zA-Z0-9_-]{11})|^(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]{11})$/;
  const match = url.match(youtubeRegex);
  return match && match[1] || match && match[2] || null;
}


async function getVideoFormatsAndInfo(id) {
  if(!id)return;
  //getElementInDOM(".search-input").value = "https://youtube.com/watch?v="+id;
  hideElementInDOM(".results-container")
  showElementInDOM(".popup-loading");
  await resetBackground();
    var loop = setInterval(() => {
    /*  console.log(++t) */
     browser.executeScript({code:'sessionStorage.getItem("videoFormats")'},(values)=>{
       if(values && values[0]){
         clearInterval(loop);
         //confirm(values[0])
         var videoFormats= new VideoFormats(values[0]);
         appState.videoFormats=videoFormats;
         videoFormats.insertHtmlInDOM();
         hideElementInDOM(".popup-loading");
         showElementInDOM(".formats-container")
       }
     })
   }, 500);
   var script = `var data = {
                  k_query: "https://www.youtube.com/watch?v=${id}",
                  k_page: "mp3",
                  hl: "en",
                  q_auto: 1
                };

                $.ajax({
                  type: "POST",
                  url: "https://www.y2mate.com/mates/analyzeV2/ajax",
                  data: data,
                  contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                  success: function(response) {
                    console.log(response);
                    sessionStorage.setItem("videoFormats", JSON.stringify(response));
                  },
                  error: function(xhr, status, error) {
                    console.error("Error:", error);
                    sessionStorage.setItem("videoFormats", error.message);
                  }
                });`
    browser.executeScript({code:script})
}

getElementInDOM("form.search-bar-container").addEventListener("submit", searchQuery);
async function searchQuery(e) {
    if(e)e.preventDefault();
    console.log("ejecutando submit: "+Date.now())
    var query = getElementInDOM("input.search-input").value;
    console.log(query)
    if(query ==="" || /^ +$/.test(query)) return; 
    //VERIFICAR SI ES UN VIDEO DE YOUTUBE
    showElementInDOM(".popup-loading");
    if(extractYouTubeId(query)){
      return getVideoFormatsAndInfo(extractYouTubeId(query));
    }
    hideElementInDOM(".formats-container")
    await resetBackground();
   /*  t=0;
    console.log(t) */
    var loop = setInterval(() => {
     /*  console.log(++t) */
      browser.executeScript({code:'sessionStorage.getItem("queryResults")'},(values)=>{
        if(values && values[0]){
          clearInterval(loop);
          //confirm(values[0])
          var results= new Results(values[0]);
          appState.queryResults=results;
          results.insertHtmlInDOM();
          hideElementInDOM(".popup-loading");
          showElementInDOM(".results-container")
        }
      })
    }, 500);
    var script = `var data = {
                      k_query: "${query}",
                      k_page: "mp3",
                      hl: "en",
                      q_auto: 1
                    };

                    $.ajax({
                      type: "POST",
                      url: "https://www.y2mate.com/mates/es/analyzeV2/ajax",
                      data: data,
                      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                      success: function(response) {
                        console.log(response);
                        sessionStorage.setItem("queryResults", JSON.stringify(response));
                      },
                      error: function(xhr, status, error) {
                        console.error("Error:", error);
                        sessionStorage.setItem("queryResults", error.message);
                      }
                    });`
    browser.executeScript({code:script})
}



function resetBackground() {
  return browser.executeScript({
    code:`
      sessionStorage.setItem("searchQuery", "");
      sessionStorage.setItem("queryResults", "");
      sessionStorage.setItem("videoFormats", "");
      sessionStorage.setItem("directLink", "");
      `
    })
  }
  
  
  function onDeviceReady() {
  console.log("DISPOSITIVO LISTO...XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
  browser = cordova.InAppBrowser.open("https://www.y2mate.com/en948", "_blank", 'hidden=yes');

  browser.addEventListener("loadstop", function () {
    resetBackground()
    hideElementInDOM(".popup-loading")
  }) 
  
}
document.addEventListener('deviceready', onDeviceReady, false);

/* 
 <div>
    <button id="goToY2Mate">Ir a y2mate</button>
    <a id="directLink-btn" hidden target="_blank">ABRIR ENLACE DIRECTO</a>
  </div>
  
  */


    //SUGGESTION:

    const config = {
      placeHolder: "Busca o pega URL...",
      data: {
        src: async function onSearchInput(query) {
          
          var suggestions = await suggest(query);
          if (suggestions) {
            return suggestions
          }
          return []
        },
        cache: false,
      },
      resultItem: { 
        highlight: true,
      },
      /* submit:true , */
      events: {
        input: {
            selection: (event) => {
              //console.log(event)
                const selection = event.detail.selection.value;
                getElementInDOM(".search-input").value = selection;
                searchQuery();
            }
        }
    }
    }

    const autoCompleteJS = new autoComplete(config);

    //document.querySelector(".search-input").addEventListener("input", onSearchInput);



    function suggest(query) {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: "https://suggestqueries.google.com/complete/search",
          jsonp: "jsonp",
          dataType: "jsonp",
          data: {
            q: query,
            hl: "es",
            ds: "yt",
            client: "youtube"
          }
        }).done(function (e) {
          resolve(e[1].map(e => e[0]))
          //sessionStorage.setItem("query-suggestions",JSON.parse())

        }).fail(function () {
          reject(new Error("hubo un error "))
        })
      })

    }


    const iframeAbout = getElementInDOM("theiframeabout");
    getElementInDOM(".logo-about").addEventListener("click",()=>{
      showElementInDOM(".theiframeabout")
      showElementInDOM(".logo-close-container")
    })
    const closeIframeAboutBtn = getElementInDOM(".logo-close-container");
    closeIframeAboutBtn.addEventListener("click",()=>{
      hideElementInDOM(".theiframeabout")
      hideElementInDOM(".logo-close-container")
    })
    
    hideElementInDOM(".popup-loading")
