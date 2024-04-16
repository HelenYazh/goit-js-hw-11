import{S as d,i as m}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function p(i){const r="43383270-573d9e698d4e4b734db4ac29f",n=new URLSearchParams({key:r,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${n}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>o.hits).catch(o=>{console.log(o)})}const c=document.querySelector(".gallery");function y(i){const r=i.map(({webformatURL:n,largeImageURL:o,tags:e,likes:t,views:s,comments:u,downloads:f})=>`<li class="gallery-item">
          <a href="${o}">
          <img src="${n}" alt="${e}" />
          </a>
          <ul>
            <li><b>Likes</b> ${t}</li>
            <li><b>Views</b> ${s}</li>
            <li><b>Comments</b> ${u}</li>
            <li><b>Downloads</b> ${f}</li>
          </ul>
        </li>`).join("");c.insertAdjacentHTML("beforeend",r)}function h(){c.innerHTML=""}const g=document.querySelector(".search-form"),a=document.querySelector("#search-input"),l=document.querySelector(".loader"),b=new d(".gallery a",{captionsData:"alt",captionDelay:250});l.style.display="none";g.addEventListener("submit",L);function L(i){i.preventDefault(),a.value.trim()!==""&&(l.style.display="block",h(),p(a.value.trim()).then(r=>{r.length===0&&m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),y(r),b.refresh()}).catch(r=>console.log(r)).finally(()=>l.style.display="none"))}
//# sourceMappingURL=commonHelpers.js.map
