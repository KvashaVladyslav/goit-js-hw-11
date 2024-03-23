import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { form } from '../main';
import { gallery } from '../main';

export function getPhotos(query) {
  const baseUrl = 'https://pixabay.com';
  const endPoint = '/api/';
  const params = new URLSearchParams({
    key: '43020663-61586e43f3e56b8b813ab6c78',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${baseUrl}${endPoint}?${params}`;

  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
