import{i as J,a as b}from"./assets/vendor-DM1_jADJ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();function N({localStorageTheme:t,systemSettingDark:e}){return t!==null?t:e.matches?"dark":"light"}function S({buttonEl:t,isDark:e}){const s=e?"Switch to light theme":"Switch to dark theme";t.setAttribute("aria-label",s),t.setAttribute("title",s)}function w({theme:t}){document.querySelector("html").setAttribute("data-theme",t)}const g=document.querySelector("[data-theme-switch]"),M=localStorage.getItem("theme"),P=window.matchMedia("(prefers-color-scheme: dark)");let d=N({localStorageTheme:M,systemSettingDark:P});S({buttonEl:g,isDark:d==="dark"});w({theme:d});g.addEventListener("click",t=>{const e=d==="dark"?"light":"dark";localStorage.setItem("theme",e),S({buttonEl:g,isDark:e==="dark"}),w({theme:e}),d=e});const h=document.querySelector(".open-menu-btn"),k=document.querySelector(".menu"),R=document.querySelectorAll(".menu-link");h.addEventListener("click",()=>{k.classList.toggle("is-open"),h.classList.toggle("active")});R.forEach(t=>{t.addEventListener("click",()=>{k.classList.remove("is-open"),h.classList.remove("active")})});const v=document.getElementById("loadMoreBtn"),A=document.querySelector(".my-projects-list");let a=0;const O=3,m=[{imgSrc:"/img/img-my-projects/wallet-webservice.jpg",altText:"Wallet Webservice",skills:"React, JavaScript, Node JS, Git",name:"Wallet Webservice",githubLink:"https://github.com/project-repo"},{imgSrc:"/img/img-my-projects/green-harvest-online-store.jpg",altText:"Green harvest online store",skills:"React, JavaScript, Node JS, Git",name:"Green harvest online store",githubLink:"https://github.com/project-repo"},{imgSrc:"/img/img-my-projects/english-excellence-webservice.jpg",altText:"English excellence webservice",skills:"React, JavaScript, Node JS, Git",name:"English excellence webservice",githubLink:"https://github.com/project-repo"},{imgSrc:"/img/img-my-projects/power-pulse-webservice.jpg",altText:"Power pulse webservice",skills:"React, JavaScript, Node JS, Git",name:"Power pulse webservice",githubLink:"https://github.com/project-repo"},{imgSrc:"/img/img-my-projects/mimino-website.jpg",altText:"Mimino website",skills:"React, JavaScript, Node JS, Git",name:"Mimino website",githubLink:"https://github.com/project-repo"},{imgSrc:"/img/img-my-projects/vyshyvanka-vibes-landing-page.jpg",altText:"Vyshyvanka vibes Landing Page",skills:"React, JavaScript, Node JS, Git",name:"Vyshyvanka vibes Landing Page",githubLink:"https://github.com/project-repo"},{imgSrc:"/img/img-my-projects/chego-jewelry-website.jpg",altText:"Chego jewelry website",skills:"React, JavaScript, Node JS, Git",name:"Chego jewelry website",githubLink:"https://github.com/project-repo"},{imgSrc:"/img/img-my-projects/energy-flow-webservice.jpg",altText:"Energy flow webservice",skills:"React, JavaScript, Node JS, Git",name:"Energy flow webservice",githubLink:"https://github.com/project-repo"},{imgSrc:"/img/img-my-projects/fruitbox-online-store.jpg",altText:"Fruitbox online store",skills:"React, JavaScript, Node JS, Git",name:"Fruitbox online store",githubLink:"https://github.com/project-repo"},{imgSrc:"/img/img-my-projects/starlight-studio-landing-page.jpg",altText:"Starlight studio landing page",skills:"React, JavaScript, Node JS, Git",name:"Starlight studio landing page",githubLink:"https://github.com/project-repo"}];function L(){for(let t=0;t<O;t++)if(a<m.length){const e=m[a],s=document.createElement("li");s.classList.add("my-projects-item"),s.innerHTML=`
        <img class="project-img" src="${e.imgSrc}" alt="${e.altText}" />
        <p class="hard-skills">${e.skills}</p>
        <div class="project-item-box">
          <h3 class="project-name">${e.name}</h3>
          <a href="${e.githubLink}" target="_blank" class="button-link">
            Visit
            <svg class="link-icon" width="24" height="24">
              <use href="/img/sprite.svg#arrow"></use>
            </svg>
          </a>
        </div>
      `,A.appendChild(s),a++}a>=m.length&&(v.style.display="none",J.info({title:"Info",message:"There are no more projects to display.",position:"topRight"}))}v.addEventListener("click",L);document.addEventListener("DOMContentLoaded",()=>{L(),a<m.length&&(v.style.display="block")});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".accordion-item").forEach(e=>{e.querySelector(".accordion-header").addEventListener("click",()=>{const r=document.querySelector(".accordion-item.active");r&&r!==e&&r.classList.remove("active"),e.classList.toggle("active")})})});b.defaults.baseURL="https://portfolio-js.b.goit.study/api";document.querySelector(".main-list");document.querySelectorAll(".carousel-container");const j=document.querySelector(".carousel"),u=document.querySelector(".btn-prev"),p=document.querySelector(".btn-next");let E=0;window.addEventListener("load",t=>{D()});function C(t){const e=t.map(s=>`<div class="carousel-cell">
            <div class="review-style">
                <p class="review-text">${s.review}</p>
                <div class="user-card">
                  <img class="avatar" src="${s.avatar_url}" alt="" width="40px"; />
                  <p class="userName">${s.author}</p>  
                </div> 
            </div>
        </div>`).join("");j.innerHTML=e}async function D(){const e=(await G()).data;E=e.length,C(e),I()}async function G(){return await b.get("/reviews")}function I(t){var e={touchstart:!0,MSPointerDown:!0},s={INPUT:!0,SELECT:!0};Flickity.prototype.pointerDownFocus=function(o){if(!(!this.options.accessibility||e[o.type]||s[o.target.nodeName])){var i=this.options.scrollElement||window,n=this.options.scrollElement?"scrollTop":"pageYOffset",c=i[n];this.element.focus(),i[n]!=c&&(this.options.scrollElement?i.scrollTop=c:i.scrollTo(i.pageXOffset,c))}};var r=new Flickity(j,{accessibility:!1,pageDots:!1,prevNextButtons:!1,scrollElement:document.querySelector(".main-reviews")});u.addEventListener("click",function(){r.previous()}),p.addEventListener("click",function(){r.next()}),r.on("change",function(o){o==0?u.setAttribute("disabled",!0):o==E-1?p.setAttribute("disabled",!0):(p.removeAttribute("disabled"),u.removeAttribute("disabled"))})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".feedback-form"),e=document.querySelector(".backdrop"),s=document.querySelector(".modal-close-btn"),r=document.querySelector(".input-email"),o=document.querySelector(".error-message");t.addEventListener("submit",async c=>{c.preventDefault();const f=new FormData(t),y=f.get("email"),T=f.get("message");if(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(y))r.classList.remove("error"),o.style.display="none";else{r.classList.add("error"),o.style.display="block";return}const x={email:y,comment:T};try{const l=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)});if(!l.ok){const q=await l.json();throw new Error(q.message||"Не вдалося надіслати заявку. Перевірте введені дані.")}t.reset(),i()}catch(l){alert(l.message)}});function i(){e.classList.add("is-open")}function n(){e.classList.remove("is-open")}s.addEventListener("click",n),document.addEventListener("click",c=>{c.target===e&&n()}),document.addEventListener("keydown",c=>{c.key==="Escape"&&e.classList.contains("is-open")&&n()})});
//# sourceMappingURL=index.js.map
