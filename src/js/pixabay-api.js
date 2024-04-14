export function fetchImages(query) {
    const API_KEY = "43383270-573d9e698d4e4b734db4ac29f";
    const params = new URLSearchParams({
        key: API_KEY,
        q: `${input.value}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
}