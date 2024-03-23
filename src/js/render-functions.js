import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { gallery } from '../main';

export function showGallery(images) {
  gallery.innerHTML = '';

  const galleryImages = images
    .map(
      image => `<li class="gallery-item">
        <a="${image.largeImageURL}">
        <img class="photo" src="${image.webformatURL}" data-source="${image.largeImageURL}" alt="${image.tags}" />
        </a>
        <ul class="info-list">
          <li class="info-list-item">
            Likes
            <p>${image.likes}</p>
          </li>
          <li class="info-list-item">
            Views
            <p>${image.views}</p>
          </li>
          <li class="info-list-item">
            Comments
            <p>${image.comments}</p>
          </li>
          <li class="info-list-item">
            Downloads
            <p>${image.downloads}</p>
          </li>
        </ul>
      </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', galleryImages);
}
