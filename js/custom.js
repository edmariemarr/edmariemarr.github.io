

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
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