import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Доступ до елемента
const gallery = document.querySelector(".gallery");
const markup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
   <a class="gallery__link" href='${original}'>
      <img class="gallery__image" src = '${preview}' alt='${description}' />
   </a>
</li>`
);

gallery.insertAdjacentHTML("beforeend", markup.join(""));
// new SimpleLightbox(".gallery a", {
//   captionType: "attr",
//   captionDelay: 250,
// });
const instance = galleryItems.create(`
    <img class="gallery__image" src = '${preview}' alt='${description}' />
 `);

gallery.addEventListener("clik", onClick);
function onClick(evt) {
  evt.preventDefault();
  instance.show();
  instance.show(() => console.log("lightbox now visible"));
  return;
}
