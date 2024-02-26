(function(){"use strict";var e={5171:function(e,n,t){var o=t(9242),r=t(1020),u=t(3396),i=t(7139);function a(e,n,t,o,r,a){const c=(0,u.up)("NavBar"),l=(0,u.up)("router-view");return(0,u.wg)(),(0,u.iD)("div",{class:(0,i.C_)(o.colorStore.colorMode)},[(0,u.Wm)(c),(0,u.Wm)(l)],2)}const c={class:"navbar container"},l=(0,u._)("h1",{class:"navbar-brand font-800 font-large"},"Where in the world?",-1),f=(0,u._)("i",{class:"fa-regular fa-moon font-800 font-medium color-mode"},null,-1),s=(0,u._)("p",{class:"font-800 font-medium"},"Dark Mode",-1),d=[f,s];function p(e,n,t,o,r,i){return(0,u.wg)(),(0,u.iD)("nav",c,[l,(0,u._)("button",{class:"navbar-color-switch font-800",onClick:n[0]||(n[0]=e=>o.colorStore.colorModeToggle())},d)])}var v=t(4870);const m=(0,r.Q_)("color",(()=>{const e=localStorage.getItem("colorMode");let n=(0,v.iH)(e||"light-mode");function t(){n.value="dark-mode"===n.value?"light-mode":"dark-mode",localStorage.setItem("colorMode",n.value)}return{colorMode:n,colorModeToggle:t}}));var h={setup(){const e=m();return{colorStore:e}}},b=t(89);const g=(0,b.Z)(h,[["render",p]]);var y=g,w={name:"App",components:{NavBar:y},setup(){const e=m();return{colorStore:e}}};const k=(0,b.Z)(w,[["render",a]]);var O=k,j=t(2483);const _=[{path:"/",name:"home",component:()=>t.e(150).then(t.bind(t,6150))},{path:"/detail",name:"detail",component:()=>t.e(468).then(t.bind(t,4468))}],S=(0,j.p7)({history:(0,j.PO)("/"),routes:_});var M=S;const T=(0,r.WB)(),C=(0,o.ri)(O);C.use(T),C.use(M),C.mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var u=n[o]={exports:{}};return e[o].call(u.exports,u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,u){if(!o){var i=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],u=e[f][2];for(var a=!0,c=0;c<o.length;c++)(!1&u||i>=u)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(a=!1,u<i&&(i=u));if(a){e.splice(f--,1);var l=r();void 0!==l&&(n=l)}}return n}u=u||0;for(var f=e.length;f>0&&e[f-1][2]>u;f--)e[f]=e[f-1];e[f]=[o,r,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{150:"77ded6ef",468:"d9b47b55"}[e]+".js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue-app:";t.l=function(o,r,u,i){if(e[o])e[o].push(r);else{var a,c;if(void 0!==u)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==n+u){a=s;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+u),a.src=o),e[o]=[r];var d=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var u=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=u);var i=t.p+t.u(n),a=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var u=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;a.message="Loading chunk "+n+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,r[1](a)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,u,i=o[0],a=o[1],c=o[2],l=0;if(i.some((function(n){return 0!==e[n]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(c)var f=c(t)}for(n&&n(o);l<i.length;l++)u=i[l],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(f)},o=self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(5171)}));o=t.O(o)})();
//# sourceMappingURL=app.b84aabb0.js.map