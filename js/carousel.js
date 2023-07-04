const carouselContainer = document.querySelector('.carousel-container');
const carouselPrevBtn = document.querySelector('.carousel-prev');
const carouselNextBtn = document.querySelector('.carousel-next');

let position = 0;
const slideWidth = 300; // Здесь можно задать ширину слайда (в пикселях)

carouselPrevBtn.addEventListener('click', () => {
  if (position < 0) {
    position += slideWidth;
    carouselContainer.style.transform = `translateX(${position}px)`;
  }
});

carouselNextBtn.addEventListener('click', () => {
  if (position > -slideWidth * (carouselContainer.children.length - 1)) {
    position -= slideWidth;
    carouselContainer.style.transform = `translateX(${position}px)`;
  }
});