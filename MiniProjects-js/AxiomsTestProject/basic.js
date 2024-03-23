// const getDadJoke = async () => {
//     const config = { headers: { Accept: "application/json" } }
//     const res = await axios.get("https://icanhazdadjoke.com/", config)
//     return res.data.joke
// }


const form = document.querySelector('#searchForm');
const imageContain = document.querySelector('#img-container');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchNow = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchNow}`);
    imageContain.innerHTML = '';
    makeImages(res.data);
    form.elements.query.value = '';
});

const makeImages = (showName) => {
    for (let result of showName) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            imageContain.append(img);
        }
    }
}