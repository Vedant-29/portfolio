const p1Btn = document.querySelector('#p1Btn');
const p2Btn = document.querySelector('#p2Btn');
const resetBtn = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playTo');


let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let winningScore = 5;

winningScoreSelect.addEventListener('change' , function(){
    winningScore = parseInt(this.value);
    reset();
});

p1Btn.addEventListener('click' , function(){
    if(!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Btn.addEventListener('click' , function(){
    if(!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
});

resetBtn.addEventListener('click' ,reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner','loser');
    p2Display.classList.remove('winner','loser');
    p1Btn.disabled = false;
    p2Btn.disabled = false;
}