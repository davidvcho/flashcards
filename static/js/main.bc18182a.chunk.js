(this.webpackJsonpflashcards=this.webpackJsonpflashcards||[]).push([[0],{104:function(e,t,n){e.exports=n(157)},109:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(30),l=n.n(o),c=(n(109),n(98)),i=n(173),s=n(178),u=n(179),d=n(34),f=n(7),m=n(87),h=n.n(m),p=function(e){var t=e.children;return r.a.createElement("div",{className:h.a.body},t)},b=n(92),g=n.n(b),v=n(171),E=n(88),w=n.n(E),k=Object(v.a)({root:{borderRadius:"0",boxShadow:"rgba(0, 0, 0, 0.1) 0px 36px 42px",padding:"30px",textAlign:"center"}}),y=function(e){var t=e.children,n=e.className,a=k();return r.a.createElement(g.a,{className:w()(a.root,n)},t)},x=n(22),j=n(94),O=n(93),N=n.n(O),C=n(174),S=function(){return r.a.createElement("div",{style:{top:"40%",left:"50%",position:"fixed",transform:"translate(-50%, -40%)"}},r.a.createElement(C.a,null))},W=r.a.createContext(null),_=function(){return Object(a.useContext)(W)},A=function(e){var t=e.children,n=Object(a.useState)(),o=Object(x.a)(n,2),l=o[0],c=o[1];Object(j.a)({promiseFn:Object(a.useCallback)((function(){return N.a.init({key:"1QYdRbzLNYf8gCN-45L-r-vhR3mRMDAkhc5xN8N0gmDo"})}),[]),onResolve:c});return l?r.a.createElement(W.Provider,{value:{data:l}},t):r.a.createElement(S,null)},R=Object(v.a)({card:{marginBottom:"16px"},title:{color:"white",textDecoration:"none"}}),L=function(){var e=R(),t=_().data;return r.a.createElement(p,null,Object.keys(t).map((function(t){return r.a.createElement(d.b,{key:t,to:"/".concat(t)},r.a.createElement(y,{className:e.card},r.a.createElement("h1",{className:e.title},t)))})))},M=n(96),F=n(176),P=n(177),B=n(175),D=n(180),J=n(97),U=n.n(J),T=function(e){var t=e.elements,n=Object(a.useState)(0),o=Object(x.a)(n,2),l=o[0],c=o[1],i=Object(a.useState)(!1),s=Object(x.a)(i,2),u=s[0],d=s[1],f=t[l];return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null,r.a.createElement("div",{style:{cursor:"pointer",position:"fixed",top:"40%",left:"50%",transform:"translate(-50%, -40%)",padding:"0 16px",width:"100%"},onClick:function(){return d(!u)}},r.a.createElement(y,null,r.a.createElement("h1",{style:{fontWeight:"normal"}},u?f.value:f.key)))),r.a.createElement("div",{style:{position:"fixed",bottom:"0",width:"100%",left:"0"}},r.a.createElement(B.a,{onChange:function(e,n){switch(n){case"previous":d(!1),c(Math.max(0,l-1));break;case"flip":d(!u);break;case"next":d(!1),c(Math.min(t.length-1,l+1))}},showLabels:!0,value:"flip"},r.a.createElement(D.a,{label:"Previous",value:"previous",icon:r.a.createElement(F.a,null)}),r.a.createElement(D.a,{label:"Flip",value:"flip",icon:r.a.createElement(U.a,null)}),r.a.createElement(D.a,{label:"Next",value:"next",icon:r.a.createElement(P.a,null)}))))},Y=function(){var e=Object(f.g)().id,t=_().data;return t[e]?r.a.createElement(T,{elements:Object(M.shuffle)(t[e].elements)}):r.a.createElement(f.a,{to:"/"})},z=function(){var e=Object(s.a)("(prefers-color-scheme: dark)")||!0,t=r.a.useMemo((function(){return Object(c.a)({palette:{type:e?"dark":"light",primary:{dark:"rgb(100,141,174)",light:"rgb(166, 212, 250)",main:"#90caf9"},secondary:{dark:"rgb(170, 100, 123)",light:"rgb(246, 165, 192)",main:"#f48fb1"},error:{dark:"#d32f2f",light:"#e57373",main:"#f44336"},warning:{dark:"#f57c00",light:"#ffb74d",main:"#ff9800"},info:{dark:"#1976d2",light:"#64b5f6",main:"#2196f3"},success:{dark:"#388e3c",light:"#81c784",main:"#4caf50"}}})}),[e]);return r.a.createElement(i.a,{theme:t},r.a.createElement(u.a,null),r.a.createElement(d.a,null,r.a.createElement(A,null,r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/",component:L}),r.a.createElement(f.b,{path:"/:id",children:r.a.createElement(Y,null)})))))},I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/flashcards",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/flashcards","/service-worker.js");I?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Q(t,e)}))}}()},87:function(e,t,n){e.exports={header:"page-layout_header__a3A80",body:"page-layout_body__26a0J",footer:"page-layout_footer__3l5wF"}}},[[104,1,2]]]);
//# sourceMappingURL=main.bc18182a.chunk.js.map