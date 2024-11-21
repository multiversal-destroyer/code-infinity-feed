const sliderLine = document.querySelector('.slider__list');
const sliderItems = Array.from(sliderLine.children);
const sliderButtonNext = document.querySelector('.slider__button--next');
const sliderButtonPrev = document.querySelector('.slider__button--prev');

let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', showSlide);

sliderButtonNext.addEventListener('click', nextSlide);
sliderButtonPrev.addEventListener('click', prevSlide);

function showSlide() {
  sliderWidth = document.querySelector('.slider__item').offsetWidth;
  sliderLine.style.width = sliderWidth * sliderItems.length + 'px';
  sliderItems.forEach(item => item.style.width = sliderWidth + 'px');
  rollSlider();
}

showSlide();

function nextSlide() {
  sliderCount += 5;
  if (sliderCount >= sliderItems.length) {
    sliderCount = 0;
  };
  rollSlider();
}

function prevSlide() {
  sliderCount -= 5;
  if (sliderCount < 0) {
    sliderCount = sliderItems.length - 5;
  };
  rollSlider();
}

function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}
