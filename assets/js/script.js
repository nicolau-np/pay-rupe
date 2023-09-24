const target = document.querySelectorAll("[data-anime]");
const buttonTop = document.querySelector("#button-top");
const previousScrollPosition = document.documentElement.scrollTop;

function animeScroll() {
    const windowTop = window.scrollY + window.innerHeight * (3 / 4);
  
    target.forEach(e => {
      if (windowTop > e.offsetTop) {
        e.classList.add("animate");
      }
    });
  }

  function addAnimateInButtonTop() {
    const currentScrollPosition = document.documentElement.scrollTop;
    if (previousScrollPosition < currentScrollPosition) {
      buttonTop.classList.add("animate");
    } else if (previousScrollPosition == currentScrollPosition) {
      buttonTop.classList.remove("animate");
    }
  }

  window.addEventListener("scroll", function() {
    addAnimateInButtonTop();
    animeScroll();
  });