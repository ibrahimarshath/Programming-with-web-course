// Array of quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "In the end, we only regret the chances we didn't take. - Lewis Carroll",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb"
];

const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#e67e22', '#34495e'];

const quoteBox = document.querySelector('#quoteBox');
const newQuoteBtn = document.querySelector('#newQuoteBtn');

newQuoteBtn.addEventListener('click', function() {
    const oldQuote = document.querySelector('#quoteText');
    if (oldQuote) {
        oldQuote.remove();
    }
    
    const newQuote = document.createElement('p');
    newQuote.id = 'quoteText';
    newQuote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    newQuote.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    quoteBox.appendChild(newQuote);
});