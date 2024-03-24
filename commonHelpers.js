import{S as u,i as l}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(s){const o="https://pixabay.com",r="/api/",i=new URLSearchParams({key:"43020663-61586e43f3e56b8b813ab6c78",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${r}?${i}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function p(s){if(s.length===0)iziToast.error({color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});else{const o=s.map(r=>`<li class="gallery-item">
        <a href="${r.largeImageURL}">
        <img class="photo" src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <ul class="info-list">
          <li class="info-list-item">
            Likes
            <p>${r.likes}</p>
          </li>
          <li class="info-list-item">
            Views
            <p>${r.views}</p>
          </li>
          <li class="info-list-item">
            Comments
            <p>${r.comments}</p>
          </li>
          <li class="info-list-item">
            Downloads
            <p>${r.downloads}</p>
          </li>
        </ul>
      </li>`).join("");c.insertAdjacentHTML("beforeend",o),m.refresh()}}const a=document.querySelector(".form"),c=document.querySelector(".gallery"),m=new u(".gallery a",{captionsData:"alt",captionDelay:250});a.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML="";const o=s.currentTarget.elements.inputname.value.trim();o!==""?f(o).then(r=>{p(r.hits),a.reset()}).catch(r=>l.error({color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})):l.show({color:"red",position:"topRight",message:"Please, search some object"})});
//# sourceMappingURL=commonHelpers.js.map
