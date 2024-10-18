import{i as w,a as C,S as E,N as H,K as x}from"./assets/vendor-vv4MlyBQ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();function P({localStorageTheme:t,systemSettingDark:e}){return t!==null?t:e.matches?"dark":"light"}function v({buttonEl:t,isDark:e}){const o=e?"Switch to light theme":"Switch to dark theme";t.setAttribute("aria-label",o),t.setAttribute("title",o)}function y({theme:t}){document.querySelector("html").setAttribute("data-theme",t)}const m=document.querySelector("[data-theme-switch]"),q=localStorage.getItem("theme"),J=window.matchMedia("(prefers-color-scheme: dark)");let p=P({localStorageTheme:q,systemSettingDark:J});v({buttonEl:m,isDark:p==="dark"});y({theme:p});m.addEventListener("click",t=>{const e=p==="dark"?"light":"dark";localStorage.setItem("theme",e),v({buttonEl:m,isDark:e==="dark"}),y({theme:e}),p=e});const u=document.querySelector(".open-menu-btn"),f=document.querySelector(".menu"),T=document.querySelectorAll(".menu-link");u.addEventListener("click",()=>{f.classList.toggle("is-open"),u.classList.toggle("active")});T.forEach(t=>{t.addEventListener("click",()=>{f.classList.remove("is-open"),u.classList.remove("active")})});const I="/project-CodeHeros-11/assets/icons-BEahDM1L.svg",M="/project-CodeHeros-11/assets/wallet-webservice-Ce0EG76j.webp",B="/project-CodeHeros-11/assets/green-harvest-online-store-DYDdMwuz.webp",N="/project-CodeHeros-11/assets/english-excellence-webservice-y3-teQ4M.webp",R="/project-CodeHeros-11/assets/power-pulse-webservice-C4HewiA0.webp",D="/project-CodeHeros-11/assets/mimino-website-DDUl-gZp.webp",G="/project-CodeHeros-11/assets/vyshyvanka-vibes-landing-page-V5o9oPqt.webp",O="/project-CodeHeros-11/assets/chego-jewelry-website-BQ-wBBdr.webp",A="/project-CodeHeros-11/assets/energy-flow-webservice-iuvFqBQz.webp",$="/project-CodeHeros-11/assets/fruitbox-online-store-DWUupH6o.webp",z="/project-CodeHeros-11/assets/starlight-studio-landing-page-HCk1tu1y.webp",h=document.getElementById("loadMoreBtn"),V=document.querySelector(".my-projects-list");let a=0;const W=3;function k(){for(let t=0;t<W;t++)if(a<d.length){const e=d[a],o=document.createElement("li");o.classList.add("my-projects-item"),o.innerHTML=`
        <img class="project-img" src="${e.imgSrc}" alt="${e.altText}" />
        <p class="hard-skills">${e.skills}</p>
        <div class="project-item-box">
          <h3 class="project-name">${e.name}</h3>
          <a href="${e.githubLink}" target="_blank" class="button-link">
            Visit
            <svg class="link-icon" width="24" height="24">
              <use href="${I}#arrow"></use>
            </svg>
          </a>
        </div>
      `,V.appendChild(o),a++}a>=d.length&&(h.style.display="none",w.info({title:"Info",message:"There are no more projects to display.",position:"topRight"}))}const d=[{imgSrc:M,altText:"Wallet Webservice",skills:"React, JavaScript, Node JS, Git",name:"Wallet Webservice",githubLink:"https://github.com/andrii-kyrch/project-CodeHeros-11"},{imgSrc:B,altText:"Green harvest online store",skills:"React, JavaScript, Node JS, Git",name:"Green harvest online store",githubLink:"https://github.com/andrii-kyrch/project-CodeHeros-11"},{imgSrc:N,altText:"English excellence webservice",skills:"React, JavaScript, Node JS, Git",name:"English excellence webservice",githubLink:"https://github.com/andrii-kyrch/project-CodeHeros-11"},{imgSrc:R,altText:"Power pulse webservice",skills:"React, JavaScript, Node JS, Git",name:"Power pulse webservice",githubLink:"https://github.com/andrii-kyrch/project-CodeHeros-11"},{imgSrc:D,altText:"Mimino website",skills:"React, JavaScript, Node JS, Git",name:"Mimino website",githubLink:"https://github.com/andrii-kyrch/project-CodeHeros-11"},{imgSrc:G,altText:"Vyshyvanka vibes Landing Page",skills:"React, JavaScript, Node JS, Git",name:"Vyshyvanka vibes Landing Page",githubLink:"https://github.com/andrii-kyrch/project-CodeHeros-11"},{imgSrc:O,altText:"Chego jewelry website",skills:"React, JavaScript, Node JS, Git",name:"Chego jewelry website",githubLink:"https://github.com/andrii-kyrch/project-CodeHeros-11"},{imgSrc:A,altText:"Energy flow webservice",skills:"React, JavaScript, Node JS, Git",name:"Energy flow webservice",githubLink:"https://github.com/andrii-kyrch/project-CodeHeros-11"},{imgSrc:$,altText:"Fruitbox online store",skills:"React, JavaScript, Node JS, Git",name:"Fruitbox online store",githubLink:"https://github.com/andrii-kyrch/project-CodeHeros-11"},{imgSrc:z,altText:"Starlight studio landing page",skills:"React, JavaScript, Node JS, Git",name:"Starlight studio landing page",githubLink:"https://github.com/andrii-kyrch/project-CodeHeros-11"}];h.addEventListener("click",k);document.addEventListener("DOMContentLoaded",()=>{k(),a<d.length&&(h.style.display="block")});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".accordion-item").forEach(e=>{e.querySelector(".accordion-header").addEventListener("click",()=>{const i=document.querySelector(".accordion-item.active");i&&i!==e&&i.classList.remove("active"),e.classList.toggle("active")})})});async function F(){const o="https://portfolio-js.b.goit.study/api"+"/reviews";return(await C.get(o)).data}function U(t,e){const o=t.map(({review:i,author:s,avatar_url:r})=>`<li class="swiper-slide reviews-item">
        <p class="reviews-text">${i}</p>
          <p class="reviews-author">
          <img src="${r}" alt="" />${s}</p>
      </li>`).join("");e.innerHTML=o}const K=document.querySelector(".swiper-wrapper"),Q=document.querySelector(".reviews-prev-btn"),Z=document.querySelector(".reviews-next-btn"),_={modules:[H,x],slidesPerView:1,slidesPerGroup:1,spaceBetween:20,slideActiveClass:"swiper-slide-active",loop:!1,keyboard:{enabled:!0},speed:500,navigation:{nextEl:".reviews-next-btn",prevEl:".reviews-prev-btn"},breakpoints:{1280:{slidesPerView:2,slidesPerGroup:2,spaceBetween:32}}};async function Y(){try{let o=function(){Q.disabled=e.isBeginning,Z.disabled=e.isEnd};const t=await F();U(t,K);const e=new E(".swiper",_);window.addEventListener("resize",()=>e.update()),o()}catch{w.error({message:"Not found",maxWidth:350,closeOnEscape:!0,closeOnClick:!0,position:"topRight"})}}Y();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".feedback-form"),e=document.querySelector(".backdrop"),o=document.querySelector(".modal-close-btn"),i=document.querySelector(".input-email"),s=document.querySelector(".error-message");t.addEventListener("submit",async c=>{c.preventDefault();const g=new FormData(t),b=g.get("email"),S=g.get("message");if(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(b))i.classList.remove("error"),s.style.display="none";else{i.classList.add("error"),s.style.display="block";return}const L={email:b,comment:S};try{const l=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(L)});if(!l.ok){const j=await l.json();throw new Error(j.message||"Не вдалося надіслати заявку. Перевірте введені дані.")}t.reset(),r()}catch(l){alert(l.message)}});function r(){e.classList.add("is-open")}function n(){e.classList.remove("is-open")}o.addEventListener("click",n),document.addEventListener("click",c=>{c.target===e&&n()}),document.addEventListener("keydown",c=>{c.key==="Escape"&&e.classList.contains("is-open")&&n()})});
//# sourceMappingURL=index.js.map
