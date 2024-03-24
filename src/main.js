import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getPhotos } from './js/pixabay-api';
import { showGallery } from './js/render-functions';

const form = document.querySelector('.form');
export const gallery = document.querySelector('.gallery');

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const loaderBox = document.querySelector('.loader');

function showLoader() {
  loaderBox.classList.remove('visually-hidden');
}

export function closeLoader() {
  loaderBox.classList.add('visually-hidden');
}

form.addEventListener('submit', e => {
  e.preventDefault();
  showLoader();
  gallery.innerHTML = '';
  const query = e.currentTarget.elements.inputname.value.trim();
  if (query !== '') {
    getPhotos(query)
      .then(res => {
        showGallery(res.hits);
        form.reset();
      })
      .catch(error =>
        iziToast.error({
          color: 'red',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        })
      );
    form.reset();
  } else {
    iziToast.show({
      color: 'red',
      position: 'topRight',
      message: 'Please, search some object',
    });
    form.reset();
  }
});
