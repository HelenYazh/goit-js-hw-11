const list = document.querySelector(".gallery");

export function createMarkup(arr) {
    // const list = document.querySelector(".gallery");

    const markup = arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `<li class="gallery-item">
          <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" />
          </a>
          <ul>
            <li><b>Likes</b> ${likes}</li>
            <li><b>Views</b> ${views}</li>
            <li><b>Comments</b> ${comments}</li>
            <li><b>Downloads</b> ${downloads}</li>
          </ul>
        </li>`)
        .join("")

    list.insertAdjacentHTML("beforeend", markup);
}

export function clearGallery() {
    list.innerHTML = "";
}