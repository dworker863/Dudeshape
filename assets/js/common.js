$(window).on('load', function () {
  $('.top-line').width($('.container').width());

  $(window).on('resize', function (e) {
    $('.top-line').width($('.container').width());
  });

  const itemWidth = $('.review__item').width() + 4;
  const sliderWidth =
    $('.review__slider .review__item').length * itemWidth + 'px';
  let sliderLeft = +$('.review__slider').css('left').slice(0, -2);

  const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onCenter',
    },
  });

  new ScrollMagic.Scene({
    triggerElement: '#about',
    duration: $('#about').height(),
  })
    .setClassToggle('.item1', 'active')
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#prices',
    duration: $('#prices').height(),
  })
    .setClassToggle('.item2', 'active')
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#reviews',
    duration: $('#reviews').height(),
  })
    .setClassToggle('.item3', 'active')
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#blog',
    duration: $('#blog').height(),
  })
    .setClassToggle('.item4', 'active')
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.reviews__photos',
  })
    .setClassToggle('.photos__circle_blue', 'active')
    // .addIndicators({ name: 'photos__circles' })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.reviews__photos',
  })
    .setClassToggle('.photos__circle_orange', 'active')
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.reviews__photos',
  })
    .setClassToggle('.photos__circle_grey', 'active')
    .addTo(controller);

  const getArrowDisable = () => {
    const width = $('.review__slider').width();
    sliderLeft = +$('.review__slider').css('left').slice(0, -2);

    if (sliderLeft <= 0 && sliderLeft >= -itemWidth) {
      $('.arrows__prev').addClass('arrow__disabled');
    } else {
      $('.arrows__prev').removeClass('arrow__disabled');
    }

    if (width + sliderLeft <= itemWidth * 2) {
      $('.arrows__next').addClass('arrow__disabled');
    } else {
      $('.arrows__next').removeClass('arrow__disabled');
    }
  };

  const getSliderTranslate = (translateValue, self) => {
    sliderLeft = +$('.review__slider').css('left').slice(0, -2);
    console.log(self.css('color'));

    if (
      self.attr('id') === 'arrows__prev' &&
      self.css('color') === 'rgb(122, 122, 122)'
    ) {
      return;
    } else if (
      self.attr('id') === 'arrows__next' &&
      self.css('color') === 'rgb(122, 122, 122)'
    ) {
      return;
    }

    $('.review__slider').css('left', sliderLeft + translateValue + 'px');
  };

  $('.review__slider').css('width', sliderWidth);

  $('.hamburger-wrapper').on('click', function (e) {
    const self = $(this);
    $(self).toggleClass('active');
    $('.menu-mobile').slideToggle();
  });

  $('.prices__services-item input').on('click', function (e) {
    const self = $(this);
    $(self).next('.services-item__checkbox').toggleClass('active');
  });

  $('.arrows__next').on('click', function (e) {
    e.preventDefault();
    getSliderTranslate(-itemWidth, $(this));
    getArrowDisable();
  });

  $('.arrows__prev').on('click', function (e) {
    e.preventDefault();
    getSliderTranslate(itemWidth, $(this));
    getArrowDisable();
  });

  $('.carousel-team').owlCarousel({
    items: 3,
    margin: 43,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      568: {
        items: 2,
      },
      820: {
        items: 3,
      },
    },
  });

  $('.carousel-partners').owlCarousel({
    items: 5,
    margin: 95,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      568: {
        items: 2,
      },
      820: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  });

  $('.carousel-blog').owlCarousel({
    items: 1,
    loop: true,
  });

  $('.blog-arrow__prev').on('click', function () {
    $('.carousel-blog').trigger('prev.owl.carousel');
  });

  $('.blog-arrow__next').on('click', function () {
    $('.carousel-blog').trigger('next.owl.carousel');
  });
});
