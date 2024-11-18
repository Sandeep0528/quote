let quoteEnglish = document.querySelector(".quote")
let dataQuotes = [
    "Believe in yourself; you are stronger than you think.",
    "Every mistake is a step closer to success.",
    "Learn from failure; it’s a powerful teacher.",
    "Dream big, work hard, and stay focused.",
    "Your attitude determines your direction in life.",
    "Success is the sum of small efforts repeated daily.",
    "Challenges are opportunities to grow; embrace them.",
    "You have the power to create your own success story.",
    "Stay positive; your attitude shapes your destiny.",
    "In the middle of difficulty lies opportunity.",
    "Celebrate progress, no matter how small.",
    "Your education is a journey, not a race.",
    "Strive for progress, not perfection.",
    "Be curious; there is always something new to learn.",
    "You are capable of more than you imagine.",
    "Set goals, stay quiet about them, and crush them.",
    "Your efforts today pave the way for a brighter tomorrow.",
    "A positive mind leads to positive outcomes.",
    "You have the power to turn dreams into reality.",
    "Success is not final; failure is not fatal. It’s the courage to continue that counts.",
];
function generateQuote() {
    const a = Math.floor(Math.random() * dataQuotes.length)
    console.log(a);
    quoteEnglish.textContent = dataQuotes[a]
}