//efek body
const body = document.body;
const totalBinaryNumbers = 100; // Jumlah angka biner
const binaryNumbers = "01";

for (let i = 0; i < totalBinaryNumbers; i++) {
    const span = document.createElement('span');
    span.className = 'binary';
    span.style.left = Math.random() * 100 + 'vw';
    span.style.top = Math.random() * 100 + 'vh';
    span.style.animationDelay = Math.random() * 50 + 's';
    span.textContent = binaryNumbers[Math.floor(Math.random() * 2)];
    body.appendChild(span);
}

// type
// Target element
const targetElement = document.getElementById("typing-text");
const text = "what is your choice.?"; // Text to type
const typingSpeed = 100; // Typing speed in milliseconds
const delay = 10000; // Delay in milliseconds between loops

let index = 0;

// Typing function
function typeEffect() {
    if (index < text.length) {
        targetElement.textContent += text[index];
        index++;
        setTimeout(typeEffect, typingSpeed);
    } else {
        // Clear text and restart after a delay
        setTimeout(() => {
            index = 0;
            targetElement.textContent = ""; // Clear text
            typeEffect(); // Restart typing
        }, delay);
    }
}

// Start the typing effect
typeEffect();