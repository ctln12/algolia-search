(this["webpackJsonpalgolia-search"]=this["webpackJsonpalgolia-search"]||[]).push([[0],{49:function(e,t,a){e.exports=a(67)},54:function(e,t,a){},55:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(47),l=a.n(c),i=(a(54),a(48)),s=a.n(i),o=a(73),m=a(69),d=a(71),h=a(75),u=a(74),E=a(72),p=(a(55),s()("LRNJXNO42B","25b590194234b396adb5f47435dd483d")),f=p.initIndex("talks");fetch("https://raw.githubusercontent.com/algolia/datasets/master/tedtalks/talks.json").then((function(e){return e.json()})).then((function(e){return f.saveObjects(e,{autoGenerateObjectIDIfNotExist:!0})}));var g=function(){return r.a.createElement(o.a,{searchClient:p,indexName:"talks"},r.a.createElement("h1",{id:"title"},r.a.createElement("span",null,"TED")," Talks"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"left-panel"},r.a.createElement("div",{id:"categories"},r.a.createElement(m.a,{header:"tags"},r.a.createElement(d.a,{attribute:"tags"})))),r.a.createElement("div",{className:"right-panel"},r.a.createElement("div",{id:"searchbox"},r.a.createElement(h.a,{translations:{placeholder:"Search talks..."}})),r.a.createElement("div",{id:"hits"},r.a.createElement(u.a,{hitComponent:function(e){var t=e.hit,a="".concat(t.speakers[0]," ").concat(t.name).split(/\W/).filter((function(e){return""!==e})).join("_"),n="https://www.ted.com/talks/".concat(a);return r.a.createElement("div",{className:"Hit"},r.a.createElement("h3",{className:"Hit-title"},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},t.name)),r.a.createElement("p",{className:"Hit-speaker"},t.speakers[0]),r.a.createElement("img",{className:"Hit-image",src:t.image_url,alt:""}))}})),r.a.createElement("div",{id:"pagination"},r.a.createElement(E.a,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.2bf7ede8.chunk.js.map