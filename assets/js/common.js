$(window).on('load', function () {
  console.log('ready');
  $('.hamburger-wrapper').on('click', function (e) {
    const self = $(this);
    $(self).toggleClass('active');
    $('.menu-mobile').slideToggle();
  });
});
