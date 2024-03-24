import{S as d,i as a}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(s){const o="https://pixabay.com",r="/api/",i=new URLSearchParams({key:"43020663-61586e43f3e56b8b813ab6c78",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${r}?${i}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function p(s){if(s.length===0)iziToast.error({color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n();else{const o=s.map(r=>`<li class="gallery-item">
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
      </li>`).join("");u.insertAdjacentHTML("beforeend",o),h.refresh()}n()}const c=document.querySelector(".form"),u=document.querySelector(".gallery"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250}),f=document.querySelector(".loader");function y(){f.classList.remove("visually-hidden")}function n(){f.classList.add("visually-hidden")}c.addEventListener("submit",s=>{s.preventDefault(),y(),u.innerHTML="";const o=s.currentTarget.elements.inputname.value.trim();o!==""?(m(o).then(r=>{p(r.hits),c.reset()}).catch(r=>a.error({color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})),n()):(a.show({color:"red",position:"topRight",message:"Please, search some object"}),n())});
//# sourceMappingURL=commonHelpers.js.map
