!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1);var r=document.querySelector(".value--js"),o=document.querySelector(".max--js"),i=document.querySelector(".add--js"),c=document.querySelector(".remove--js"),l=(new Date).toISOString().slice(0,10),u=localStorage.getItem(l);u&&(r.innerHTML=u);var a=localStorage.getItem("record");a&&(o.innerHTML=a),r.innerHTML>9&&(r.style.fontSize="6.2em"),i.addEventListener("click",(function(){r.innerHTML++,localStorage.setItem(l,r.innerHTML),a<r.innerHTML&&(console.log("test"),o.innerHTML=r.innerHTML,localStorage.setItem("record",o.innerHTML)),10==r.innerHTML&&(r.style.fontSize="6.2em")})),c.addEventListener("click",(function(){r.innerHTML>0&&(r.innerHTML--,localStorage.setItem(l,r.innerHTML),a<r.innerHTML&&(o.innerHTML=r.innerHTML,localStorage.setItem("record",o.innerHTML)),9==r.innerHTML&&(r.style.fontSize="9em"))}))},function(e,n,t){}]);