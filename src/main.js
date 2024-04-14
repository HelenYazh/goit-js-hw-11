import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from "../src/js/pixabay-api.js";
import { clearGallery, createMarkup } from "../src/js/render-functions.js";


const form = document.querySelector(".search-form");
const input = document.querySelector("#search-input");
const list = document.querySelector(".gallery");


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    if (input.value.trim() === "") {
        return;
    }


    fetch(`https://pixabay.com/api?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json();
        })
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight",
                })
            }
            list.insertAdjacentHTML("beforeend", createMarkup(data.hits));
        })
        .catch(error => console.log(error))

}

function createMarkup(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `<li>
          <img src="${webformatURL}" alt="${tags}"
        </li>`)
        .join("")
}