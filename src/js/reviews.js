import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css/bundle';
import iziToast from 'izitoast';
import { getReviews } from './portfolio-api';
import { renderReviews } from './render-reviews';

const reviewsContainer = document.querySelector('.swiper-wrapper');
const prevBtn = document.querySelector('.reviews-prev-btn');
const nextBtn = document.querySelector('.reviews-next-btn');

try {
  const dataReviews = await getReviews();
  renderReviews(dataReviews, reviewsContainer);
  initializeSwiper();
} catch (error) {
  serverError = true;
}

function initializeSwiper() {
  const swiperParams = {
    modules: [Navigation, Keyboard],
    slidesPerView: 1,
    spaceBetween: 20,
    slideActiveClass: 'swiper-slide-active',
    // autoHeight: true,
    loop: false,
    keyboard: {
      enabled: true,
    },
    speed: 500,
    navigation: {
      nextEl: '.reviews-next-btn',
      prevEl: '.reviews-prev-btn',
    },
    breakpoints: {
      1280: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
      },
    },
    on: {
      slideChange: updateButtonStates,
    },
  };

  const swiper = new Swiper('.swiper', swiperParams);

  document.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' && !nextBtn.disabled) {
      event.preventDefault();
      swiper.slideNext();
    } else if (event.key === 'ArrowLeft' && !prevBtn.disabled) {
      event.preventDefault();
      swiper.slidePrev();
    }
  });

  window.addEventListener('resize', () => swiper.update());

  function updateButtonStates() {
    prevBtn.disabled = swiper.isBeginning;
    nextBtn.disabled = swiper.isEnd;
  }

  updateButtonStates();
}
