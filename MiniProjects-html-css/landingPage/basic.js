let dayNight = document.querySelector('.dayNight');
let banner = document.querySelector('.banner');

dayNight.addEventListener('click', () => {
    banner.classList.toggle('night');       
});

document.addEventListener('DOMContentLoaded', () => {
    new Typed("#changing" , {
        strings: ["Web Developer", "Designer", "Freelancer"],
        typeSpeed: 15,
        backSpeed: 15,
        loop: true,
    });
});