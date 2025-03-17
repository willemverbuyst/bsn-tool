(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();var a={},c={},d;function y(){if(d)return c;d=1,c.__esModule=!0,c.generateBSN=void 0;var s=function(i){var e={leading:"9999",i4:9,i5:Math.floor(Math.random()*10),i6:Math.floor(Math.random()*10),i7:Math.floor(Math.random()*10),i8:0};i&&(e.leading="0000");var n=Array.from(String(e.leading),Number).reduce(function(t,r,o){return r*(9-o)+t},0)+5*e.i4+4*e.i5+3*e.i6+2*e.i7;return e.i8=Math.floor(n-Math.floor(n/11)*11),e.i8>9&&e.i7>0&&(e.i7-=1,e.i8=8),e.i8>9&&!(e.i7>0)&&(e.i7+=1,e.i8=1),"".concat(e.leading).concat(e.i4).concat(e.i5).concat(e.i6).concat(e.i7).concat(e.i8)};return c.generateBSN=s,c}var u={},f;function p(){if(f)return u;f=1,u.__esModule=!0,u.isValidBSN=void 0;var s=function(i){if(i.length<8||i.length>9)return!1;var e=Array.from(String(i),Number),n=e[e.length-1];return typeof n=="number"&&!e.includes(NaN)?(e.slice(0,-1).reduce(function(t,r,o,b){return r*(b.length+1-o)+t},0)-n)%11===0:!1};return u.isValidBSN=s,u}var h;function m(){return h||(h=1,function(s){var i=a&&a.__createBinding||(Object.create?function(n,t,r,o){o===void 0&&(o=r),Object.defineProperty(n,o,{enumerable:!0,get:function(){return t[r]}})}:function(n,t,r,o){o===void 0&&(o=r),n[o]=t[r]}),e=a&&a.__exportStar||function(n,t){for(var r in n)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&i(t,n,r)};s.__esModule=!0,e(y(),s),e(p(),s)}(a)),a}var l=m();class v{constructor(i,e,n){this.feedback=i,this.copyButton=e,this.bsnNumber=n,this.bsnGeneratorBtn=document.getElementById("bsn-generator-btn"),this.bsnGeneratorBtn.addEventListener("click",()=>{this.feedback.reset();const t=l.generateBSN();this.bsnNumber.value=t,this.copyButton.display()})}}class B{constructor(i,e){this.feedback=i,this.copyButton=e,this.bsnNumber=document.getElementById("bsn-number"),this.bsnNumber.addEventListener("input",()=>{this.feedback.reset(),this.copyButton.removeCheckMark()})}onKeyPress(){this.bsnNumber.addEventListener("keypress",i=>{if(i.key==="Enter"){const e=this.bsnNumber.value.trim(),n=l.isValidBSN(e);this.feedback.update(e,n),n&&this.copyButton.display()}})}get value(){return this.bsnNumber.value}set value(i){this.bsnNumber.value=i}}class g{constructor(i,e,n){this.feedback=i,this.copyButton=e,this.bsnNumber=n,this.bsnValidatorBtn=document.getElementById("bsn-validator-btn"),this.bsnValidatorBtn.addEventListener("click",()=>{var o;const t=(o=this.bsnNumber)==null?void 0:o.value.trim(),r=l.isValidBSN(t);this.feedback.update(t,r),r&&this.copyButton.display()})}}class N{constructor(){this.button=document.getElementById("bsn-number__copy-button"),this.copyIcon=document.getElementById("bsn-number__copy-icon")}removeCheckMark(){this.copyIcon.classList.replace("fa-check","fa-copy")}display(){this.copyIcon.classList.replace("fa-check","fa-copy"),this.button.style.display="block"}displayCheckMark(){this.copyIcon.classList.replace("fa-copy","fa-check"),this.button.style.display="block"}listen(i){this.button.addEventListener("click",()=>{this.displayCheckMark(),navigator.clipboard.writeText(i.value)})}}class k{constructor(){this.feedback=document.getElementById("feedback")}displayNotValid(){this.feedback.textContent="this bsn is not valid",this.feedback.style.opacity="100",this.feedback.style.color="red"}displayValid(){this.feedback.textContent="this is a valid bsn",this.feedback.style.opacity="100",this.feedback.style.color="green"}reset(){this.feedback.textContent="placeholder",this.feedback.style.opacity="0"}update(i,e){i!==""&&!e?this.displayNotValid():i!==""&&e?this.displayValid():this.reset()}}const _=()=>{const s=new N,i=new k,e=new B(i,s);new v(i,s,e),new g(i,s,e),s.listen(e)};_();
