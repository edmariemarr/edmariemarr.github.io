

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).on('load', function() {
    $('.preloader').fadeOut(1000);   
  });

  /*-------------------------------------------------------------------------------
    FADE ITEMS
  -------------------------------------------------------------------------------*/

/*const observer = new IntersectionObserver((entries, observer) => {
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
});*/

// Intersection Observer for fade-in effect
const observer = new IntersectionObserver((entries, observer) => {
  let allVisible = true; // Flag to track if all fade-in elements have appeared
  
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      allVisible = false; // If any element isn't in view, we know to keep checking
    }
  });

  // Check if all fade-in elements are visible
  if (allVisible) {
    // If all elements are visible, stop observing further
    observer.disconnect(); 
  }
}, {
  threshold: 0.5  // Trigger when at least 50% of an element is in view
});

// Apply observer to all fade-in columns
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(element => {
  observer.observe(element);
});

