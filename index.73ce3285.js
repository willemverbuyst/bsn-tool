function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequire8fc1;"use strict";null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire8fc1=i),i.register("3YwiC",function(t,n){"use strict";var r,i;e(t.exports,"__esModule",()=>r,e=>r=e),e(t.exports,"generateBSN",()=>i,e=>i=e),r=!0,i=void 0,i=function(e){var t={leading:"9999",i4:9,i5:Math.floor(10*Math.random()),i6:Math.floor(10*Math.random()),i7:Math.floor(10*Math.random()),i8:0};e&&(t.leading="0000");var n=Array.from(String(t.leading),Number).reduce(function(e,t,n){return t*(9-n)+e},0)+5*t.i4+4*t.i5+3*t.i6+2*t.i7;return t.i8=Math.floor(n-11*Math.floor(n/11)),t.i8>9&&t.i7>0&&(t.i7-=1,t.i8=8),t.i8>9&&!(t.i7>0)&&(t.i7+=1,t.i8=1),"".concat(t.leading).concat(t.i4).concat(t.i5).concat(t.i6).concat(t.i7).concat(t.i8)}}),i.register("4y2p2",function(t,n){"use strict";var r,i;e(t.exports,"__esModule",()=>r,e=>r=e),e(t.exports,"isValidBSN",()=>i,e=>i=e),r=!0,i=void 0,i=function(e){if(e.length<8||e.length>9)return!1;var t=Array.from(String(e),Number),n=t[t.length-1];return!("number"!=typeof n||t.includes(NaN))&&(t.slice(0,-1).reduce(function(e,t,n,r){return t*(r.length+1-n)+e},0)-n)%11==0}});var o={},a=o&&o.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),l=o&&o.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||a(t,e,n)};o.__esModule=!0,l(i("3YwiC"),o),l(i("4y2p2"),o),(()=>{let e=document.getElementById("bsn-number"),t=document.getElementById("feedback"),n=document.getElementById("bsn-generator-btn"),r=document.getElementById("bsn-validator-btn"),i=document.getElementById("bsn-number__copy-button"),a=e=>{let n=(0,o.isValidBSN)(e);""===e||n?""!==e&&n?(t.textContent="this is a valid bsn",t.style.opacity="100",t.style.color="green"):(t.textContent="placeholder",t.style.opacity="0"):(t.textContent="this bsn is not valid",t.style.opacity="100",t.style.color="red")};n.addEventListener("click",()=>{let n=(0,o.generateBSN)();t.textContent="placeholder",t.style.opacity="0",e.value=n}),r.addEventListener("click",()=>{let t=e.value.trim();a(t)}),e.addEventListener("input",()=>{t.textContent="placeholder",t.style.opacity="0"}),e.addEventListener("keypress",t=>{if("Enter"===t.key){let t=e.value.trim();a(t)}}),i.addEventListener("click",()=>{navigator.clipboard.writeText(e.value)})})();
//# sourceMappingURL=index.73ce3285.js.map
