const clickedBtn = document.querySelector('.btn');
const h1 = document.querySelector('h1');

clickedBtn.addEventListener('click', () => {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${r}, ${g} , ${b})`

    document.body.style.backgroundColor = randomColor;
    h1.innerText = randomColor;
})