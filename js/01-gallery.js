import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Доступ до елемента
// const gallery = document.querySelector(".gallery");
let original;
let preview;
let description;
// const markup = galleryItems.map(
//   ({ preview, original, description }) =>
//     `<li class="gallery__item">
//    <a class="gallery__link" href='${original}'>
//       <img class="gallery__image" src = '${preview}' alt='${description}' />
//    </a>
// </li>`
// );
// {
//   /* <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li>; */
// }

// gallery.insertAdjacentHTML("beforeend", markup.join(""));

// gallery.addEventListener("click", onClick);
// function onClick(evt) {
//   const instance = galleryItems.create(`
//     <img class="gallery__image" src = "evt.carrentTarget.dataset" alt='${description}' />`)
//     if(src = "evt.carrentTarget.dataset"){
//       href='${original}`

//   instance.show();
//     }

//   evt.preventDefault();

//   instance.show(() => console.log("lightbox now visible"));
//   return;
// }
// const gallery = document.querySelector(".gallery");
// const instance = basicLightbox.create(`
//     <h1>Dynamic Content</h1>
//     <p>You can set the content of the lightbox with JS.</p>
// `);
// instance.show();
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
  cosole.log(evt.target);
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  //   const currentCard = evt.target.closest(".gallery__image");
  //   const carId = Number(currentCard.dataset.carId);
  //   const data = cars.find(({ id }) => id === carId);

  const instance = basicLightbox.create(`
  <img class="gallery__image" src = evt.carrentTarget.dataset'${preview}'
        data-source='${original}'
  alt='${description}' />
   `);
  instance.show();
}
