
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line


// Получили ссылку на div Container
const galleryContainer = document.querySelector('.gallery')

// Переменная для хранения элементов галереи.
//  Результат вызова функции создания всей разметки
const galleryMarkup = createGalleryItem(galleryItems)
// Прикрепили все элементы к div Container
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

console.log(galleryContainer)

createGalleryItem(galleryItems)
// Функция для рендера разметки из массива и создания html
function createGalleryItem (galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
 </div>
        `
    })
    .join('')
  // console.log(markup)
  return markup
}


var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });