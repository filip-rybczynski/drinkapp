!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){},,function(e,t,r){"use strict";r.r(t);r(0);"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))}));var n=document.querySelector(".value--js"),o=document.querySelector(".max--js"),i=document.querySelector(".add--js"),c=document.querySelector(".remove--js"),l=new Date,a=new Date(l);a.setDate(a.getDate()-1);var u=l.toLocaleString().slice(0,10),s=a.toLocaleString().slice(0,10),f=localStorage.getItem(u),d=localStorage.getItem(s),g=localStorage.getItem("record");f&&(n.innerHTML=f),d?d>g&&(g=d,localStorage.setItem("record",g)):(g=0,localStorage.setItem("record",g)),o.innerHTML=f>g?f:g,f>9&&(n.style.fontSize="6.2em"),i.addEventListener("click",(function(){n.innerHTML=++f,localStorage.setItem(u,f),f>g&&(o.innerHTML=f),10==f&&(n.style.fontSize="6.2em")})),c.addEventListener("click",(function(){f>0&&(n.innerHTML=--f,localStorage.setItem(u,f)),f>=g&&(o.innerHTML=f),9==f&&(n.style.fontSize="9em")}))}]);