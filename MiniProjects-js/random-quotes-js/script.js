let btn = document.getElementById('new-quote');
let text = document.getElementById('qoute');

let qoute = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "Your time is limited, don't waste it living someone else's life. -Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
    "Life is what happens when you're busy making other plans. -John Lennon",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
    "The best time to plant a tree was 20 years ago. The second best time is now. -Chinese Proverb",
    "The only way to do great work is to love what you do. -Steve Jobs",
    "In the end, it's not the years in your life that count. It's the life in your years. -Abraham Lincoln",
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt"
];


btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * qoute.length);
    text.textContent = qoute[random];
})