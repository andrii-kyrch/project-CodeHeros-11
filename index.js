import{i as y,a as E,S as x,N as P,K as T}from"./assets/vendor-vv4MlyBQ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();function J({localStorageTheme:t,systemSettingDark:e}){return t!==null?t:e.matches?"dark":"light"}function v({buttonEl:t,isDark:e}){const s=e?"Switch to light theme":"Switch to dark theme";t.setAttribute("aria-label",s),t.setAttribute("title",s)}function f({theme:t}){document.querySelector("html").setAttribute("data-theme",t)}const p=document.querySelector("[data-theme-switch]"),q=localStorage.getItem("theme"),M=window.matchMedia("(prefers-color-scheme: dark)");let m=J({localStorageTheme:q,systemSettingDark:M});v({buttonEl:p,isDark:m==="dark"});f({theme:m});p.addEventListener("click",t=>{const e=m==="dark"?"light":"dark";localStorage.setItem("theme",e),v({buttonEl:p,isDark:e==="dark"}),f({theme:e}),m=e});function N(){const t=window.scrollY;document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.top=`-${t}px`,document.body.style.width="100%"}function R(){const t=Math.abs(parseInt(document.body.style.top,10));document.body.style.overflow="",document.body.style.position="",document.body.style.top="",document.body.style.width="",window.scrollTo(0,t)}const u=document.querySelector(".open-menu-btn"),g=document.querySelector(".menu"),G=document.querySelectorAll(".menu-link");u.addEventListener("click",()=>{g.classList.toggle("is-open"),u.classList.toggle("active"),g.classList.contains("is-open")?N():R()});G.forEach(t=>{t.addEventListener("click",()=>{g.classList.remove("is-open"),u.classList.remove("active")})});const O="/project-CodeHeros-11/assets/icons-BEahDM1L.svg",h=document.getElementById("loadMoreBtn"),B=document.querySelector(".my-projects-list");let a=0;const C=3;function S(){for(let t=0;t<C;t++)if(a<d.length){const e=d[a],s=document.createElement("li");s.classList.add("my-projects-item"),s.innerHTML=`
        <img class="project-img" src="${e.imgSrc}" alt="${e.altText}" />
        <p class="hard-skills">${e.skills}</p>
        <div class="project-item-box">
          <h3 class="project-name">${e.name}</h3>
          <a href="${e.githubLink}" target="_blank" class="button-link">
            Visit
            <svg class="link-icon" width="24" height="24">
              <use href="${O}#arrow"></use>
            </svg>
          </a>
        </div>
      `,B.appendChild(s),a++}a>=d.length&&(h.style.display="none",y.info({title:"Info",message:"There are no more projects to display.",position:"topRight"}))}const d=[{imgSrc:"${pathImg}wallet-webservice.webp",altText:"Wallet Webservice",skills:"React, JavaScript, Node JS, Git",name:"Wallet Webservice",githubLink:"https://github.com/project-repo"},{imgSrc:"/img/my-projects/green-harvest-online-store.webp",altText:"Green harvest online store",skills:"React, JavaScript, Node JS, Git",name:"Green harvest online store",githubLink:"https://github.com/project-repo"},{imgSrc:"/img/my-projects/english-excellence-webservice.webp",altText:"English excellence webservice",skills:"React, JavaScript, Node JS, Git",name:"English excellence webservice",githubLink:"https://github.com/project-repo"},{imgSrc:"/img/my-projects/power-pulse-webservice.webp",altText:"Power pulse webservice",skills:"React, JavaScript, Node JS, Git",name:"Power pulse webservice",githubLink:"https://github.com/project-repo"},{imgSrc:"/img/my-projects/mimino-website.webp",altText:"Mimino website",skills:"React, JavaScript, Node JS, Git",name:"Mimino website",githubLink:"https://github.com/project-repo"},{imgSrc:"/img/my-projects/vyshyvanka-vibes-landing-page.webp",altText:"Vyshyvanka vibes Landing Page",skills:"React, JavaScript, Node JS, Git",name:"Vyshyvanka vibes Landing Page",githubLink:"https://github.com/project-repo"},{imgSrc:"/img/my-projects/chego-jewelry-website.webp",altText:"Chego jewelry website",skills:"React, JavaScript, Node JS, Git",name:"Chego jewelry website",githubLink:"https://github.com/project-repo"},{imgSrc:"/img/my-projects/energy-flow-webservice.webp",altText:"Energy flow webservice",skills:"React, JavaScript, Node JS, Git",name:"Energy flow webservice",githubLink:"https://github.com/project-repo"},{imgSrc:"/img/my-projects/fruitbox-online-store.webp",altText:"Fruitbox online store",skills:"React, JavaScript, Node JS, Git",name:"Fruitbox online store",githubLink:"https://github.com/project-repo"},{imgSrc:"/img/my-projects/starlight-studio-landing-page.webp",altText:"Starlight studio landing page",skills:"React, JavaScript, Node JS, Git",name:"Starlight studio landing page",githubLink:"https://github.com/project-repo"}];h.addEventListener("click",S);document.addEventListener("DOMContentLoaded",()=>{S(),a<d.length&&(h.style.display="block")});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".accordion-item").forEach(e=>{e.querySelector(".accordion-header").addEventListener("click",()=>{const r=document.querySelector(".accordion-item.active");r&&r!==e&&r.classList.remove("active"),e.classList.toggle("active")})})});async function I(){const s="https://portfolio-js.b.goit.study/api"+"/reviews";return(await E.get(s)).data}function $(t,e){const s=t.map(({review:r,author:o,avatar_url:i})=>`<li class="swiper-slide reviews-item">
        <p class="reviews-text">${r}</p>
          <p class="reviews-author">
          <img src="${i}" alt="" />${o}</p>
      </li>`).join("");e.innerHTML=s}const D=document.querySelector(".swiper-wrapper"),A=document.querySelector(".reviews-prev-btn"),z=document.querySelector(".reviews-next-btn"),V={modules:[P,T],slidesPerView:1,slidesPerGroup:1,spaceBetween:20,slideActiveClass:"swiper-slide-active",loop:!1,keyboard:{enabled:!0},speed:500,navigation:{nextEl:".reviews-next-btn",prevEl:".reviews-prev-btn"},breakpoints:{1280:{slidesPerView:2,slidesPerGroup:2,spaceBetween:32}}};async function W(){try{let s=function(){A.disabled=e.isBeginning,z.disabled=e.isEnd};const t=await I();$(t,D);const e=new x(".swiper",V);window.addEventListener("resize",()=>e.update()),s()}catch{y.error({message:"Not found",maxWidth:350,closeOnEscape:!0,closeOnClick:!0,position:"topRight"})}}W();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".feedback-form"),e=document.querySelector(".backdrop"),s=document.querySelector(".modal-close-btn"),r=document.querySelector(".input-email"),o=document.querySelector(".error-message");t.addEventListener("submit",async c=>{c.preventDefault();const b=new FormData(t),w=b.get("email"),L=b.get("message");if(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(w))r.classList.remove("error"),o.style.display="none";else{r.classList.add("error"),o.style.display="block";return}const k={email:w,comment:L};try{const l=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)});if(!l.ok){const j=await l.json();throw new Error(j.message||"Не вдалося надіслати заявку. Перевірте введені дані.")}t.reset(),i()}catch(l){alert(l.message)}});function i(){e.classList.add("is-open")}function n(){e.classList.remove("is-open")}s.addEventListener("click",n),document.addEventListener("click",c=>{c.target===e&&n()}),document.addEventListener("keydown",c=>{c.key==="Escape"&&e.classList.contains("is-open")&&n()})});
//# sourceMappingURL=index.js.map
