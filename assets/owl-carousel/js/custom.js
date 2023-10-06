$(".owl-features").owlCarousel({
  items: 3,
  loop: true,
  dots: false,
  nav: true,
  autoplay: false,
  margin: 10,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 2
    },
    800: {
      items: 2
    },
    1000: {
      items: 2
    }
  }
});
