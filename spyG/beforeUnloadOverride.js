!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=845)}({845:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=chrome.runtime.id+Math.random();class o{constructor(){this.listener=((e,n,t)=>{"override"==e.type&&(window.dispatchEvent(new Event(r)),t("ok"))}),this.run=((e,...n)=>{const t=document.createElement("script");t.textContent=`(${e})(${JSON.stringify(n).slice(1,-1)})`,document.documentElement.appendChild(t),t.remove()}),chrome.runtime.onMessage.addListener(this.listener)}}n.BeforeUnloadOverride=o,(new o).run(function(e){let n;window.addEventListener(e,()=>{window.onbeforeunload=null,n=!0}),window.addEventListener("beforeunload",e=>{n&&e.stopImmediatePropagation()})},r)}});
