!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var u=r("iU1Pc"),l=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),i=document.querySelector('input[name="amount"]'),c=document.querySelector("button");c.addEventListener("click",(function(t){t.preventDefault(),c.textContent="Stop promises",1===(d+=1)?f=setTimeout((function(){var t=0;s=setInterval((function(){var n,o;t<i.value?(n=t+=1,o=a.value,Math.random()>.3?e(u).Notify.success("Fulfilled promise ".concat(n," in ").concat(o,"ms")):e(u).Notify.failure("Rejected promise ".concat(n," in ").concat(o,"ms"))):p()}),a.value)}),l.value):p()}));var d=0,f=null,s=null;function p(){clearTimeout(f),clearInterval(s),i.value=a.value=l.value="",d=0,c.textContent="Create promises"}}();
//# sourceMappingURL=03-promises.9ea083d1.js.map
