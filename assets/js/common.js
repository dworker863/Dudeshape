$(window).on('load', function () {
  const sliderWidth = $('.review__slider .review__item').length * 490 + 'px';
  let sliderLeft = +$('.review__slider').css('left').slice(0, -2);

  const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onCenter',
    },
  });

  new ScrollMagic.Scene({
    triggerElement: '.reviews',
  })
    .setClassToggle('.photos__circle_blue', 'active')
    .addIndicators({ name: 'photos__circles' })
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.reviews',
  })
    .setClassToggle('.photos__circle_orange', 'active')
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.reviews',
  })
    .setClassToggle('.photos__circle_grey', 'active')
    .addTo(controller);

  const getArrowDisable = () => {
    const width = $('.review__slider').width();
    sliderLeft = +$('.review__slider').css('left').slice(0, -2);

    if (sliderLeft <= 0 && sliderLeft >= -490) {
      $('.arrows__prev').addClass('arrow__disabled');
    } else {
      $('.arrows__prev').removeClass('arrow__disabled');
    }

    if (width + sliderLeft <= 980) {
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
    getSliderTranslate(-490, $(this));
    getArrowDisable();
  });

  $('.arrows__prev').on('click', function (e) {
    e.preventDefault();
    getSliderTranslate(490, $(this));
    getArrowDisable();
  });
});
