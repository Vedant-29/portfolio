const nextbtn = document.querySelector('#nextBtn');
const prevbtn = document.querySelector('#prevBtn');
const img = document.querySelectorAll('.img-carousel img');

let currentIndex = 0;

function showImg(currentIndex) {
    img.forEach( function (img) {
        img.style.display = 'none';
    })
    img[currentIndex].style.display = 'block';
}

nextbtn.addEventListener('click', function() {
    currentIndex++;
    if(currentIndex > img.length - 1) {
        currentIndex = 0;
    }
    showImg(currentIndex);
})

prevbtn.addEventListener('click', function() {
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = img.length - 1;
    }
    showImg(currentIndex);
});