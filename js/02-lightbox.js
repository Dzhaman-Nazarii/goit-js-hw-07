import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')
console.log(gallery)

function markupGallery(galerryItems) {
    const markup = galerryItems.map(({ preview, original, description }) =>
        `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </li>
    `).join('');
    return markup;
}

gallery.innerHTML = markupGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(lightbox);
console.log(galleryItems);