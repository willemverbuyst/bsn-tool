function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}var t=globalThis,i={},n={},a=t.parcelRequire8fc1;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return i[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequire8fc1=a);var r=a.register;r("3YwiC",function(t,i){var n,a;e(t.exports,"__esModule",()=>n,e=>n=e),e(t.exports,"generateBSN",()=>a,e=>a=e),n=!0,a=void 0,a=function(e){var t={leading:"9999",i4:9,i5:Math.floor(10*Math.random()),i6:Math.floor(10*Math.random()),i7:Math.floor(10*Math.random()),i8:0};e&&(t.leading="0000");var i=Array.from(String(t.leading),Number).reduce(function(e,t,i){return t*(9-i)+e},0)+5*t.i4+4*t.i5+3*t.i6+2*t.i7;return t.i8=Math.floor(i-11*Math.floor(i/11)),t.i8>9&&t.i7>0&&(t.i7-=1,t.i8=8),t.i8>9&&!(t.i7>0)&&(t.i7+=1,t.i8=1),"".concat(t.leading).concat(t.i4).concat(t.i5).concat(t.i6).concat(t.i7).concat(t.i8)}}),r("4y2p2",function(t,i){var n,a;e(t.exports,"__esModule",()=>n,e=>n=e),e(t.exports,"isValidBSN",()=>a,e=>a=e),n=!0,a=void 0,a=function(e){if(e.length<8||e.length>9)return!1;var t=Array.from(String(e),Number),i=t[t.length-1];return!("number"!=typeof i||t.includes(NaN))&&(t.slice(0,-1).reduce(function(e,t,i,n){return t*(n.length+1-i)+e},0)-i)%11==0}});var o={},c=o&&o.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),l=o&&o.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||c(t,e,i)};o.__esModule=!0,l(a("3YwiC"),o),l(a("4y2p2"),o);class s{button=document.getElementById("bsn-number__copy-button");copyIcon=document.getElementById("bsn-number__copy-icon");hide(){this.copyIcon.classList.replace("fa-check","fa-copy"),this.button.style.display="none"}display(){this.copyIcon.classList.replace("fa-check","fa-copy"),this.button.style.display="block"}displayCheckMark(){this.copyIcon.classList.replace("fa-copy","fa-check"),this.button.style.display="block"}listen(e){this.button.addEventListener("click",()=>{this.displayCheckMark(),navigator.clipboard.writeText(e.value)})}}class d{feedback=document.getElementById("feedback");displayNotValid(){this.feedback.textContent="this bsn is not valid",this.feedback.style.opacity="100",this.feedback.style.color="red"}displayValid(){this.feedback.textContent="this is a valid bsn",this.feedback.style.opacity="100",this.feedback.style.color="green"}reset(){this.feedback.textContent="placeholder",this.feedback.style.opacity="0"}}(()=>{let e=document.getElementById("bsn-number"),t=document.getElementById("bsn-generator-btn"),i=document.getElementById("bsn-validator-btn"),n=new s,a=new d;function r(e,t){""===e||t?""!==e&&t?a.displayValid():a.reset():a.displayNotValid()}t.addEventListener("click",()=>{a.reset();let t=(0,o.generateBSN)();e.value=t,n.display()}),i.addEventListener("click",()=>{let t=e.value.trim(),i=(0,o.isValidBSN)(t);r(t,i),i&&n.display()}),e.addEventListener("input",()=>{a.reset(),n.hide()}),e.addEventListener("keypress",t=>{if("Enter"===t.key){let t=e.value.trim(),i=(0,o.isValidBSN)(t);r(t,i),i&&n.display()}}),n.listen(e)})();
//# sourceMappingURL=index.97ea51b2.js.map