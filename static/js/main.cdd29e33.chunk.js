(this["webpackJsonpalgolia-search"]=this["webpackJsonpalgolia-search"]||[]).push([[0],{45:function(e,t,a){e.exports=a(63)},50:function(e,t,a){},51:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(43),c=a.n(i),l=(a(50),a(44)),o=a.n(l),s=a(67),m=a(68),h=a(69),u=a(66),d=(a(51),o()("LRNJXNO42B","25b590194234b396adb5f47435dd483d")),E=d.initIndex("talks");fetch("https://raw.githubusercontent.com/algolia/datasets/master/tedtalks/talks.json").then((function(e){return e.json()})).then((function(e){return E.saveObjects(e,{autoGenerateObjectIDIfNotExist:!0})}));var p=function(){return r.a.createElement(s.a,{searchClient:d,indexName:"talks"},r.a.createElement("h1",{id:"title"},r.a.createElement("span",null,"TED")," Talks"),r.a.createElement("div",{id:"searchbox"},r.a.createElement(m.a,{translations:{placeholder:"Search talks..."}})),r.a.createElement("div",{id:"hits"},r.a.createElement(h.a,{hitComponent:function(e){var t=e.hit;return r.a.createElement("div",{className:"Hit"},r.a.createElement("h3",{className:"Hit-title"},t.name),r.a.createElement("p",{className:"Hit-speaker"},t.speakers[0]),r.a.createElement("img",{className:"Hit-image",src:t.image_url,alt:""}))}})),r.a.createElement("div",{id:"pagination"},r.a.createElement(u.a,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.cdd29e33.chunk.js.map