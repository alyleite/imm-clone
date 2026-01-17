! function() {
    var e = "v4";
    try {
        var i = new URLSearchParams(window.location.search),
            t = 'js';//i.get("playerVersion");
        t && (e = t)
    } catch (r) {
        console.error("Error getting version from search params", r)
    }
    if (!document.getElementById("vturb-smartplayer-js")) {
        var a = document.createElement("script"),
            M = "/" + e;
        try {
            var n = i.get("playerHost");
            n && (M = decodeURIComponent(n))
        } catch (r) {
            console.error("error getting playerHost from search params", r)
        }
        a.src = M + "/smartplayer.js", a.id = "vturb-smartplayer-js", a.fetchPriority = "high", document.head.appendChild(a)
    }
}(),
function() {
    var e = document.getElementById("vid-6882b7550c09716feb1a84f4"),
        i = function(e) {
            e.id = "vid-6882b7550c09716feb1a84f4"
        };
    e ? 0 === e.children.length && i(e) : (i(e = document.createElement("vturb-smartplayer")), "head" === document.currentScript.parentNode.tagName.toLowerCase() ? document.body.insertBefore(e, document.body.firstChild) : document.currentScript.parentNode.insertBefore(e, document.currentScript))
}(),
function(e, i) {
    e._plt = e._plt || (i && i.timeOrigin ? i.timeOrigin + i.now() : Date.now() - 60)
}(window, performance),
function() {
    var e = document.getElementById("vid-6882b7550c09716feb1a84f4");
    e.style.maxWidth = window.innerWidth <= 450 ? "100%" : "400px", e.start = function(i) {
        e.setup ? e.setup(i) : this._setup = i
    };
    var i = {
            "callActions": {
                "active": !1,
                "items": []
            },
            "cdn": "cdn.converteai.net",
            "conversion": [],
            "fakeBar": {
                "active": !0,
                "alpha": 2,
                "height": 13,
                "color": "#B782F0"
            },
            "headlines": {
                "active": !1,
                "items": []
            },
            "id": "68844f95aeea8b68f18e4f87",
            "language": null,
            "minihooks": {
                "active": !1,
                "items": []
            },
            "oid": "12e49dd0-7d9e-43aa-a9df-782dcb774235",
            "pixels": {
                "active": !0,
                "items": [{
                    "id": "6882bb673855e389e011a044_60a33183",
                    "type": "facebook",
                    "dispatchIn": 75,
                    "dispatchType": "time",
                    "pixelId": "32995763813404033",
                    "pixelValue": "OffertCTA"
                }]
            },
            "playback": {
                "active": !1,
                "actionAfterFinish": null,
                "scrollToActionIn": 0
            },
            "playerInit": {
                "aspectRatio": 177.63,
                "thumbnailKey": "12e49dd0-7d9e-43aa-a9df-782dcb774235/players/68844f95aeea8b68f18e4f87/thumbnail.jpg"
            },
            "resume": {
                "active": !0,
                "model": "default",
                "backgroundColor": "#B782F0",
                "disablePause": !1,
                "foregroundColor": "#FFFFFF",
                "play": "\xbfContinuar viendo?",
                "replay": "\xbfComenzar desde el principio?",
                "title": "Ya has comenzado a ver este v\xeddeo"
            },
            "secure": !1,
            "smartAutoPlay": {
                "active": !0,
                "items": [{
                    "id": "smart_autoplay_68844f95aeea8b68f18e4f87_1_99eb0148",
                    "name": "Smart Autoplay 1",
                    "number": 1,
                    "version": "2",
                    "startAt": 0,
                    "endAt": 99,
                    "animation": {
                        "animation": "pulse",
                        "properties": {
                            "speed": 4
                        }
                    },
                    "elements": [{
                        "height": 375.321375,
                        "id": "6882bb673855e389e011a041",
                        "opacity": 1,
                        "order": 1,
                        "rotation": 0,
                        "type": "box",
                        "width": 343.258832,
                        "x": 132.51030888667643,
                        "y": 327.6271253651268,
                        "transformOrigin": null,
                        "properties": {
                            "border": {
                                "color": "rgb(255, 255, 255)",
                                "size": 1.267,
                                "type": "solid"
                            },
                            "color": "rgba(183, 129, 240, 0.8)",
                            "radius": 5.067
                        }
                    }, {
                        "height": 166.41007499999998,
                        "id": "6882bb673855e389e011a042",
                        "opacity": 1,
                        "order": 2,
                        "rotation": 0,
                        "type": "text",
                        "width": 281.64457999999996,
                        "x": 164.0355359289856,
                        "y": 383.03076154165143,
                        "transformOrigin": null,
                        "properties": {
                            "align": "center",
                            "color": "rgb(255, 255, 255)",
                            "size": 52.806656,
                            "value": "Haga clic para escuchar",
                            "weight": 600
                        }
                    }, {
                        "height": 88.3116,
                        "id": "6882bb673855e389e011a043",
                        "opacity": 1,
                        "order": 3,
                        "rotation": 0,
                        "type": "image",
                        "width": 114.420908,
                        "x": 243.20866336573462,
                        "y": 588.7595267531782,
                        "transformOrigin": null,
                        "properties": {
                            "alt": "Haga clic para escuchar",
                            "src": "data:image/svg+xml;base64,CiAgPHN2ZyB2ZXJzaW9uPSIxLjEiIGZpbGw9IiNGRkZGRkYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgICAgIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDYuNzVweCIgaGVpZ2h0PSIzMi41NjNweCIgdmlld0JveD0iNy45OTkgOS4wNjIgNDYuNzUgMzIuNTYzIgogICAgICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDcuOTk5IDkuMDYyIDQ2Ljc1IDMyLjU2MyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICA+CiAgICA8c3R5bGU+CiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBCTElOSyB7CiAgICAgICAgMCUgeyBvcGFjaXR5OiAwOyB9CiAgICAgICAgMzMlIHsgb3BhY2l0eTogMTsgfQogICAgICAgIDY2JSB7IG9wYWNpdHk6IDE7IH0KICAgICAgICAxMDAlIHsgb3BhY2l0eTogMDsgfQogICAgICB9CgogICAgICBAa2V5ZnJhbWVzIEJMSU5LIHsKICAgICAgICAwJSB7IG9wYWNpdHk6IDA7IH0KICAgICAgICAzMyUgeyBvcGFjaXR5OiAxOyB9CiAgICAgICAgNjYlIHsgb3BhY2l0eTogMTsgfQogICAgICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9CiAgICAgIH0KCiAgICAgIC5hbmltYXRpb24gLmJsaW5rXzEgewogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZTsKICAgICAgICBhbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlOwogICAgICAgIG9wYWNpdHk6IDA7CiAgICAgIH0KCiAgICAgIC5hbmltYXRpb24gLmJsaW5rXzIgewogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZSAuM3M7CiAgICAgICAgYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZSAuM3M7CiAgICAgICAgb3BhY2l0eTogMDsKICAgICAgfQoKICAgICAgLmFuaW1hdGlvbiAuYmxpbmtfMyB7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlIC42czsKICAgICAgICBhbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlIC42czsKICAgICAgICBvcGFjaXR5OiAwOwogICAgICB9CgogICAgICAuYW5pbWF0aW9uIC5zbWFydHBsYXktc3ZnLWNvbG9yIHsKICAgICAgICBmaWxsOiAnI0ZGRkZGRicgIWltcG9ydGFudDsKICAgICAgfQoKICAgICAgLmFuaW1hdGlvbi5hZGp1c3RhYmxlIHsKICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAnI0ZGRkZGRic7CiAgICAgIH0KICAgIDwvc3R5bGU+CgogICAgPGcgY2xhc3M9ImFkanVzdGFibGUgZmcgYW5pbWF0aW9uIj4KICAgICAgPHBhdGggY2xhc3M9InNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik01My4yNDksMzkuNjE2Yy0wLjE4NiwwLTAuMzcxLTAuMDUxLTAuNTM3LTAuMTU3bC00My41LTI3Ljc1Yy0wLjQ2Ni0wLjI5Ny0wLjYwMy0wLjkxNi0wLjMwNi0xLjM4MWMwLjI5OC0wLjQ2NiwwLjkxNy0wLjYwMSwxLjM4MS0wLjMwNmw0My41LDI3Ljc1YzAuNDY3LDAuMjk3LDAuNjA0LDAuOTE2LDAuMzA3LDEuMzgxQzUzLjkwMSwzOS40NTMsNTMuNTc5LDM5LjYxNiw1My4yNDksMzkuNjE2eiI+PC9wYXRoPgogICAgICA8cGF0aCBjbGFzcz0iYmxpbmtfMyBzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNNDguODk2LDMzLjQ2N2wxLjY5OSwxLjA4NWMzLjQ5Ny03Ljc5MSwyLjA3My0xNy4yNzEtNC4zMTMtMjMuNjU5Yy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwcy0wLjM5MSwxLjAyMywwLDEuNDE0QzUwLjU4MSwxOC4wMTksNTEuOTEzLDI2LjQ2Myw0OC44OTYsMzMuNDY3eiI+PC9wYXRoPgogICAgICA8cGF0aCBjbGFzcz0iYmxpbmtfMyBzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNNDYuOTI2LDM2Ljk1NmMtMC42MTIsMC44NjMtMS4yODYsMS42OTUtMi4wNTksMi40NjljLTAuMzkyLDAuMzkxLTAuMzkyLDEuMDIzLDAsMS40MTRjMC4xOTQsMC4xOTUsMC40NSwwLjI5MywwLjcwNywwLjI5M2MwLjI1NiwwLDAuNTEyLTAuMDk4LDAuNzA2LTAuMjkzYzAuODc4LTAuODc4LDEuNjQyLTEuODI0LDIuMzMzLTIuODA3TDQ2LjkyNiwzNi45NTZ6Ij48L3BhdGg+CiAgICAgIDxwYXRoIGNsYXNzPSJibGlua18yIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik00Mi41NDMsMjkuNDE1bDEuNzc3LDEuMTM1YzEuNTQ1LTUuMzE1LDAuMjI5LTExLjI5My0zLjk1My0xNS40NzZjLTAuMzkyLTAuMzkxLTEuMDIzLTAuMzkxLTEuNDE0LDBjLTAuMzkyLDAuMzkxLTAuMzkyLDEuMDIzLDAsMS40MTRDNDIuNDU0LDE5Ljk4Nyw0My42MzksMjQuOTI1LDQyLjU0MywyOS40MTV6Ij48L3BhdGg+CiAgICAgIDxwYXRoIGNsYXNzPSJibGlua18yIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik00MSwzMy4xNzRjLTAuNTYzLDAuOTQtMS4yMzUsMS44MzctMi4wNDcsMi42NDZjLTAuMzkxLDAuMzkyLTAuMzkxLDEuMDIzLDAsMS40MTRjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNzMC41MTItMC4wOTgsMC43MDctMC4yOTNjMC45MTYtMC45MTQsMS42NzYtMS45MjQsMi4zMTctMi45ODRMNDEsMzMuMTc0eiI+PC9wYXRoPgogICAgICA8cGF0aCBjbGFzcz0iYmxpbmtfMSBzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNMzUuNzcxLDI1LjA5NGwyLjAwMywxLjI3N2MwLjAxMi0wLjIwMywwLjAyOS0wLjQwNCwwLjAyOS0wLjYwOWMwLTMuMDc5LTEuMi01Ljk3NC0zLjM4MS04LjE1M2MtMC4zOTEtMC4zOTEtMS4wMjItMC4zOTEtMS40MTQsMGMtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNEMzNC42NTIsMjAuNjY2LDM1LjYxMywyMi44MDIsMzUuNzcxLDI1LjA5NHoiPjwvcGF0aD4KICAgICAgPHBhdGggY2xhc3M9ImJsaW5rXzEgc21hcnRwbGF5LXN2Zy1jb2xvciIgZD0iTTM1LjA4NCwyOS40MDFjLTAuNDc0LDEuMTQ1LTEuMTcyLDIuMTk3LTIuMDc2LDMuMWMtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNGMwLjE5NSwwLjE5NSwwLjQ1MSwwLjI5MywwLjcwNywwLjI5M2MwLjI1NywwLDAuNTEzLTAuMDk4LDAuNzA3LTAuMjkzYzEuMDA4LTEuMDA2LDEuNzk1LTIuMTcsMi4zNjEtMy40M0wzNS4wODQsMjkuNDAxeiI+PC9wYXRoPgogICAgICA8cG9seWdvbiBjbGFzcz0ic21hcnRwbGF5LXN2Zy1jb2xvciIgcG9pbnRzPSIyOC4xMjQsMjAuMjE1IDI4LjEyNCwxNC45OTEgMjQuNjM1LDE3Ljk5ICAiPjwvcG9seWdvbj4KICAgICAgPHBhdGggY2xhc3M9InNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik0yMC45MjEsMjAuMzY2aC02LjQyM2MtMC41NTMsMC0xLDAuNTA4LTEsMS4xMzV2OC4yMjljMCwwLjYyNywwLjQ0NywxLjEzNSwxLDEuMTM1aDcuMzc1bDYuMjUsNS44NzVWMjQuOTZMMjAuOTIxLDIwLjM2NnoiPjwvcGF0aD4KICAgIDwvZz4KICA8L3N2Zz4K"
                        }
                    }]
                }]
            },
            "style": {
                "background": "#5AA738",
                "bigPlay": !1,
                "captions": !1,
                "foreground": "#FFFFFF",
                "forward": !1,
                "fullscreen": !1,
                "progressBar": !1,
                "rewind": !1,
                "smallPlay": !0,
                "speed": !1,
                "videoTime": !1,
                "volume": !1
            },
            "subtitles": {
                "active": !1
            },
            "thumbsniper": {
                "active": !0,
                "items": [{
                    "id": "6882bb673855e389e011a045_b4bed2f5",
                    "image": "https://cdn.converteai.net/12e49dd0-7d9e-43aa-a9df-782dcb774235/2025/07/24/6882baeb24a5920001195670.png",
                    "start": 0,
                    "finish": 353
                }]
            },
            "video": {
                "id": "6882b748a415b12b55ac7dbd",
                "aspectRatio": 1.7763,
                "height": 1080,
                "poster": "https://cdn.converteai.net/12e49dd0-7d9e-43aa-a9df-782dcb774235/6882b748a415b12b55ac7dbd/poster.jpg",
                "width": 608,
                "drm": !1
            }
        },
        t = null,
        a = window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/),
        M = (a = a && a[0]) ? i : t || i;
    e.id !== "vid-" + M.id && (e.id = "vid-" + M.id, e.innerHTML = ""), e.style.display = "block", e.style.margin = "0 auto", e.style.width = "100%", 0 === e.children.length && ("68844f95aeea8b68f18e4f87" === M.id ? (e.innerHTML = "<div slot=\"preload\" class=\"preload preload--netflix\" style=\" position: relative; width: 100%; padding: 177.63% 0 0; z-index: 0;\"> <div id=\"loading_68844f95aeea8b68f18e4f87\" class=\"vt-loading-wrapper\"> <div class=\"vt-loading-android-spinner\"></div> <div class=\"vt-loading-percentage\">50%</div> </div> </div> <style>\n  [class^=\"vt-loading\"]{box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;text-decoration:none}.vt-loading-wrapper{position:absolute;top:0;left:0;width:100%;height:100%;z-index:99999;background-color:#000;color:#fff;display:flex!important;justify-content:center;align-items:center}.vt-loading-percentage{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:18px;font-weight:600}#smartplayer .vt-loading-percentage{content:\"99%\"}.vt-loading-android-spinner{width:80px;aspect-ratio:1;border-radius:50%;background:radial-gradient(farthest-side,#E50914 94%,#0000) top/8px 8px no-repeat,conic-gradient(#0000 30%,#E50914);-webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);animation:vt-loading-android-spinner-animation .75s infinite linear}@keyframes vt-loading-android-spinner-animation{100%{transform:rotate(1turn)}}\n</style>", function() {
        var e = document.querySelector(".vt-loading-percentage");
        if (e) var i = 50,
            t = setInterval(function() {
                i++, e.textContent = i + "%", i >= 99 && clearInterval(t)
            }, 30)
    }()) : e.innerHTML = "<div class=\"thumbnail\" style=\" position: relative; width: 100%; padding: " + M.playerInit.aspectRatio + "% 0 0; z-index: 0;\"><img class=\"thumbnail-image\" src=\"https://images.converteai.net/" + M.playerInit.thumbnailKey + "\" style=\" position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;  \" /></div>"), e.start(M)
}();