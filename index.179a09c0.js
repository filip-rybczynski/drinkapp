!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=2)}([function(e,n,r){},,function(e,n,r){"use strict";r.r(n);r(0);"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))}));var t=document.querySelector(".value--js"),o=document.querySelector(".max--js"),i=document.querySelector(".add--js"),c=document.querySelector(".remove--js"),l=(new Date).toISOString().slice(0,10),u=localStorage.getItem(l);u&&(t.innerHTML=u);var a="";a=localStorage.getItem("record")?localStorage.getItem("record"):0,o.innerHTML=a,t.innerHTML>9&&(t.style.fontSize="6.2em"),i.addEventListener("click",(function(){t.innerHTML++,localStorage.setItem(l,t.innerHTML),a<t.innerHTML&&(console.log(a),o.innerHTML=t.innerHTML,localStorage.setItem("record",o.innerHTML)),10==t.innerHTML&&(t.style.fontSize="6.2em")})),c.addEventListener("click",(function(){t.innerHTML>0&&(t.innerHTML--,localStorage.setItem(l,t.innerHTML),a<=t.innerHTML&&(o.innerHTML=t.innerHTML,localStorage.setItem("record",o.innerHTML)),9==t.innerHTML&&(t.style.fontSize="9em"))}));var s=new Date;console.log(s),s=s.toISOString().slice(0,10),console.log(s)}]);