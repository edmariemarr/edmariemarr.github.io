

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).on('load', function() {
    $('.preloader').fadeOut(1000);   
  });

  /*-------------------------------------------------------------------------------
    FADE ITEMS
  -------------------------------------------------------------------------------*/

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); 
      }
  });
}, {
  threshold: 0.5 
});

const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(element => {
  observer.observe(element);
});

// Intersection Observer for fade-in effect
/*const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // If the observed element is in the viewport, apply the visible class
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.5  // Trigger when at least 50% of an element is in view
});

// Get all fade-in elements (excluding the footer)
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(element => {
  if (element.tagName.toLowerCase() !== 'footer') {  // Exclude footer from being observed
    observer.observe(element);
  }
});

// Ensure the footer is visible (do not apply IntersectionObserver to the footer)
const footer = document.querySelector('footer');
if (footer) {
  footer.classList.add('visible');
}*/
