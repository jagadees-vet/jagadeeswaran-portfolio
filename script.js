// Profile slideshow
const slides = document.querySelectorAll('#profile .slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Slide changes every 3 seconds

// Animate skill bars on window load
window.onload = () => {
  const bars = document.querySelectorAll('.bar-fill');
  bars.forEach(bar => {
    bar.style.width = bar.style.width; // triggers transition
  });
};

// Navigation active link highlight on scroll
const navLinks = document.querySelectorAll('nav a');

function changeActiveLink() {
  let fromTop = window.scrollY + 800; // offset for sticky header

  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (!section) return;

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', changeActiveLink);
window.addEventListener('load', changeActiveLink);

// Contact form submission (mockup)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simple validation already handled by required attribute
  status.textContent = "Sending message...";

  // Simulate async sending (replace with real backend)
  setTimeout(() => {
    status.textContent = "Thank you for your message! I will get back to you soon.";
    form.reset();
  }, 1500);
});