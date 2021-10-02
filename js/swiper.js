new Swiper('.main-products .swiper.visual-swiper', {
  loop: true,
  autoplay: true,
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  }
});

new Swiper('.main-products .swiper.sub-swiper', {
  loop: true,
  autoplay: {
    delay: 5000
  },
  centeredSlides: true,
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    960: {
      slidesPerView: 3.5,
      spaceBetween: 5
    },
  },
});

new Swiper('.main-store .swiper', {
  loop: true,
  autoplay: {
    delay: 1000
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 5,
      spaceBetween: 5
    },
    600: {
      slidesPerView: 6,
      spaceBetween: 5
    },
    960: {
      slidesPerView: 8,
      spaceBetween: 5
    },
  },
});

// MY CAMPING CAR
new Swiper('.slogan .swiper.visual-swiper', {
  loop: true,
  autoplay: true,
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  },
  pagination: {
    el: '.slogan .swiper-pagination',
    clickable: true
  }
});

new Swiper('.slogan .swiper.sub-swiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 5,
});

new Swiper('.collaboration-story .swiper', {
  loop: true,
  autoplay: true,
});

new Swiper('.coffee-golden-ale .swiper', {
  loop: true,
  autoplay: true,
});

new Swiper('.corner-shop .swiper', {
  loop: true,
  autoplay: true,
});