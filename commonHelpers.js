import{S as c,i as a}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function u(s){const o="https://pixabay.com",t="/api/",i=new URLSearchParams({key:"43020663-61586e43f3e56b8b813ab6c78",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${t}?${i}`;return fetch(e).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function f(s){n.innerHTML="";const o=s.map(t=>`<li class="gallery-item">
        <a="${t.largeImageURL}">
        <img class="photo" src="${t.webformatURL}" data-source="${t.largeImageURL}" alt="${t.tags}" />
        </a>
        <ul class="info-list">
          <li class="info-list-item">
            Likes
            <p>${t.likes}</p>
          </li>
          <li class="info-list-item">
            Views
            <p>${t.views}</p>
          </li>
          <li class="info-list-item">
            Comments
            <p>${t.comments}</p>
          </li>
          <li class="info-list-item">
            Downloads
            <p>${t.downloads}</p>
          </li>
        </ul>
      </li>`).join("");n.insertAdjacentHTML("beforeend",o)}const p=document.querySelector(".form"),n=document.querySelector(".gallery"),m=new c(".gallery a",{captionsData:"alt",captionDelay:250});p.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget.elements.inputName.value.trim();n.innerHTML='<div class="loader"></div>',o===""?a.error({color:"red",position:"topRight",message:"Please, search some object"}):u(o).then(t=>{const i=f(t.hits);n.innerHTML=i,m.refresh()}).catch(t=>{a.error({color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})})});
//# sourceMappingURL=commonHelpers.js.map
