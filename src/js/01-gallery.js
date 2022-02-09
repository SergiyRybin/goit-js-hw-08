// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector(".gallery")

const imageList = galleryItems.map( element=>{

const list = document.createElement("li")
const link = document.createElement("a")

link.classList.add("gallery__item")
link.href = element.original

const img = document.createElement("img")

img.style.display = "block"
img.classList.add("gallery__image")
img.src = element.preview
img.alt = element.description
list.append(link)
link.append(img)
return list
})

gallery.append(...imageList)



let galleryModal = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
})
