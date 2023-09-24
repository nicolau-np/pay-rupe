const target = document.querySelectorAll("[data-anime]");
const buttonTop = document.querySelector("#button-top");
const previousScrollPosition = document.documentElement.scrollTop;
const closeButton = document.querySelector('.close-button');
const overflow = document.querySelector('.overflow')
const mobileMenu = document.querySelector('.mobile-menu')


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

  closeButton.addEventListener('click', function(){
    overflow.classList.remove('active')
  })

  mobileMenu.addEventListener('click', function(){
    overflow.classList.add('active')
  })