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
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>
    `).join('');
    return markup;
}

gallery.innerHTML = markupGallery(galleryItems);

gallery.addEventListener('click', onClickImage)

function onClickImage(event) {
    event.preventDefault();
    
    if(!event.target.classList.contains(`gallery__image`)){
        return;
    } 

    const currentImage = event.target.closest('.gallery__image');

    const originalImage = event.target.dataset.source;

    const instance = basicLightbox.create(`
        <img src="${originalImage}">`,
    
    {
      onShow: () => {
        window.addEventListener('keydown', onEsc);
      },
      onClose: () => {
        window.removeEventListener('keydown', onEsc);
      },
    },
    );
    
    const onEsc = (event) => {
        console.dir(event)
        console.log(event.key);
    if (event.key === 'Escape') {
      instance.close();
    }
  };

    instance.show();
    
}

console.log(galleryItems);