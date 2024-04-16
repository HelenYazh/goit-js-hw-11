export function fetchImages(query) {
    const API_KEY = "43383270-573d9e698d4e4b734db4ac29f";
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    return fetch(`https://pixabay.com/api/?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json();
        })
        .then(data => {
            return data.hits;
        })
        .catch(error => {
            console.log(error);
            
        })

}