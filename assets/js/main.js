const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".home__title", {});
sr.reveal(".home__scroll", { delay: 200 });
sr.reveal(".home__img", { origin: "right", delay: 400 });

sr.reveal(".about__img", { delay: 500 });
sr.reveal(".about__subtitle", { delay: 300 });
sr.reveal(".about__profession", { delay: 400 });
sr.reveal(".about__text", { delay: 500 });
sr.reveal(".icon-link", { origin: "right", delay: 600, interval: 200 });

sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__name", { distance: "20px", delay: 50, interval: 100 });
sr.reveal(".education", { delay: 400 });
sr.reveal(".skills__img", { delay: 400 });
// sr.reveal(".footer-social", { delay: 400 });

sr.reveal(".portfolio__img", { interval: 200 });

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-sun" : "bx-moon";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-sun" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

const typingElement = document.getElementById("typing");
const professions = ["Web Developer", "Frontend Engineer", "UI/UX Designer"];
let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = professions[professionIndex];
  const visibleText = currentText.substring(0, charIndex);
  typingElement.textContent = visibleText;

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      professionIndex = (professionIndex + 1) % professions.length;
    }
    setTimeout(typeEffect, 1000);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
