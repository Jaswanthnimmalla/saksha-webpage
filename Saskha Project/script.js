// Improved loading and animation triggering
document.addEventListener('DOMContentLoaded', function() {
  // Hide loader when everything is loaded
  window.addEventListener('load', function() {
      const loader = document.querySelector('.loader');
      loader.classList.add('fade-out');
      
      setTimeout(() => {
          loader.style.display = 'none';
      }, 500);
  });
  
  // Intersection Observer for animations
  const sections = document.querySelectorAll('section');
  const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animated');
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);
  
  sections.forEach(section => {
      observer.observe(section);
  });
  
  // Preload critical assets
  function preloadAssets() {
      const images = [];
      document.querySelectorAll('svg image').forEach(img => {
          images.push(new Image().src = img.getAttribute('href'));
      });
  }
  
  preloadAssets();
});