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
    slidesPerView: 3,

    pagination: {
      el: '.swiper-pagination',
    },

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
