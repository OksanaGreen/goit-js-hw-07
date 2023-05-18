import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryMarcup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
    <a class="gallery__link" href='${original}'>
      <img
        class="gallery__image"
        src='${preview}'
        alt='${description}'
      />
    </a>
  </li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryMarcup);
const instance = basicLightbox.create(`
    <img src= ${evt.target.dataset.source}  width="800" height="600">
`);

instance.show();
const lightbox = $(".gallery__image").simpleLightbox({
  captionsData: "alt",
  captionDelay: 250,
});
// const lightbox = new SimpleLightbox(".gallery__image", {
//   captionsData: "alt",
//   captionDelay: 250,
// });
console.log(galleryItems);
