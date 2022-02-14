var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  anchors: ['section1', 'section2', 'section3', 'section4'],
  pagination: {
    el: ".swiper-pagination",
  },
});