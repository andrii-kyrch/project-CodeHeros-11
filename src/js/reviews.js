import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css/bundle';
import iziToast from 'izitoast';
import { getReviews } from './portfolio-api';
import { renderReviews } from './render-reviews';

const reviewsContainer = document.querySelector('.swiper-wrapper');
const prevBtn = document.querySelector('.reviews-prev-btn');
const nextBtn = document.querySelector('.reviews-next-btn');

const swiperParams = {
  modules: [Navigation, Keyboard],
  slidesPerView: 1,
  slidesPerGroup: 1,
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
  // on: {
  //   slideChange: updateButtonStates,
  // },
};

async function initializeSwiper() {
  try {
    const dataReviews = await getReviews();
    renderReviews(dataReviews, reviewsContainer);
    const swiper = new Swiper('.swiper', swiperParams);

    window.addEventListener('resize', () => swiper.update());

    function updateBtnState() {
      prevBtn.disabled = swiper.isBeginning;
      nextBtn.disabled = swiper.isEnd;
    }
    updateBtnState();
  } catch (error) {
    iziToast.error({
      message: 'Not found',
      maxWidth: 350,
      closeOnEscape: true,
      closeOnClick: true,
      position: 'topRight',
    });
  }
}

initializeSwiper();
