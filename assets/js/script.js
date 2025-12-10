// Basic interactivity: mobile nav toggle and smooth scrolling
$(function(){
  $('.nav-toggle').on('click', function(){
    $('.main-nav').toggle();
  });

  // Smooth scroll for internal links
  $('a[href^="#"]').on('click', function(e){
    var target = $(this.getAttribute('href'));
    if(target.length){
      e.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 20 }, 400);
    }
  });
});
