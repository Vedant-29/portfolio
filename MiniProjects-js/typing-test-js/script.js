const typingText = document.querySelector('.typing-text p');
const input = document.querySelector('.input-field');
const time = document.querySelector('.time span');
const mistake = document.querySelector('.mistake span');
const wpm = document.querySelector('.wpm span');
const cpm = document.querySelector('.cpm span');
const btn = document.querySelector('.btn');

// set values
let timer;
let maxtime = 60;
let timeleft = maxtime;
let charIndex = 0;
let mistakes = 0;
let isTyping = false;
let prevInput = 0;


function loadParagraphs() {
    const paragraph = [
        "This is the first line with a longer paragraph. It contains more words and characters.",
        "This is the second line with a longer paragraph. It has additional content to make it longer.",
        "This is the third line with a longer paragraph. It is extended to increase its length.",
        "This is the fourth line with a longer paragraph. More text is added to make it longer.",
        "This is the fifth line with a longer paragraph. It now has more words and characters.",
        "This is the sixth line with a longer paragraph. It is made longer by adding extra content.",
        "This is the seventh line with a longer paragraph. Additional text is included to extend it.",
        "This is the eighth line with a longer paragraph. It is now longer with more words and characters.",
        "This is the ninth line with a longer paragraph. It is extended to increase its length.",
        "This is the tenth line with a longer paragraph. More text is added to make it longer."
    ];

    const randomIndex = Math.floor(Math.random() * paragraph.length);
    typingText.innerHTML = '';

    for (let each of paragraph[randomIndex]) {
        const span = document.createElement('span');
        span.innerText = each;
        typingText.appendChild(span);
    }

    typingText.querySelectorAll('span')[0].classList.add('active');
}


// handling user input

function initTyping() {
    const char = typingText.querySelectorAll('span');
    const inputText = input.value.charAt(charIndex);

    if (charIndex < char.length && timeleft > 0) {
        if (!isTyping) {
            timer = setInterval(init, 1000);
            isTyping = true;
        }

        if (char[charIndex].innerText === inputText) {
            char[charIndex].classList.add('correct');
        } else if (input.value.length < prevInput) {
            char[charIndex - 1].classList.remove('correct');
            char[charIndex - 1].classList.add('active');
            charIndex--;
        }
        
        else {
            mistakes++;
            char[charIndex].classList.add('incorrect');
            char[charIndex].classList.remove('active');
            charIndex++;
            if (charIndex < char.length) {
                char[charIndex].classList.add('active');
            }
        }

        mistake.innerText = mistakes;
        prevInput.innerText = inputText.value.length;
    }
    
}

function init() {
    if (timeleft > 0) {
        timeleft--;
        time.innerText = timeleft;
        let wpmVal = Math.floor((charIndex / 5) / (maxtime - timeleft) * 60);
        const cpmVal = Math.floor(charIndex / (maxtime - timeleft) * 60);
        wpm.innerText = wpmVal;
        cpm.innerText = cpmVal;

    } else {
        clearInterval(timer);
        isTyping = false;
        charIndex = 0;
        timeleft = maxtime;
        mistakes = 0;
        time.innerText = timeleft;
        mistake.innerText = mistakes;
        input.value = '';
        loadParagraphs();
    
    }
}


input.addEventListener('input', initTyping);
loadParagraphs();

