"use strict";var ANONESIAN=window.ANONESIAN||{};ANONESIAN.addEventListener=window.addEventListener.bind(window);var body=document.body;function EventHandler(n){this.el=n.el,this.handlers={}}EventHandler.prototype.on=function(n,e){this.handlers[n]||(this.handlers[n]=[]),this.handlers[n].push(e)},ANONESIAN.Event={newHandler:function(n){return new EventHandler(n)}};var AnonesianEventHandler=ANONESIAN.Event.newHandler({el:"AnonesianEventClick"}),btnTooltip=document.querySelector('[data-click="popupTooltip"]'),frmTooltip=document.querySelector(".adjustTooltip"),btnSearch=document.querySelector('[data-click="search"]'),fromSearch=document.querySelector(".form"),offCanvasMenu=document.querySelector(".js-headerOffCanvasMenu"),offCanvasTrigger=document.querySelector("[data-menu]"),offCanvasCloser=document.querySelectorAll("[data-menu-close]"),overlay=document.querySelector(".offCanvasMenu-backdrop"),nav=document.querySelector(".p-navSticky");const isDesktop=window.matchMedia('(min-width: 650px)').matches;if(isDesktop){const menuElements=document.querySelectorAll('.menu.menu--structural'),triggerElements=document.querySelectorAll('[data-anonesian-click="menu"]'),splitNavTrigger=document.querySelectorAll('.p-navEl');triggerElements.forEach((function(n){n.addEventListener('click',(function(e){const t=n.parentNode.querySelector('.p-navEl-link'),o=t.offsetWidth,c=n.offsetWidth,i=n.offsetLeft,d=o+c/2;menuElements.forEach((n=>n.classList.remove('is-active'))),splitNavTrigger.forEach((n=>n.classList.remove('is-menuOpen')));const l=n.parentNode.querySelector('.menu.menu--structural');l&&(l.classList.add('is-active'),n.parentNode.classList.add('is-menuOpen'),l.querySelector('.menu-arrow')||(function(n,e){const t=document.createElement('div');t.className='menu-arrow',n.insertBefore(t,n.firstChild),t.style.left=`${e}px`}(l,d)))}))})),document.addEventListener('click',(function(n){n.target.closest('[data-anonesian-click="menu"]')||(menuElements.forEach((n=>n.classList.remove('is-active'))),splitNavTrigger.forEach((n=>n.classList.remove('is-menuOpen'))))}))}const scrollerContainer=document.querySelector('.hScroller'),scrollerContent=document.querySelector('.hScroller-scroll'),scrollEndButton=document.querySelector('.hScroller-action--end'),scrollStartButton=document.querySelector('.hScroller-action--start');if(scrollerContainer&&scrollerContent&&scrollEndButton&&scrollStartButton){const n=()=>{const e=scrollerContent.scrollLeft,t=scrollerContent.scrollWidth,o=scrollerContent.offsetWidth;t>o&&scrollEndButton.classList.add('is-active'),e<=0?scrollStartButton.classList.remove('is-active'):scrollStartButton.classList.add('is-active'),e+o>=t-1?scrollEndButton.classList.remove('is-active'):scrollEndButton.classList.add('is-active')};n(),scrollerContent.addEventListener('scroll',n),scrollEndButton.addEventListener('click',(()=>{scrollerContent.scrollBy({left:100,behavior:'smooth'})})),scrollStartButton.addEventListener('click',(()=>{scrollerContent.scrollBy({left:-100,behavior:'smooth'})}))}ANONESIAN.addEventListener('click',(n=>{frmTooltip.contains(n.target)||btnTooltip.contains(n.target)||frmTooltip.classList.remove('is-active')})),btnSearch.addEventListener('click',(()=>{fromSearch.classList.contains('is-active')?fromSearch.classList.remove('is-active'):fromSearch.classList.add('is-active')})),document.addEventListener('click',(n=>{fromSearch.contains(n.target)||btnSearch.contains(n.target)||fromSearch.classList.remove('is-active')})),document.querySelectorAll(".mode--iconic").forEach((n=>{n.addEventListener("click",(n=>{n.currentTarget.classList.toggle("is-menuOpen")}))})),document.addEventListener("click",(n=>{document.querySelectorAll(".mode--iconic").forEach((e=>{e.contains(n.target)||n.target.closest(".adjustTooltip")||e.classList.remove("is-menuOpen")}))})),document.querySelectorAll(".p-navgroup-link--search").forEach((n=>{n.addEventListener("click",(n=>{n.currentTarget.classList.toggle("is-menuOpen")}))})),document.addEventListener("click",(n=>{document.querySelectorAll(".p-navgroup-link--search").forEach((e=>{e.contains(n.target)||n.target.closest(".form--wide")||e.classList.remove("is-menuOpen")}))})),btnTooltip.addEventListener('click',(()=>{frmTooltip.classList.toggle('is-active')}));var scrollButtons=document.querySelectorAll('.button--scroll'),timeoutId=null,scrollTimeoutId=null;scrollButtons.forEach((n=>{n.addEventListener('click',(e=>{e.preventDefault();const t=n.getAttribute('href'),o=document.querySelector(t);o?o.scrollIntoView({behavior:'smooth'}):"#top"===t?ANONESIAN.scrollTo({top:0,behavior:'smooth'}):ANONESIAN.scrollTo({top:document.body.offsetHeight,behavior:'smooth'})}))}));function toggleOffCanvasMenu(){offCanvasMenu.classList.toggle('active');const n=offCanvasMenu.querySelector('.offCanvasMenu-content');n.classList.toggle('active'),offCanvasMenu.classList.contains('active')?document.body.setAttribute('class','is-modalOpen'):document.body.removeAttribute('class','is-modalOpen')}offCanvasMenu.addEventListener('click',(n=>{n.target===offCanvasMenu&&toggleOffCanvasMenu()})),offCanvasTrigger.addEventListener('click',toggleOffCanvasMenu),offCanvasCloser.forEach((n=>n.addEventListener('click',toggleOffCanvasMenu))),overlay.addEventListener('click',toggleOffCanvasMenu),ANONESIAN.addEventListener('scroll',(()=>{window.scrollY>0?nav.classList.add('is-sticky'):nav.classList.remove('is-sticky'),clearTimeout(timeoutId),clearTimeout(scrollTimeoutId),scrollButtons.forEach((n=>n.classList.add('show'))),scrollTimeoutId=setTimeout((()=>{scrollButtons.forEach((n=>n.classList.remove('show')))}),3e3)})),ANONESIAN.ActionIndicator={globalAction:null,show:function(){this.globalAction||(this.globalAction=document.createElement('span'),this.globalAction.className='globalAction',this.globalAction.innerHTML='<span class="globalAction-bar"></span><span class="globalAction-block"><i></i><i></i><i></i></span>',document.body.appendChild(this.globalAction)),this.globalAction.classList.add('is-active')},hide:function(){this.globalAction&&this.globalAction.classList.remove('is-active')}};const shareButtons=document.querySelectorAll('.shareButtons-button'),currentUrl=window.location.href,currentTitle=document.title,currentDescription=(document.querySelector('meta[property="og:description"]')?.getAttribute('content')||null),currentImage=(document.querySelector('meta[property="og:image"]')?.getAttribute('content')||null);shareButtons.forEach((n=>{n.addEventListener('click',(e=>{e.preventDefault();let t=n.getAttribute('data-href');const o=n.getAttribute('data-anonesian-init');if('web-share'===o){if(navigator.canShare){const e={title:currentTitle,text:currentDescription,url:currentUrl};try{navigator.share(e)}catch(n){}}}else{t&&(t=t.replace('{url}',encodeURIComponent(currentUrl)).replace('{title}',encodeURIComponent(currentTitle)).replace('{image}',encodeURIComponent(currentImage)))}}))}));var target=document.querySelector('.js-offCanvasNavTarget'),source=document.querySelector('.js-offCanvasNavSource'),isMobile=window.innerWidth<=500;if(target&&source&&isMobile){target.appendChild(source),source.classList.remove('p-nav-list','js-offCanvasNavSource'),source.classList.add('offCanvasMenu-list');const n=source.querySelectorAll('.p-navEl');n.forEach((n=>{n.classList.remove('p-navEl'),n.classList.add('offCanvasMenu-linkHolder')}));const e=source.nextElementSibling;e&&(e.classList.remove('p-navEl'),e.classList.add('offCanvasMenu-linkHolder'));const t=document.querySelectorAll('.p-navEl-link');t.forEach((n=>{n.classList.add('offCanvasMenu-link')}));const o=document.querySelectorAll('.menu--structural');o.forEach((n=>{const e=document.createElement('ul');e.classList.add('offCanvasMenu-subList'),e.innerHTML=n.innerHTML,n.parentNode.replaceChild(e,n)})),document.querySelectorAll('.menu-content').forEach((n=>{const e=document.createElement('li');e.innerHTML=n.innerHTML,n.parentNode.replaceChild(e,n)})),document.querySelectorAll('.offCanvasMenu-linkHolder').forEach((n=>{const e=n.querySelector('ul.offCanvasMenu-subList');e&&(n.parentNode.insertBefore(e,n.nextSibling),e.querySelectorAll('li').forEach((n=>{n.innerHTML=n.innerHTML.replace(/menu-linkRow/g,'offCanvasMenu-link')})))}))}var offCanvasMenuSplits=document.querySelectorAll('.offCanvasMenu-linkHolder a:nth-child(2)');offCanvasMenuSplits.forEach((n=>{n.getAttributeNames().forEach((e=>n.removeAttribute(e))),n.setAttribute('class','offCanvasMenu-link offCanvasMenu-link--splitToggle'),n.setAttribute('role','button'),n.setAttribute('aria-expanded','false'),n.setAttribute('tabindex','0')}));function toggleMenuSplits(n){n.forEach((n=>{n.addEventListener('click',(e=>{e.preventDefault();const t=n.closest('.offCanvasMenu-linkHolder').nextElementSibling;n.classList.contains('is-active')?(n.classList.remove('is-active'),t.classList.remove('is-active'),t.style.height='0',n.setAttribute('aria-expanded','false')):(n.classList.add('is-active'),t.classList.add('is-active'),t.style.height=t.scrollHeight+'px',n.setAttribute('aria-expanded','true'))}))}))}toggleMenuSplits(offCanvasMenuSplits);function syncSelectedState(){const n=localStorage.getItem('_snid');if(n){document.querySelectorAll('.is-selected').forEach((n=>{n.classList.remove('is-selected'),n.classList.contains('offCanvasMenu-subList')&&(n.style.height='')}));const e=document.querySelectorAll(`.offCanvasMenu-link[data-nav-id="${n}"], .offCanvasMenu-subList .offCanvasMenu-link[data-nav-id="${n}"]`);e.forEach((e=>{const t=e.closest('.offCanvasMenu-linkHolder')||e.closest('.offCanvasMenu-subList')?.previousElementSibling;if(t){t.classList.add('is-selected');const o=t.querySelector('.offCanvasMenu-link--splitToggle');o&&(o.classList.add('is-active'),o.setAttribute('aria-expanded','true'));const c=t.nextElementSibling;c&&c.classList.contains('offCanvasMenu-subList')&&(c.classList.add('is-active'),c.style.height=c.scrollHeight+'px')}}));const t=document.querySelectorAll(`.p-navEl-link[data-nav-id="${n}"], .menu-linkRow[data-nav-id="${n}"]`),o=document.querySelector('.p-sectionLinks-list');t.forEach((n=>{const e=n.closest('.p-navEl');if(e){e.classList.add('is-selected');const t=e.querySelector('.menu--structural');o&&(o.innerHTML=''),t&&o&&(document.querySelectorAll('.menu-linkRow').forEach((n=>{const e=document.createElement('li');e.innerHTML=`<div class="p-navEl"><a href="${n.href}" class="p-navEl-link" data-nav-id="${n.dataset.navId}" data-anonesian-key="${n.dataset.anonesianKey||''}">${n.textContent}</a></div>`,o.appendChild(e)})))}}))}}document.querySelectorAll('.offCanvasMenu-link, .p-navEl-link, .menu-linkRow, .offCanvasMenu-subList .offCanvasMenu-link').forEach((n=>{n.addEventListener('click',(function(e){this.classList.contains('offCanvasMenu-link--splitToggle')||localStorage.setItem('_snid',this.dataset.navId)}))})),syncSelectedState();function changeMode(n){const e=document.body.querySelector(`.mode${n}`),t=document.body.querySelector('.mode--iconic i'),o=document.body.querySelector('.mode--iconic'),c=document.body.querySelector('.adjustTooltip');if(e&&t&&c){document.querySelectorAll('.modeSystem, .modeLight, .modeDark').forEach((n=>n.classList.remove('is-active'))),e.classList.add('is-active'),c.classList.add('is-active');switch(n){case'System':t.innerHTML='<i class="fa-adjust"></i>',c.classList.remove('is-active'),o.classList.remove('is-menuOpen'),updateMetaTags('System');break;case'Light':t.innerHTML='<i class="fa-sun"></i>',c.classList.remove('is-active'),o.classList.remove('is-menuOpen'),updateMetaTags('Light');break;case'Dark':t.innerHTML='<i class="fa-moon"></i>',c.classList.remove('is-active'),o.classList.remove('is-menuOpen'),updateMetaTags('Dark')}const i=localStorage.getItem('navData'),d=i?JSON.parse(i):{},l={mode:n,icon:encodeURIComponent(t.innerHTML),selectedNavId:d.selectedNavId},a=btoa(JSON.stringify(l));localStorage.setItem('_anonesian',a),'System'===n?document.documentElement.removeAttribute('data-theme'):document.documentElement.setAttribute('data-theme',n.toLowerCase())}}function updateMetaTags(n){document.querySelectorAll('meta[name="theme-color"]').forEach((n=>n.remove()));if('System'===n){const n=document.createElement('meta');n.name='theme-color',n.media='(prefers-color-scheme: light)',n.content='#062c46',document.head.appendChild(n);const e=document.createElement('meta');e.name='theme-color',e.media='(prefers-color-scheme: dark)',e.content='#0a1c29',document.head.appendChild(e)}else if('Light'===n){const n=document.createElement('meta');n.name='theme-color',n.media='(prefers-color-scheme: light)',n.content='#062c46',document.head.appendChild(n)}else if('Dark'===n){const n=document.createElement('meta');n.name='theme-color',n.media='(prefers-color-scheme: dark)',n.content='#0a1c29',document.head.appendChild(n)}}function clickHandler(){const n=document.body.querySelector('[data-mode="adjust"]');if(n){const e=n.querySelector('[data-click="modeSystem"]'),t=n.querySelector('[data-click="modeLight"]'),o=n.querySelector('[data-click="modeDark"]');e&&e.addEventListener('click',(n=>{ANONESIAN.ActionIndicator.show(),setTimeout((()=>{changeMode('System'),ANONESIAN.ActionIndicator.hide()}),1e3)})),t&&t.addEventListener('click',(n=>{ANONESIAN.ActionIndicator.show(),setTimeout((()=>{changeMode('Light'),ANONESIAN.ActionIndicator.hide()}),1e3)})),o&&o.addEventListener('click',(n=>{ANONESIAN.ActionIndicator.show(),setTimeout((()=>{changeMode('Dark'),ANONESIAN.ActionIndicator.hide()}),1e3)}))}}function setMode(){const n=localStorage.getItem('_anonesian');if(n){const e=atob(n),t=JSON.parse(e),o=document.body.querySelector(`.mode${t.mode}`),c=document.body.querySelector('.mode--iconic i');c.innerHTML=decodeURIComponent(t.icon),o.classList.add('is-active'),updateMetaTags(t.mode)}else{const n=document.body.querySelector('.modeSystem');n.classList.add('is-active');const e=document.body.querySelector('.mode--iconic i');e.innerHTML='<i class="fa-adjust"></i>';const t={mode:'System',icon:encodeURIComponent('<i class="fa-adjust"></i>')},o=btoa(JSON.stringify(t));localStorage.setItem('_anonesian',o),document.documentElement.removeAttribute('data-theme'),updateMetaTags('System')}}AnonesianEventHandler.on('modeSystem',(()=>{changeMode('System')})),AnonesianEventHandler.on('modeLight',(()=>{changeMode('Light')})),AnonesianEventHandler.on('modeDark',(()=>{changeMode('Dark')})),ANONESIAN.addEventListener('DOMContentLoaded',setMode),clickHandler();
