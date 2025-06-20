const titles = ["Web Developer", "Web Designer", "Responsive Web Designer"];
let titleIndex = 0;
let charIndex = 0;
const speed = 100; // typing speed in ms

function typeEffect() {
  const currentTitle = titles[titleIndex];
  const displayText = currentTitle.substring(0, charIndex + 1);
  document.getElementById("animated-text").textContent = displayText;
  charIndex++;

  if (charIndex < currentTitle.length) {
    setTimeout(typeEffect, speed);
  } else {
    setTimeout(() => {
      eraseEffect();
    }, 2000); // wait 2 seconds before erasing
  }
}

function eraseEffect() {
  const currentTitle = titles[titleIndex];
  const displayText = currentTitle.substring(0, charIndex - 1);
  document.getElementById("animated-text").textContent = displayText;
  charIndex--;

  if (charIndex > 0) {
    setTimeout(eraseEffect, speed / 2);
  } else {
    titleIndex = (titleIndex + 1) % titles.length;
    setTimeout(typeEffect, speed);
  }
}

// Start typing when page loads
window.onload = typeEffect;
function openMapModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeMapModal() {
  document.getElementById("modal").style.display = "none";
}
