// Enhanced interactivity with animations and effects
$(function(){
  // Mobile nav toggle
  $('.nav-toggle').on('click', function(){
    $('.main-nav').toggleClass('active');
  });

  // Smooth scroll for internal links
  $('a[href^="#"]').on('click', function(e){
    var target = $(this.getAttribute('href'));
    if(target.length){
      e.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 20 }, 400);
    }
  });

  // Close mobile menu when clicking a link
  $('.main-nav a').on('click', function(){
    if($(window).width() <= 800){
      $('.main-nav').removeClass('active');
    }
  });
});
