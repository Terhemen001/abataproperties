

/// Loader Script
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
  
    // Delay hiding the loader for 3 seconds
    setTimeout(function () {
      loader.classList.add('hide');
    }, 3000); // 3000 milliseconds = 3 seconds
  });

 

// Typing Animation for Hero Section
const text = "ABATA PROPERTIES LIMITED";
let index = 0;

function typeText() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}

typeText();

// Hamburger Menu Toggle
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// Carousel Auto Scroll
const slides = document.querySelector(".slides");
let scrollAmount = 0;

setInterval(() => {
  scrollAmount += 300;
  if (scrollAmount >= slides.scrollWidth) scrollAmount = 0;
  slides.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}, 3000);


// Intersection Observer for Scroll Animations
const sections = document.querySelectorAll('section');

const options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px',
  threshold: 0.2, // Trigger when 20% of the section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view'); // Add class to animate section
      observer.unobserve(entry.target); // Stop observing after animation
    }
  });
}, options);

// Observe all sections
sections.forEach((section) => {
  observer.observe(section);
});

