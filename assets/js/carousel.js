const caroucelItems = document.querySelectorAll(".hero .carousel .item");

var active = 0;
var itemsCount = caroucelItems.length - 1;

showCaroucel();

function showCaroucel() {
  caroucelItems.forEach(element => {
    element.classList.remove("active");
  });

  caroucelItems[active].classList.add("active");
}

function nextCaroucelItem() {
  if (active == itemsCount) {
    active = 0;
  } else {
    active += 1;
  }
  showCaroucel();
}

setInterval(() => {
  nextCaroucelItem();
}, 5000);
