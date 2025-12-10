// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navList = document.querySelector(".nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("open");
  });

  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("open");
    });
  });
}

// Smooth scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: "smooth",
    });
  });
});

// Fake form submission note
const fakeSubmit = document.getElementById("fakeSubmit");
const formNote = document.getElementById("formNote");
if (fakeSubmit && formNote) {
  fakeSubmit.addEventListener("click", () => {
    formNote.textContent =
      "Thank you! This is a demo – connect this form to your email or backend to receive messages.";
  });
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const words = ["Accounting", "IT Support", "ERP Systems", "Web Administration"];
let wIndex = 0;
let tIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = words[wIndex];
  const element = document.getElementById("typing");

  if (isDeleting) {
    element.innerHTML = current.substring(0, tIndex--);
  } else {
    element.innerHTML = current.substring(0, tIndex++);
  }

  if (!isDeleting && tIndex === current.length + 1) {
    setTimeout(() => (isDeleting = true), 1500);
  }
  if (isDeleting && tIndex === -1) {
    isDeleting = false;
    wIndex = (wIndex + 1) % words.length;
    tIndex = 0;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();
