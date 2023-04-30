import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
// const imageEl = document.querySelector(".gallery");
// function createGalMarckup(items) {
//   return items
//     .map(
//       ({ preview, original, description }) =>
//         `<li class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li> `
//     )
//     .join("");
// }
// const addteGalMarckup = createGalMarckup(galleryItems);
// imageEl.innerHTML = addteGalMarckup;
// imageEl.addEventListener("click", onGalleryItemsClick);
// function onGalleryItemsClick(evt) {
//   evt.preventDefault();
//   const imgGalleryEl = evt.target.classList.contains("gallery__image");
//   if (imgGalleryEl) {
//     return;
//   }
// }
// // const instance = basicLightbox.create();
// // instance.show();
// // import * as basicLightbox from 'basiclightbox'

// // const instance = basicLightbox.create(`
// //     <img src="assets/images/image.png" width="800" height="600">
// // `)

// // instance.show()
// imageEl.insertAdjacentHTML("beforeend", createGalMarckup);
// new SimpleLightbox(".gallery a", {
//   captionType: "attr",
//   captionDelay: 250,
// });
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
// function onGalleryItemsClick(evt) {
//   evt.preventDefault();
//   const imgGalleryEl = evt.target.classList.contains("gallery__image");
//   if (imgGalleryEl) {
//     return;
//   }
// }
// form.addEventListener("klick", (event) => {
//   event.preventDefault();
gallery.insertAdjacentHTML("beforeend", markup.join(""));
new SimpleLightbox(".gallery a", {
  captionType: "attr",
  captionDelay: 250,
});

// const instance = galleryItems.create(`
//    <img class="gallery__image" src = '${preview}' alt='${description}' />
// `);

// instance.show()
