import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from "../src/js/pixabay-api.js";
import { createMarkup, clearGallery } from "../src/js/render-functions.js";


const form = document.querySelector(".search-form");
const input = document.querySelector("#search-input");
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

loader.style.display = "none";
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    if (input.value.trim() === "") {
        return;
    }
    loader.style.display = "block";
    clearGallery();

    fetchImages(input.value.trim())
        .then(img => {
            if (img.length === 0) {
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight",
                })
            };
            createMarkup(img);
            lightbox.refresh();
        })
        .catch(error => console.log(error))
        .finally(() => loader.style.display = "none")


}