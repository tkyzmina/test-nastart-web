const swiper = new Swiper(".swiper-container", {
  speed: 400,
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".products .button-next",
    prevEl: ".products .button-prev",
  },
  autoplay: {
    delay: 9000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1250: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

export { swiper };
