(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    5557: function(e, t, a) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return a(7604)
        }
        ])
    },
    7604: function(e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, {
            __N_SSP: function() {
                return A
            },
            default: function() {
                return YtMate
            }
        });
        var s = a(5893)
          , n = a(9008)
          , l = a.n(n)
          , r = a(1163)
          , i = a(7875);
        let Meta = function(e) {
            let {noindex: t=!1} = e;
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("meta", {
                    name: "apple-mobile-web-app-capable",
                    content: "yes"
                }), (0,
                s.jsx)("meta", {
                    name: "author",
                    content: "Y2Mate"
                }), (0,
                s.jsx)("meta", {
                    property: "og:site_name",
                    content: "Y2Mate"
                }), t ? "" : (0,
                s.jsx)("meta", {
                    name: "robots",
                    content: "index, follow"
                }), (0,
                s.jsx)("meta", {
                    property: "og:type",
                    content: "website"
                }), (0,
                s.jsx)("meta", {
                    httpEquiv: "content-type",
                    content: "text/html; charset=utf-8"
                }), (0,
                s.jsx)("meta", {
                    property: "og:image",
                    content: "/og.jpg"
                }), (0,
                s.jsx)("link", {
                    rel: "shortcut icon",
                    href: "/favicon.ico",
                    type: "image/x-icon"
                })]
            })
        }
          , hrefLang = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , a = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {});
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("link", {
                    rel: "alternate",
                    href: e + t + (a.xDefault || ""),
                    hrefLang: "x-default"
                }), (0,
                s.jsx)("link", {
                    rel: "alternate",
                    href: e + t + (a.en || ""),
                    hrefLang: "en"
                }), (0,
                s.jsx)("link", {
                    rel: "alternate",
                    href: "".concat(e, "/id").concat(t),
                    hrefLang: "id"
                }), (0,
                s.jsx)("link", {
                    rel: "alternate",
                    href: "".concat(e, "/es").concat(t),
                    hrefLang: "es"
                })]
            })
        };
        var c = a(7294)
          , o = a(1664)
          , d = a.n(o)
          , showMobileMenu = e => e ? "left-0" : "left-[-100%]"
          , m = a(6893)
          , x = a(2585)
          , h = a(5155)
          , u = a(8193)
          , p = a(9583);
        let g = {
            YouTube: u.RLq,
            Pinterest: p.cad,
            Instagram: u.Bpw,
            Twitter: u.h3E,
            Reddit: u.Shv,
            Facebook: m.Bsb,
            TikTok: p.nTm,
            Threads: x.CIl
        }
          , f = [];
        function MobileMenuItems() {
            return (0,
            s.jsx)("div", {
                children: f.map( (e, t) => (0,
                s.jsx)("ul", {
                    className: "text-[#343a40] mb-4",
                    children: (0,
                    s.jsxs)("li", {
                        className: "pb-4 px-[12px] text-dark d-block border-b-[1px] border-solid border-[#dee2e6] relative",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex items-center gap-2 cursor-pointer",
                            onClick: () => (function(e) {
                                let t = document.getElementById(e);
                                t.classList.toggle("hidden")
                            }
                            )(e.name),
                            children: [c.createElement(g[e.name]), e.name, (0,
                            s.jsx)(u.Td4, {})]
                        }), (0,
                        s.jsx)("ul", {
                            id: e.name,
                            className: "hidden mt-2",
                            children: e.subMenus.map( (e, t) => {
                                let[[a,n]] = Object.entries(e);
                                return (0,
                                s.jsx)("li", {
                                    className: "list-disc py-2 mx-[24px]",
                                    children: (0,
                                    s.jsx)(d(), {
                                        href: n,
                                        children: a
                                    })
                                }, t)
                            }
                            )
                        })]
                    })
                }, t))
            })
        }
        var j = JSON.parse('[{"label":"English","value":"en"},{"label":"Espa\xf1ol","value":"es"},{"label":"Indonesian","value":"id"}]');
        let switchLanguage = (e, t, a) => {
            e.push(t, t, {
                locale: a.current.value
            })
        }
        ;
        function LangSwitcher(e) {
            let t, {router: a, href: n} = e, l = (0,
            c.useRef)();
            if ("/2" === a.asPath) {
                let e = ["de"];
                t = j.filter(t => !e.includes(t.value))
            } else
                t = j;
            return (0,
            s.jsx)("select", {
                onChange: () => switchLanguage(a, n, l),
                ref: l,
                value: a.locale,
                children: t.map(e => (0,
                s.jsx)("option", {
                    value: e.value,
                    children: e.label
                }, e.value))
            })
        }
        var ui_Navbar = e => {
            let {href: t, disable: a=!0} = e
              , n = (0,
            r.useRouter)()
              , [l,i] = (0,
            c.useState)(!1);
            return (0,
            s.jsx)("section", {
                children: (0,
                s.jsxs)("nav", {
                    className: "border-gray-200 px-2 mb-2 sm:px-4 py-2.5 bg-custom-main h-16 flex items-center",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "container flex justify-between items-center mx-auto",
                        children: [(0,
                        s.jsxs)("a", {
                            href: "https://y2mate.ing",
                            className: "flex items-center",
                            children: [(0,
                            s.jsx)(m._hL, {
                                className: "text-white ml-2 mr-2 w-5 h-5"
                            }), (0,
                            s.jsx)("span", {
                                className: "self-center text-base custom:text-[14px]   text-white",
                                children: "Y2Mate"
                            })]
                        }), (0,
                        s.jsxs)("button", {
                            "data-collapse-toggle": "mobile-menu",
                            type: "button",
                            className: "flex  items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-custom-main focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-transparent",
                            "aria-controls": "mobile-menu",
                            "aria-expanded": "false",
                            onClick: () => i(!l),
                            children: [(0,
                            s.jsx)("span", {
                                className: "sr-only",
                                children: "Open main menu"
                            }), (0,
                            s.jsx)("span", {
                                className: "w-5 h-5 bg-white flex items-center justify-center rounded-lg ml-1",
                                children: (0,
                                s.jsx)(x.vHB, {
                                    className: "fill-custom-main"
                                })
                            })]
                        }), (0,
                        s.jsx)("div", {
                            className: "hidden w-full md:block md:w-auto ",
                            id: "mobile-menu",
                            children: (0,
                            s.jsx)("div", {
                                className: "",
                                children: (0,
                                s.jsxs)("div", {
                                    className: "flex-none",
                                    children: [!a && (0,
                                    s.jsx)("ul", {
                                        className: "menu menu-horizontal px-1 text-white",
                                        children: (0,
                                        s.jsxs)("li", {
                                            tabIndex: 0,
                                            children: [(0,
                                            s.jsxs)("div", {
                                                className: "flex items-center gap-1",
                                                children: [(0,
                                                s.jsx)("a", {
                                                    children: "Downloader"
                                                }), (0,
                                                s.jsx)(u.i0B, {})]
                                            }), (0,
                                            s.jsx)("ul", {
                                                className: "menu bg-custom-main rounded-box p-2 z-50",
                                                children: f.map( (e, t) => (0,
                                                s.jsxs)("li", {
                                                    tabIndex: 0,
                                                    className: "z-50",
                                                    children: [(0,
                                                    s.jsxs)("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [(0,
                                                        s.jsx)("a", {
                                                            children: e.name
                                                        }), (0,
                                                        s.jsx)(u.rYR, {})]
                                                    }), (0,
                                                    s.jsx)("ul", {
                                                        className: "rounded-box p-2 bg-custom-main",
                                                        children: e.subMenus.map( (e, t) => {
                                                            let[[a,n]] = Object.entries(e);
                                                            return (0,
                                                            s.jsx)("li", {
                                                                children: (0,
                                                                s.jsx)(d(), {
                                                                    href: n,
                                                                    children: a
                                                                })
                                                            }, t)
                                                        }
                                                        )
                                                    })]
                                                }, t))
                                            })]
                                        })
                                    }), (0,
                                    s.jsx)(d(), {
                                        href: "/",
                                        className: "text-white",
                                        children: "Downloader"
                                    }), !a && (0,
                                    s.jsx)(LangSwitcher, {
                                        router: n,
                                        href: t
                                    })]
                                })
                            })
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "burger-menu fixed top-0 w-full h-[100vh] z-10 flex transition-all duration-300 ".concat(showMobileMenu(l)),
                        children: [(0,
                        s.jsxs)("div", {
                            className: "languages w-[65%] bg-white overflow-y-scroll",
                            children: [(0,
                            s.jsx)(d(), {
                                href: "/",
                                className: "block text-decoration-none d-flex p-2 font-weight-semi border-bottom align-items-center border-b-[1px] border-solid border-[#dee2e6] text-[#007bff]",
                                children: (0,
                                s.jsxs)("div", {
                                    className: "flex m-2",
                                    children: [(0,
                                    s.jsx)(m._hL, {
                                        className: "text-custom-main mr-2 w-5 h-5"
                                    }), (0,
                                    s.jsx)("small", {
                                        className: "text-custom-main",
                                        children: "Y2Mate"
                                    })]
                                })
                            }), (0,
                            s.jsxs)("div", {
                                className: "p-3",
                                children: [(0,
                                s.jsx)(MobileMenuItems, {}), (0,
                                s.jsxs)("div", {
                                    className: "flex gap-2 items-center pl-2",
                                    children: [(0,
                                    s.jsx)(h.MGB, {}), (0,
                                    s.jsx)(LangSwitcher, {
                                        router: n,
                                        href: t
                                    })]
                                })]
                            })]
                        }), (0,
                        s.jsx)("div", {
                            className: "opacity-section w-[35%] h-full bg-[#00000099]",
                            onClick: () => i(!1)
                        })]
                    })]
                })
            })
        }
          , b = a(4964)
          , w = a.n(b)
          , ui_Loading = () => (0,
        s.jsxs)("div", {
            className: w().container,
            children: [(0,
            s.jsx)("div", {
                className: w().bounce
            }), (0,
            s.jsx)("div", {
                className: w().bounce2
            }), (0,
            s.jsx)("div", {
                className: w().bounce3
            }), (0,
            s.jsx)("div", {
                className: w().bounce4
            })]
        });
        async function getRandomCdn() {
            let e = await fetch("https://media.savetube.me/api/random-cdn")
              , t = await e.json();
            return t.cdn
        }
        var helpers_PopunderAd = () => ({
            showPopunderAd: () => {
                let e = localStorage.getItem("lastAdTime")
                  , t = new Date().getTime();
                (!e || t - e > 3e5) && (window.open("https://fopsoadseds.net/4/9073768", "_blank"),
                localStorage.setItem("lastAdTime", t))
            }
        });
        async function fetchDownloadUrl(e, t, a, s, n) {
            let l = await getRandomCdn();
            if (null != s && "audio" != a)
                return {
                    data: {
                        downloadUrl: s + "&title=".concat(n, "-ytshorts.savetube.me")
                    },
                    status: !0,
                    message: ""
                };
            {
                let a = await fetch("https://".concat(l, "/download"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        downloadType: "128" === t ? "audio" : "video",
                        quality: t,
                        key: e
                    })
                });
                return null == a ? {
                    status: !1,
                    message: "Sorry, you can't download this video at this time.Please try downloading the video again later.",
                    data: null
                } : await a.json()
            }
        }
        var home_Video = e => {
            var t, a, n;
            let {currentVideoData: l, contentType: i, btnsp: o, showDownloadp: d} = e;
            (0,
            r.useRouter)();
            let[x,h] = (0,
            c.useState)(o)
              , [p,g] = (0,
            c.useState)(!1)
              , [f,j] = (0,
            c.useState)(d)
              , [b,w] = (0,
            c.useState)("")
              , [v,N] = (0,
            c.useState)("")
              , y = (0,
            c.useRef)("")
              , {showPopunderAd: _} = helpers_PopunderAd()
              , getDownloadButton = async (e, t) => {
                h(!1),
                g(!0);
                let a = document.getElementById("quality").value
                  , s = null;
                for (let t of e.video_formats)
                    if (parseInt(t.height) == parseInt(a)) {
                        s = t.url;
                        break
                    }
                s && (g(!1),
                w(s),
                j(!0));
                let n = await fetchDownloadUrl(e.key, a, t, s, e.titleSlug);
                if (!1 == n.status) {
                    N(n.message),
                    g(!1);
                    return
                }
                g(!1),
                w(n.data.downloadUrl),
                j(!0)
            }
            ;
            return (0,
            s.jsxs)("div", {
                id: "downloadSection",
                className: "mt-10 my-2 p-[20px] border-[1px] border-solid border-[#00000020] border-1 border-white sm:flex  sm:gap-8 mx-[24px] lg:max-w-[920px]  lg:mx-auto ",
                children: [(0,
                s.jsx)("div", {
                    className: "w-[100%] max-w-[100%] sm:max-w-[275px] lg:max-w-[300px] relative",
                    children: (0,
                    s.jsx)("img", {
                        src: l.thumbnail,
                        alt: "image",
                        className: ""
                    })
                }), (0,
                s.jsxs)("div", {
                    className: "sm:w-[75%] text-left",
                    children: [(0,
                    s.jsx)("h3", {
                        className: "text-left mt-2 text-white font-[500] text-[16px] sm:text-[22px]",
                        children: l.title
                    }), (0,
                    s.jsx)("p", {
                        className: "text-left text-gray-100",
                        children: l.durationLabel
                    }), (0,
                    s.jsx)("hr", {
                        className: "my-[.3rem]",
                        style: {
                            " borderTop": "3px solid rgba(0,0,0,.1)"
                        }
                    }), x && (0,
                    s.jsxs)("div", {
                        className: "btn-group flex",
                        children: [(0,
                        s.jsxs)("select", {
                            className: "h-[40px] text-[#444] border border-[#aaa] rounded-[.5rem] w-[50%] mr-[10px] ",
                            style: {
                                backgroundImage: 'url(""),\n                linear-gradient(to bottom,#ffffff 0%,#e5e5e5 100%)',
                                padding: "0.4em 1.4em 0.5em 0.8em",
                                lineHeight: 1.3
                            },
                            defaultValue: null !== (n = null === (t = l.video_formats.find(e => 1 == e.default_selected)) || void 0 === t ? void 0 : t.height) && void 0 !== n ? n : null === (a = l.video_formats[0]) || void 0 === a ? void 0 : a.height,
                            id: "quality",
                            ref: y,
                            children: ["all" == i && [...l.video_formats, ...l.audio_formats].map(e => (0,
                            s.jsx)("option", {
                                value: e.height || e.quality,
                                children: "MP3 128kbps" === e.label ? "MP3 320 KBPS" : e.label
                            }, e.label)), "video" == i && l.video_formats.map(e => (0,
                            s.jsx)("option", {
                                value: e.height,
                                children: e.label
                            }, e.label)), "audio" == i && l.audio_formats.map(e => (0,
                            s.jsx)("option", {
                                value: e.quality,
                                children: e.label.replace("128", "320")
                            }, e.label))]
                        }), (0,
                        s.jsxs)("button", {
                            className: "w-[130px] py-[10px] font-[500] border-0 outline-0  bg-green-600 hover:bg-green-500 transition text-white text-[14px]  flex justify-center rounded-[6px] items-center gap-2",
                            onClick: async () => getDownloadButton(l, i),
                            children: [(0,
                            s.jsx)(u.uFt, {}), "Get Link"]
                        })]
                    }), p && (0,
                    s.jsxs)("button", {
                        disabled: !0,
                        type: "button",
                        className: "text-white bg-yellow-400  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center",
                        children: [(0,
                        s.jsxs)("svg", {
                            role: "status",
                            className: "inline w-4 h-4 mr-3 text-black animate-spin",
                            viewBox: "0 0 100 101",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0,
                            s.jsx)("path", {
                                d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                                fill: "#666"
                            }), (0,
                            s.jsx)("path", {
                                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                                fill: "currentColor"
                            })]
                        }), (0,
                        s.jsx)("p", {
                            className: "text-black",
                            children: "Converting, please wait..."
                        })]
                    }), f && (0,
                    s.jsx)("div", {
                        className: "download btn text-left w-40 bg-green-600 hover:bg-green-500 border-green-500",
                        children: (0,
                        s.jsx)("a", {
                            href: b,
                            download: !0,
                            className: "text-white rounded-lg p-2 text-center font-[700] flex items-center cursor-pointer justify-center",
                            children: (0,
                            s.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0,
                                s.jsx)(m._hL, {}), (0,
                                s.jsx)("span", {
                                    className: "text-lg",
                                    children: "Download"
                                })]
                            })
                        })
                    }), (0,
                    s.jsx)("p", {
                        className: "text-[#dc3545] text-center mt-1",
                        children: v
                    })]
                })]
            })
        }
          , v = a(7066);
        function _0x5ec9(e, t) {
            let a = _0x3a24();
            return (_0x5ec9 = function(e, t) {
                return a[e -= 450]
            }
            )(e, t)
        }
        let N = _0x5ec9;
        !function(e, t) {
            let a = _0x5ec9
              , s = e();
            for (; ; )
                try {
                    let e = -parseInt(a(469)) / 1 * (parseInt(a(451)) / 2) + -parseInt(a(466)) / 3 * (parseInt(a(455)) / 4) + -parseInt(a(465)) / 5 * (parseInt(a(474)) / 6) + -parseInt(a(450)) / 7 + -parseInt(a(468)) / 8 + parseInt(a(454)) / 9 + -parseInt(a(452)) / 10 * (-parseInt(a(471)) / 11);
                    if (249055 === e)
                        break;
                    s.push(s.shift())
                } catch (e) {
                    s.push(s.shift())
                }
        }(_0x3a24, 0);
        let y = "C5D58EF67A" + N(456) + N(464) + "12"
          , initProcessor = async () => {
            let e = {};
            e[N(459)] = "raw";
            try {
                let t = formatSeed(y)
                  , a = {};
                return a.name = N(461),
                await window[N(460)][N(470)][N(475)](e.YrlUc, t, a, !1, ["decrypt"])
            } catch (e) {
                throw console[N(463)]("Process initializati" + N(458), e),
                e
            }
        }
        ;
        function _0x3a24() {
            let e = ["error", "6C35BBC4EB", "32065fiPRVJ", "9651PJDqag", "match", "2949160OwuPPs", "1QaLwoE", "subtle", "15775023ibpdbH", "or:", "gMUfw", "12IfiARR", "importKey", "3235491JMTwmH", "334826TTrbVe", "10zgbCLj", "Format err", "2719575PhDuLf", "592dZwFMH", "7584E4A29F", "Invalid fo", "on failed:", "YrlUc", "crypto", "AES-CBC", "map"];
            return (_0x3a24 = function() {
                return e
            }
            )()
        }
        let formatSeed = e => {
            let t = {};
            t[N(473)] = N(457) + "rmat";
            try {
                let a = e[N(467)](/[\dA-F]{2}/gi);
                if (!a)
                    throw Error(t[N(473)]);
                let s = a[N(462)](e => parseInt(e, 16));
                return new Uint8Array(s)
            } catch (e) {
                throw console[N(463)](N(453) + N(472), e),
                e
            }
        }
          , processIncoming = async e => {
            try {
                let t = formatInput(e);
                if (t.length < 16)
                    throw Error("Invalid format: insufficient length");
                let a = t.slice(0, 16)
                  , s = t.slice(16)
                  , n = await initProcessor()
                  , l = await window.crypto.subtle.decrypt({
                    name: "AES-CBC",
                    iv: a
                }, n, s)
                  , r = new TextDecoder().decode(new Uint8Array(l));
                return JSON.parse(r)
            } catch (e) {
                throw console.error(e),
                e
            }
        }
          , formatInput = e => {
            try {
                let t = e.replace(/\s/g, "")
                  , a = window.atob(t)
                  , s = new Uint8Array(a.length);
                for (let e = 0; e < a.length; e++)
                    s[e] = a.charCodeAt(e);
                return s.buffer
            } catch (e) {
                throw Error("format error: ".concat(e.message))
            }
        }
        ;
        globalThis.fetchData = async function fetchData(e) {
            let t = await getRandomCdn()
              , a = await v.Z.post("https://".concat(t, "/v2/info"), {
                url: e
            })
              , s = a.data;
            return s
        }
        var home_Link = e => {
            let {data: t, contentType: a} = e
              , [n,l] = (0,
            c.useState)("")
              , [r,i] = (0,
            c.useState)("")
              , [o,d] = (0,
            c.useState)(!1)
              , [m,x] = (0,
            c.useState)(!1)
              , [h,u] = (0,
            c.useState)("")
              , [p,g] = (0,
            c.useState)(!0)
              , [f,j] = (0,
            c.useState)(!1)
              , [b,w] = (0,
            c.useState)(null)
              , v = (0,
            c.useCallback)(async e => {
                if (!e.startsWith("https://"))
                    return;
                u(""),
                g(!0),
                j(!1),
                x(!1),
                l(!0),
                d(!0);
                let t = null;
                if ("video" == a || "audio" == a || "all" == a)
                    try {
                        t = await fetchData(e)
                    } catch (e) {
                        console.log(e),
                        u("Something went wrong. please try after some time.");
                        return
                    } finally {
                        d(!1)
                    }
                if (!0 == t.status) {
                    let e = await processIncoming(t.data);
                    w(e),
                    x(!0),
                    setTimeout( () => {
                        !function() {
                            let e = document.getElementById("downloadSection");
                            e.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                                inline: "nearest"
                            })
                        }()
                    }
                    , 300)
                } else
                    w(null),
                    u(t.message)
            }
            , [a]);
            return (0,
            c.useEffect)( () => {
                0 == r.length ? l("") : v(r)
            }
            , [r, v]),
            (0,
            s.jsxs)("section", {
                className: "text-center py-20 mb-2 text-[#343a40] mt-[-10px] bg-cover bg-no-repeat",
                style: {
                    background: "url('/bg.jpg')"
                },
                children: [(0,
                s.jsx)("h1", {
                    className: "font-medium sm:text-3xl text-2xl w-[20rem] sm:w-full sm:mb-2 m-auto text-white",
                    children: t.title
                }), (0,
                s.jsx)("p", {
                    className: "my-4 mx-[15px]  text-white",
                    children: t.p
                }), (0,
                s.jsx)("div", {
                    className: "w-full px-2 mx-auto my-4 max-w-5xl",
                    children: (0,
                    s.jsxs)("div", {
                        className: "flex flex-col sm:flex-row items-center justify-center gap-2",
                        children: [(0,
                        s.jsx)("div", {
                            className: "w-full mb-2 sm:mb-0 sm:flex-1",
                            children: (0,
                            s.jsx)("input", {
                                type: "search",
                                className: "w-full outline-none py-4 px-4 bg-gray-950 text-gray-100 text-sm rounded-xl border-2 border-custom-main",
                                placeholder: t.placeholder,
                                value: r,
                                onChange: e => {
                                    i(e.target.value)
                                }
                                ,
                                required: !0
                            })
                        }), (0,
                        s.jsx)("button", {
                            type: "submit",
                            onClick: () => v(r),
                            className: "w-full sm:w-auto sm:min-w-[120px] py-3 sm:py-4 px-4 text-white font-semibold bg-custom-main hover:scale-95 transition-transform focus:outline-none rounded-lg text-center text-base shadow",
                            children: "Fetch MP4/MP3"
                        })]
                    })
                }), n && o && (0,
                s.jsx)(ui_Loading, {}), m && b && (0,
                s.jsx)(s.Fragment, {
                    children: (0,
                    s.jsx)(home_Video, {
                        contentType: a,
                        showDownloadp: f,
                        btnsp: p,
                        currentVideoData: b
                    })
                }), (0,
                s.jsx)("p", {
                    className: "text-[#dc3545] text-center mt-1",
                    children: h
                })]
            })
        }
          , ui_Card = e => {
            let {data: t, page: a} = e
              , {t: n} = (0,
            i.$G)(a);
            return (0,
            s.jsx)("div", {
                className: "group transition-all duration-300 ease-in-out hover:-translate-y-2 shadow-2xl rounded-2xl",
                children: (0,
                s.jsx)("div", {
                    className: "h-full  shadow-lg hover:shadow-xl transition-shadow duration-300",
                    children: (0,
                    s.jsxs)("div", {
                        className: "p-6",
                        children: [(0,
                        s.jsx)("div", {
                            className: "flex items-center justify-center mb-6",
                            children: (e => {
                                let a = {
                                    1: p.ef0,
                                    2: p.Op,
                                    3: p.bri,
                                    4: p.LkT,
                                    5: p.rU2,
                                    6: p.I$
                                }
                                  , n = a[t.id];
                                return n ? (0,
                                s.jsx)(n, {
                                    className: "w-12 h-12 text-custom-main"
                                }) : null
                            }
                            )(t.id)
                        }), (0,
                        s.jsx)("h4", {
                            className: "text-xl font-bold  mb-4 transition-colors group-hover:text-custom-main",
                            children: n(t.title)
                        }), (0,
                        s.jsx)("p", {
                            className: "leading-relaxed min-h-[100px]",
                            children: n(t.description)
                        })]
                    })
                })
            })
        }
          , _ = a(187)
          , C = a(7788)
          , k = a(2705)
          , ui_Cards = e => {
            let {data: t, page: a, title: n, p: l, extra: r} = e;
            return (0,
            s.jsx)("section", {
                className: "py-20 px-4 bg-gradient-to-b ",
                children: (0,
                s.jsxs)("div", {
                    className: "max-w-6xl mx-auto",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "text-center mb-16",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex items-center justify-center mb-4",
                            children: [(0,
                            s.jsx)(_.Z, {
                                className: "w-8 h-8 text-indigo-600 mr-2"
                            }), (0,
                            s.jsx)("h2", {
                                className: "text-4xl font-bold leading-tight",
                                children: n
                            })]
                        }), (0,
                        s.jsx)("p", {
                            className: "text-lg  max-w-2xl mx-auto leading-relaxed",
                            children: l
                        })]
                    }), (0,
                    s.jsx)("div", {
                        className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",
                        children: t.map(e => (0,
                        s.jsx)("div", {
                            className: "transform transition-transform duration-300 hover:-translate-y-2",
                            children: (0,
                            s.jsx)(ui_Card, {
                                data: e,
                                page: a
                            })
                        }, e.id))
                    }), r && (0,
                    s.jsx)("div", {
                        className: "text-center mt-16",
                        children: (0,
                        s.jsxs)("div", {
                            className: "inline-flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm",
                            children: [(0,
                            s.jsx)(C.Z, {
                                className: "w-5 h-5 text-indigo-600"
                            }), (0,
                            s.jsx)("p", {
                                className: "text-gray-600",
                                children: r
                            }), (0,
                            s.jsx)(k.Z, {
                                className: "w-5 h-5 text-indigo-600"
                            })]
                        })
                    })]
                })
            })
        }
          , S = a(5194)
          , I = a(4781)
          , ui_Converter = e => {
            let {title: t, paragraph: a, randomQuote: n} = e;
            return (0,
            s.jsx)("div", {
                className: "max-w-6xl mx-auto px-4 py-8",
                children: (0,
                s.jsxs)("div", {
                    className: " rounded-lg shadow-xl p-6 transition-transform hover:scale-105",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "flex items-center justify-center gap-2 mb-4",
                        children: [(0,
                        s.jsx)(S.Z, {
                            className: "w-6 h-6 text-blue-600"
                        }), (0,
                        s.jsx)("h3", {
                            className: "font-semibold text-2xl ",
                            children: t
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex items-start space-x-3 mb-4",
                        children: [(0,
                        s.jsx)(C.Z, {
                            className: "w-5 h-5 text-purple-500 mt-1 flex-shrink-0"
                        }), (0,
                        s.jsx)("p", {
                            className: "leading-relaxed",
                            children: a
                        })]
                    }), n && (0,
                    s.jsx)("div", {
                        className: "mt-6 bg-blue-50 rounded-lg p-4",
                        children: (0,
                        s.jsxs)("div", {
                            className: "flex items-center gap-2 text-gray-700",
                            children: [(0,
                            s.jsx)(I.Z, {
                                className: "w-5 h-5 text-blue-500 flex-shrink-0"
                            }), (0,
                            s.jsxs)("p", {
                                className: "italic",
                                children: [(0,
                                s.jsx)("span", {
                                    className: "font-medium",
                                    children: "Magical quote: "
                                }), n]
                            })]
                        })
                    })]
                })
            })
        }
          , L = a(1694)
          , M = a(6496)
          , T = a(3713)
          , ui_HowToConvert = e => {
            let {data: t, page: a, title: n} = e
              , {t: l} = (0,
            i.$G)(a)
              , r = [(0,
            s.jsx)(L.Z, {
                className: "w-8 h-8"
            }, "upload"), (0,
            s.jsx)(M.Z, {
                className: "w-8 h-8"
            }, "search"), (0,
            s.jsx)(T.Z, {
                className: "w-8 h-8"
            }, "check")]
              , c = [{
                bg: "bg-blue-50",
                text: "text-blue-600",
                icon: "text-blue-500"
            }, {
                bg: "bg-red-50",
                text: "text-red-600",
                icon: "text-red-500"
            }, {
                bg: "bg-green-50",
                text: "text-green-600",
                icon: "text-green-500"
            }];
            return (0,
            s.jsxs)("div", {
                className: "py-12 px-4 max-w-6xl mx-auto my-10",
                children: [(0,
                s.jsx)("h3", {
                    className: "text-3xl font-semibold text-center mb-12 ",
                    children: n
                }), (0,
                s.jsx)("div", {
                    className: "grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8",
                    children: t.map( (e, t) => (0,
                    s.jsx)("div", {
                        className: "".concat(c[t].bg, " rounded-2xl p-6 transition-transform duration-300 hover:scale-105"),
                        children: (0,
                        s.jsxs)("div", {
                            className: "flex flex-col items-center space-y-4",
                            children: [(0,
                            s.jsxs)("div", {
                                className: "flex items-center justify-center space-x-2",
                                children: [(0,
                                s.jsx)("span", {
                                    className: "font-bold text-2xl ".concat(c[t].text),
                                    children: t + 1
                                }), (0,
                                s.jsx)("div", {
                                    className: "".concat(c[t].icon),
                                    children: r[t]
                                })]
                            }), (0,
                            s.jsx)("p", {
                                className: "text-gray-700 text-center text-lg",
                                children: l(e.p)
                            })]
                        })
                    }, t))
                })]
            })
        }
          , E = JSON.parse('[{"id":1,"img":"fast.svg","title":"card1_title","description":"card1_paragraph"},{"id":2,"img":"loop.svg","title":"card2_title","description":"card2_p"},{"id":3,"img":"shield.svg","title":"card3_title","description":"card3_p"},{"id":4,"img":"ux-design.svg","title":"card4_title","description":"card4_paragraph"},{"id":5,"img":"instructions.svg","title":"card5_title","description":"card5_p"},{"id":6,"img":"computing.svg","title":"card6_title","description":"card6_p"}]')
          , P = JSON.parse('[{"id":1,"p":"how_card1_p"},{"id":2,"p":"how_card2_p"},{"id":3,"p":"how_card3_p"}]')
          , B = a(5675)
          , D = a.n(B);
        let R = "y2Mate";
        var A = !0;
        function YtMate(e) {
            let {customSlug: t} = e
              , a = (0,
            r.useRouter)()
              , n = "en" === a.locale ? "".concat("https://y2mate.ing").concat(t) : "".concat("https://y2mate.ing", "/").concat(a.locale).concat(t)
              , {t: c} = (0,
            i.$G)(R);
            return (0,
            s.jsxs)("div", {
                children: [(0,
                s.jsxs)(l(), {
                    children: [(0,
                    s.jsx)("meta", {
                        charSet: "utf-8"
                    }), (0,
                    s.jsx)("title", {
                        children: c("meta_title")
                    }), (0,
                    s.jsx)("meta", {
                        property: "og:title",
                        content: c("meta_title")
                    }), (0,
                    s.jsx)("meta", {
                        property: "og:description",
                        content: "".concat(c("meta_description"))
                    }), (0,
                    s.jsx)("meta", {
                        property: "og:url",
                        content: n
                    }), (0,
                    s.jsx)("link", {
                        rel: "canonical",
                        href: n
                    }), (0,
                    s.jsx)("meta", {
                        name: "description",
                        content: "".concat(c("meta_description"))
                    }), (0,
                    s.jsx)(Meta, {}), hrefLang("https://y2mate.ing", t)]
                }), (0,
                s.jsx)(ui_Navbar, {
                    href: t
                }), (0,
                s.jsx)(home_Link, {
                    data: {
                        title: "".concat(c("l_title")),
                        p: "".concat(c("l_p")),
                        placeholder: "Enter YouTube URL here...",
                        button: "Get Link",
                        wrong: "Wrong URL"
                    },
                    contentType: "all"
                }), (0,
                s.jsx)(ui_Cards, {
                    data: E,
                    page: R,
                    title: c("best_section_title"),
                    p: c("best_section_p")
                }), (0,
                s.jsx)(ui_HowToConvert, {
                    title: c("how_to_convert_title"),
                    page: R,
                    data: P
                }), (0,
                s.jsx)(ui_Converter, {
                    title: c("paragraph_title"),
                    paragraph: c("paragraph")
                }), "en" === a.locale && (0,
                s.jsxs)("p", {
                    className: "max-w-5xl mx-auto my-10 px-4",
                    children: ["For saving music from videos,", " ", (0,
                    s.jsx)("a", {
                        href: "https://ytmp3c.app/",
                        className: "underline",
                        target: "_blank",
                        children: "ytmp3"
                    }), " ", "makes it really easy. It quickly turns video links into MP3 files you can listen to offline."]
                }), (0,
                s.jsx)(D(), {
                    src: "/y2mate-1.jpg",
                    width: 500,
                    height: 0,
                    alt: "y2mate",
                    className: "mx-auto mb-10"
                }), (0,
                s.jsxs)("div", {
                    className: "container mx-auto px-4 max-w-6xl py-8",
                    children: [(0,
                    s.jsx)("h4", {
                        className: "text-3xl font-semibold  text-center mb-4",
                        children: c("how_to_use_heading")
                    }), (0,
                    s.jsx)("p", {
                        className: "text-lg text-center mb-8",
                        children: c("how_to_use_subheading")
                    }), (0,
                    s.jsx)("ul", {
                        className: "space-y-4 list-none",
                        children: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(e => (0,
                        s.jsxs)("li", {
                            className: "flex items-start",
                            children: [(0,
                            s.jsx)("span", {
                                className: "inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white text-sm mr-3 mt-1 flex-shrink-0",
                                children: e
                            }), (0,
                            s.jsx)("span", {
                                className: "",
                                children: c("point_".concat(e))
                            })]
                        }, e))
                    })]
                }), (0,
                s.jsx)(ui_Converter, {
                    title: c("paragraph_title_2"),
                    paragraph: c("paragraph_2")
                }), (0,
                s.jsx)(D(), {
                    src: "/y2mate-1.jpg",
                    width: 500,
                    height: 0,
                    alt: "y2mate",
                    className: "mx-auto mb-10"
                }), (0,
                s.jsx)("p", {
                    className: "mb-10 text  text-center md:max-w-[960px] lg:max-w-[1140px] mx-[15px]  md:mx-auto",
                    children: c("paragraph_3")
                }), (0,
                s.jsx)(ui_Converter, {
                    title: c("conclusion_heading"),
                    paragraph: c("conclusion_desc")
                })]
            })
        }
    },
    4964: function(e) {
        e.exports = {
            container: "Loading_container__nwQml",
            bounce: "Loading_bounce__pelPb",
            bounce2: "Loading_bounce2__j6loT",
            bounce4: "Loading_bounce4__RsKE8"
        }
    }
}, function(e) {
    e.O(0, [158, 980, 445, 617, 583, 774, 888, 179], function() {
        return e(e.s = 5557)
    }),
    _N_E = e.O()
}
]);
