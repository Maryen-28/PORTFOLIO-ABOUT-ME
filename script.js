// Navigation scroll effect
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Update active nav link based on scroll position
  let current = '';
  const sections = document.querySelectorAll('section[id]');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinksContainer = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  navLinksContainer.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    navLinksContainer.classList.remove('active');
  });
});

// Smooth scroll function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = sectionId === 'hero' ? 0 : 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

// Contact form submission
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Show success toast
  showToast('Message sent successfully! I will get back to you soon.', 'success');
  
  // Reset form
  contactForm.reset();
});

function showToast(message, type = 'success') {
  toast.textContent = message;
  toast.className = `toast ${type}`;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-card, .project-card, .timeline-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// Video autoplay fallback
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  heroVideo.play().catch(error => {
    console.log('Video autoplay failed:', error);
  });
}
