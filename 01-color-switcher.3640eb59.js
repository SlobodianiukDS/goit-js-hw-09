!function(){var e=document.querySelector("body"),t=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),n=null;t.addEventListener("click",(function(){t.disabled=!0,o.disabled=!1,n=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),console.log("color")}),1e3)})),o.addEventListener("click",(function(){t.disabled=!1,o.disabled=!0,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.3640eb59.js.map