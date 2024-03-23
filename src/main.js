import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getPhotos } from './js/pixabay-api';
import { showGallery } from './js/render-functions';

export const form = document.querySelector('.form');
export const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.currentTarget.elements.inputName.value.trim();
  gallery.innerHTML = `<div class="loader"></div>`;
  if (query === '') {
    iziToast.error({
      color: 'red',
      position: 'topRight',
      message: 'Please, search some object',
    });
  } else {
    getPhotos(query)
      .then(data => {
        const markup = showGallery(data.hits);
        gallery.innerHTML = markup;
        lightbox.refresh();
      })
      .catch(error => {
        iziToast.error({
          color: 'red',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      });
  }
});
