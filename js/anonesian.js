"use strict";var ANONESIAN=window.ANONESIAN||{};ANONESIAN.addEventListener=window.addEventListener.bind(window);var body = document.body;function EventHandler(n){this.el=n.el,this.handlers={}}EventHandler.prototype.on=function(n,e){this.handlers[n]||(this.handlers[n]=[]),this.handlers[n].push(e)},ANONESIAN.Event={newHandler:function(n){return new EventHandler(n)}};var AnonesianEventHandler=ANONESIAN.Event.newHandler({el:"AnonesianEventClick"}),btnTooltip=document.querySelector('[data-click="popupTooltip"]'),frmTooltip=document.querySelector(".adjustTooltip"),btnSearch=document.querySelector('[data-click="search"]'),fromSearch=document.querySelector(".form"),offCanvasMenu=document.querySelector(".js-headerOffCanvasMenu"),offCanvasTrigger=document.querySelector("[data-menu]"),offCanvasCloser=document.querySelectorAll("[data-menu-close]"),overlay=document.querySelector(".offCanvasMenu-backdrop"),nav=document.querySelector(".p-navSticky");const isDesktop=window.matchMedia("(min-width: 650px)").matches;if(isDesktop){let e=document.querySelectorAll(".menu.menu--structural"),t=document.querySelectorAll('[data-anonesian-click="menu"]'),l=document.querySelectorAll(".p-navEl");t.forEach(t=>{t.addEventListener("click",function(r){let o=t.parentNode.querySelector(".p-navEl-link"),s=o.offsetWidth,c=t.offsetWidth;t.offsetLeft,e.forEach(e=>{e.classList.remove("is-active")}),l.forEach(e=>{e.classList.remove("is-menuOpen")});let n=t.parentNode.querySelector(".menu.menu--structural");if(n&&(n.classList.add("is-active"),t.parentNode.classList.add("is-menuOpen"),!n.querySelector(".menu-arrow"))){let a=document.createElement("div");a.className="menu-arrow",n.insertBefore(a,n.firstChild),a.style.left=`${s+c/2}px`}})}),document.addEventListener("click",function(t){t.target.closest('[data-anonesian-click="menu"]')||(e.forEach(e=>{e.classList.remove("is-active")}),l.forEach(e=>{e.classList.remove("is-menuOpen")}))})}const scrollerContainer=document.querySelector(".hScroller"),scrollerContent=document.querySelector(".hScroller-scroll"),scrollEndButton=document.querySelector(".hScroller-action--end"),scrollStartButton=document.querySelector(".hScroller-action--start");if(scrollerContainer&&scrollerContent&&scrollEndButton&&scrollStartButton){let r=()=>{let e=scrollerContent.scrollLeft,t=scrollerContent.scrollWidth,l=scrollerContent.offsetWidth;t>l&&scrollEndButton.classList.add("is-active"),e<=0?scrollStartButton.classList.remove("is-active"):scrollStartButton.classList.add("is-active"),e+l>=t-1?scrollEndButton.classList.remove("is-active"):scrollEndButton.classList.add("is-active")};r(),scrollerContent.addEventListener("scroll",r),scrollEndButton.addEventListener("click",function(){scrollerContent.scrollBy({left:100,behavior:"smooth"})}),scrollStartButton.addEventListener("click",function(){scrollerContent.scrollBy({left:-100,behavior:"smooth"})})}ANONESIAN.addEventListener("click",e=>{frmTooltip.contains(e.target)||btnTooltip.contains(e.target)||frmTooltip.classList.remove("is-active")}),btnSearch.addEventListener("click",()=>{fromSearch.classList.contains("is-active")?fromSearch.classList.remove("is-active"):fromSearch.classList.add("is-active")}),document.addEventListener("click",e=>{fromSearch.contains(e.target)||btnSearch.contains(e.target)||fromSearch.classList.remove("is-active")}),document.querySelectorAll(".mode--iconic").forEach(function(e){e.addEventListener("click",function(t){e.classList.toggle("is-menuOpen")})}),document.addEventListener("click",function(e){document.querySelectorAll(".mode--iconic").forEach(function(t){t.contains(e.target)||e.target.closest(".adjustTooltip")||t.classList.remove("is-menuOpen")})}),document.querySelectorAll(".p-navgroup-link--search").forEach(function(e){e.addEventListener("click",function(t){e.classList.toggle("is-menuOpen")})}),document.addEventListener("click",function(e){document.querySelectorAll(".p-navgroup-link--search").forEach(function(t){t.contains(e.target)||e.target.closest(".form--wide")||t.classList.remove("is-menuOpen")})}),btnTooltip.addEventListener("click",()=>{frmTooltip.classList.contains("is-active")?frmTooltip.classList.remove("is-active"):frmTooltip.classList.add("is-active")});var scrollButtons=document.querySelectorAll(".button--scroll");let timeoutId=null,scrollTimeoutId=null;scrollButtons.forEach(o=>{o.addEventListener("click",t=>{t.preventDefault();var l=o.getAttribute("href"),e=document.querySelector(l);e?e.scrollIntoView({behavior:"smooth"}):"#top"===l?ANONESIAN.scrollTo({top:0,behavior:"smooth"}):ANONESIAN.scrollTo({top:document.body.offsetHeight,behavior:"smooth"})})});function toggleOffCanvasMenu(){offCanvasMenu.classList.toggle("active"),offCanvasMenu.querySelector(".offCanvasMenu-content").classList.toggle("active"),offCanvasMenu.classList.contains("active")?document.body.setAttribute("class","is-modalOpen"):document.body.removeAttribute("class","is-modalOpen")}offCanvasMenu.addEventListener("click",e=>{e.target===offCanvasMenu&&toggleOffCanvasMenu()}),offCanvasTrigger.addEventListener("click",toggleOffCanvasMenu),offCanvasCloser.forEach(e=>e.addEventListener("click",toggleOffCanvasMenu)),overlay.addEventListener("click",toggleOffCanvasMenu);ANONESIAN.addEventListener("scroll",()=>{window.scrollY>0?nav.classList.add("is-sticky"):nav.classList.remove("is-sticky"),clearTimeout(timeoutId),clearTimeout(scrollTimeoutId),scrollButtons.forEach(s=>s.classList.add("show")),scrollTimeoutId=setTimeout(()=>{scrollButtons.forEach(s=>s.classList.remove("show"))},3e3)}),ANONESIAN.ActionIndicator={globalAction:null,show:function(){this.globalAction||(this.globalAction=document.createElement("span"),this.globalAction.className="globalAction",this.globalAction.innerHTML='<span class="globalAction-bar"></span><span class="globalAction-block"><i></i><i></i><i></i></span>',document.body.appendChild(this.globalAction)),this.globalAction.classList.add("is-active")},hide:function(){this.globalAction&&this.globalAction.classList.remove("is-active")}};const shareButtons=document.querySelectorAll(".shareButtons-button"),currentUrl=window.location.href,currentTitle=document.title,currentDescription=document.querySelector('meta[property="og:description"]')?.getAttribute("content")||null,currentImage=document.querySelector('meta[property="og:image"]')?.getAttribute("content")||null;shareButtons.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let r=e.getAttribute("data-href"),n=e.getAttribute("data-anonesian-init");if("web-share"===n){if(navigator.canShare){let c={title:currentTitle,text:currentDescription,url:currentUrl};try{navigator.share(c)}catch(l){}}}else r&&(r=(r=(r=r.replace("{url}",encodeURIComponent(currentUrl))).replace("{title}",encodeURIComponent(currentTitle))).replace("{image}",encodeURIComponent(currentImage)))})});var target=document.querySelector(".js-offCanvasNavTarget"),source=document.querySelector(".js-offCanvasNavSource"),isMobile=window.innerWidth<=500;if(target&&source&&isMobile){target.appendChild(source),source.classList.remove("p-nav-list","js-offCanvasNavSource"),source.classList.add("offCanvasMenu-list"),source.querySelectorAll(".p-navEl").forEach(function(e){e.classList.remove("p-navEl"),e.classList.add("offCanvasMenu-linkHolder")});var e,n,a,r,t,l=source.nextElementSibling;l&&(l.classList.remove("p-navEl"),l.classList.add("offCanvasMenu-linkHolder")),document.querySelectorAll(".p-navEl-link").forEach(function(e){e.classList.add("offCanvasMenu-link")}),document.querySelectorAll(".menu--structural").forEach(function(e){var n=document.createElement("ul");n.classList.add("offCanvasMenu-subList"),n.innerHTML=e.innerHTML,e.parentNode.replaceChild(n,e)}),document.querySelectorAll(".menu-content").forEach(function(e){var n=document.createElement("li");n.innerHTML=e.innerHTML,e.parentNode.replaceChild(n,e)}),document.querySelectorAll(".offCanvasMenu-linkHolder").forEach(function(e){var n=e.querySelector("ul.offCanvasMenu-subList");n&&(e.parentNode.insertBefore(n,e.nextSibling),n.querySelectorAll("li").forEach(function(e){e.innerHTML=e.innerHTML.replace(/menu-linkRow/g,"offCanvasMenu-link")}))})}var offCanvasMenuSplits=document.querySelectorAll(".offCanvasMenu-linkHolder a:nth-child(2)");offCanvasMenuSplits.forEach(e=>{e.getAttributeNames().forEach(n=>e.removeAttribute(n)),e.setAttribute("class","offCanvasMenu-link offCanvasMenu-link--splitToggle"),e.setAttribute("role","button"),e.setAttribute("aria-expanded","false"),e.setAttribute("tabindex","0"),e.setAttribute("aria-label","menuItem")});function toggleMenuSplits(e){e.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let s=e.closest(".offCanvasMenu-linkHolder").nextElementSibling;e.classList.contains("is-active")?(e.classList.remove("is-active"),s.classList.remove("is-active"),s.style.height="0",e.setAttribute("aria-expanded","false")):(e.classList.add("is-active"),s.classList.add("is-active"),s.style.height=s.scrollHeight+"px",e.setAttribute("aria-expanded","true"))})})}function syncSelectedState(){let e=localStorage.getItem("_snid");if(!e)return;document.querySelectorAll(".is-selected").forEach(e=>{e.classList.remove("is-selected"),e.classList.contains("offCanvasMenu-subList")&&(e.style.height="")});let t=document.querySelectorAll(`.offCanvasMenu-link[data-nav-id="${e}"], .offCanvasMenu-subList .offCanvasMenu-link[data-nav-id="${e}"]`);t.forEach(e=>{let t=e.closest(".offCanvasMenu-linkHolder")||e.closest(".offCanvasMenu-subList")?.previousElementSibling;if(t){t.classList.add("is-selected");let s=t.querySelector(".offCanvasMenu-link--splitToggle");s&&(s.classList.add("is-active"),s.setAttribute("aria-expanded","true"));let a=t.nextElementSibling;a&&a.classList.contains("offCanvasMenu-subList")&&(a.classList.add("is-active"),a.style.height=a.scrollHeight+"px")}});let s=document.querySelectorAll(`.p-navEl-link[data-nav-id="${e}"], .menu-linkRow[data-nav-id="${e}"]`),a=document.querySelector(".p-sectionLinks-list");s.forEach(e=>{let t=e.closest(".p-navEl");if(t){t.classList.add("is-selected"),a&&(a.innerHTML="");let s=t.querySelector(".menu--structural");if(s&&a){let n=s.querySelectorAll(".menu-linkRow"),i=document.createDocumentFragment();n.forEach(e=>{let t=document.createElement("li");t.innerHTML=`<div class="p-navEl"><a href="${e.href}" class="p-navEl-link" data-nav-id="${e.dataset.navId}" data-anonesian-key="${e.dataset.anonesianKey||""}">${e.textContent}</a></div>`,i.appendChild(t)}),a.appendChild(i)}}})}toggleMenuSplits(offCanvasMenuSplits),document.querySelectorAll(".offCanvasMenu-link, .p-navEl-link, .menu-linkRow, .offCanvasMenu-subList .offCanvasMenu-link").forEach(e=>{e.addEventListener("click",function(e){this.classList.contains("offCanvasMenu-link--splitToggle")||localStorage.setItem("_snid",this.dataset.navId)})}),syncSelectedState();function changeMode(e){var t=document.body.querySelector(`.mode${e}`),a=document.body.querySelector(".mode--iconic i"),o=document.body.querySelector(".mode--iconic"),i=document.body.querySelector(".adjustTooltip");if(t&&a&&i){switch(document.querySelectorAll(".modeSystem, .modeLight, .modeDark").forEach(function(e){e.classList.remove("is-active")}),t.classList.add("is-active"),i.classList.add("is-active"),e){case"System":a.innerHTML='<i class="fa-adjust"></i>',i.classList.remove("is-active"),o.classList.remove("is-menuOpen"),updateMetaTags("System");break;case"Light":a.innerHTML='<i class="fa-sun"></i>',i.classList.remove("is-active"),o.classList.remove("is-menuOpen"),updateMetaTags("Light");break;case"Dark":a.innerHTML='<i class="fa-moon"></i>',i.classList.remove("is-active"),o.classList.remove("is-menuOpen"),updateMetaTags("Dark")}var c=localStorage.getItem("navData"),n=c?JSON.parse(c):{},s={mode:e,icon:encodeURIComponent(a.innerHTML),selectedNavId:n.selectedNavId},d=btoa(JSON.stringify(s));localStorage.setItem("_anonesian",d),"System"===e?document.documentElement.removeAttribute("data-theme"):document.documentElement.setAttribute("data-theme",e.toLowerCase())}}function updateMetaTags(e){if(document.querySelectorAll('meta[name="theme-color"]').forEach(e=>e.remove()),"System"===e){let t=document.createElement("meta");t.name="theme-color",t.media="(prefers-color-scheme: light)",t.content="#062c46",document.head.appendChild(t);let a=document.createElement("meta");a.name="theme-color",a.media="(prefers-color-scheme: dark)",a.content="#0a1c29",document.head.appendChild(a)}else if("Light"===e){let o=document.createElement("meta");o.name="theme-color",o.media="(prefers-color-scheme: light)",o.content="#062c46",document.head.appendChild(o)}else if("Dark"===e){let i=document.createElement("meta");i.name="theme-color",i.media="(prefers-color-scheme: dark)",i.content="#0a1c29",document.head.appendChild(i)}}function clickHandler(){var e=document.body.querySelector('[data-mode="adjust"]');if(e){var t=e.querySelector('[data-click="modeSystem"]'),a=e.querySelector('[data-click="modeLight"]'),o=e.querySelector('[data-click="modeDark"]');t&&t.addEventListener("click",function(e){ANONESIAN.ActionIndicator.show(),setTimeout(function(){changeMode("System"),ANONESIAN.ActionIndicator.hide()},1e3)},!1),a&&a.addEventListener("click",function(e){ANONESIAN.ActionIndicator.show(),setTimeout(function(){changeMode("Light"),ANONESIAN.ActionIndicator.hide()},1e3)},!1),o&&o.addEventListener("click",function(e){ANONESIAN.ActionIndicator.show(),setTimeout(function(){changeMode("Dark"),ANONESIAN.ActionIndicator.hide()},1e3)},!1)}}function setMode(){var e=localStorage.getItem("_anonesian");if(e){var t=JSON.parse(atob(e)),a=document.body.querySelector(`.mode${t.mode}`),o=document.body.querySelector(".mode--iconic i");o.innerHTML=decodeURIComponent(t.icon),a.classList.add("is-active"),updateMetaTags(t.mode)}else{var a=document.body.querySelector(".modeSystem");a.classList.add("is-active");var o=document.body.querySelector(".mode--iconic i");o.innerHTML='<i class="fa-adjust"></i>';var t={mode:"System",icon:encodeURIComponent('<i class="fa-adjust"></i>')},e=btoa(JSON.stringify(t));localStorage.setItem("_anonesian",e),document.documentElement.removeAttribute("data-theme"),updateMetaTags("System")}}AnonesianEventHandler.on("modeSystem",function(){changeMode("System")}),AnonesianEventHandler.on("modeLight",function(){changeMode("Light")}),AnonesianEventHandler.on("modeDark",function(){changeMode("Dark")}),ANONESIAN.addEventListener("DOMContentLoaded",setMode),clickHandler();