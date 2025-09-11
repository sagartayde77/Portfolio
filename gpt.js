const typingText = ["Cloud Engineer", "DevOps Enthusiast", "Python Developer"];
let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function type() {
    if (charIndex < typingText[index].length) {
        typingElement.textContent += typingText[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 150);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = typingText[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
    } else {
        index = (index + 1) % typingText.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);
