import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Доступ до елемента
let original;
let preview;
let description;

//   evt.preventDefault();

//   instance.show(() => console.log("lightbox now visible"));
//   return;
// }
// const gallery = document.querySelector(".gallery");
// const instance = basicLightbox.create(`
//     <h1>Dynamic Content</h1>
//     <p>You can set the content of the lightbox with JS.</p>
// `);
const gallery = document.querySelector(".gallery");
const markup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href='${original}'>
     <img class="gallery__image" src = '${preview}' 
     data-source='${original}'
     alt='${description}' />
     
   </a>
 </li>`
);

gallery.insertAdjacentHTML("beforeend", markup.join(""));

gallery.addEventListener("click", onClick);
function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
  <img class="gallery__image" src = ${evt.target.dataset.source} />
  // <img class="gallery__image" src = evt.carrentTarget.dataset.'${preview}'
  //       data-source='${original}'
  // alt='${description}' />
   `);
  instance.show();

  const currentIm = evt.target.closest(".gallery__item");
  const carId = Number(currentIm.dataset.source);
  console.log(carId);
  const data = gallery.find(({ source }) => source === carId);
  instance.closes();
  //
}
