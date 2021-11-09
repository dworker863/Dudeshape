$(window).on('load', function () {
  $('.hamburger-wrapper').on('click', function (e) {
    const self = $(this);
    $(self).toggleClass('active');
    $('.menu-mobile').slideToggle();
  });

  $('.prices__services-item input').on('click', function (e) {
    const self = $(this);
    console.log('click');
    $(self).next('.services-item__checkbox').toggleClass('active');
  });
});
