$(function() {

  // MENU
  $('.navbar-collapse a').on('click', function() {
    $(".navbar-collapse").collapse('hide');
  });

  // AOS ANIMATION
  AOS.init({
    disable: 'mobile',
    duration: 800,
    anchorPlacement: 'center-bottom'
  });


  const swiper = new Swiper('.swiper-reviews', {

    // Optional parameters

    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,

    pagination: {
      el: '.swiper-pagination',
    },  
    breakpoints: { 
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      //spaceBetween: 30
    },
    // when window width is >= 640px
    960: {
      slidesPerView: 3,
      //spaceBetween: 40
    }
  }

  });


  // SMOOTHSCROLL NAVBAR
  $(function() {
    $('.navbar a, .hero-text a').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });
});
