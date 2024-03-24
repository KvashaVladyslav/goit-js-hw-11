import { gallery, lightbox, closeLoader } from '../main';

export function showGallery(images) {
  if (images.length === 0) {
    iziToast.error({
      color: 'red',
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    closeLoader();
  } else {
    const galleryImages = images
      .map(image => {
        return `<li class="gallery-item">
        <a href="${image.largeImageURL}">
        <img class="photo" src="${image.webformatURL}" alt="${image.tags}" />
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
      </li>`;
      })
      .join('');

    gallery.insertAdjacentHTML('beforeend', galleryImages);

    lightbox.refresh();
  }
  closeLoader();
}
