const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});



const texts = [
  "Mahasiswa Informatika 📚",
  "Game Developer 🎮",
  "Web Developer 💻",
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
  currentText = texts[i];

  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, j++);
    if (j > currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    typingElement.textContent = currentText.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});
