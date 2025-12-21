// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('custom-navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('open');
}

// Add event listener to mobile toggle button
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMobileMenu);
  }
});
// Initialize animations on scroll
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-fade-in');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
  // Observe sections for animation
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    observer.observe(section);
  });
// Form submission handling
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
  
  // Investment form handling
  const investmentForm = document.querySelector('#investment form');
  if (investmentForm) {
    investmentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your interest! We will send you the investment prospectus shortly.');
      investmentForm.reset();
    });
  }
});