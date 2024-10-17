import axios from 'axios';
import Flickity from 'flickity';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

const reviewsList = document.querySelector('.main-list');
const carouselContainer = document.querySelectorAll('.carousel-container');
const carousel = document.querySelector('.carousel');
const previousButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');
let flkty;

window.addEventListener('load', event => {
  loadReviews();
});

function renderReviews(reviews) {
  const htmlMarkup = reviews
    .map(
      review =>
        `<div class="carousel-cell">
            <div class="review-style">
                <p class="review-text">${review['review']}</p>
                <div class="user-card">
                  <img class="avatar" src="${review['avatar_url']}" alt="" width="40px"; />
                  <p class="userName">${review['author']}</p>  
                </div> 
            </div>
        </div>`
    )
    .join('');

  carousel.innerHTML = htmlMarkup;
}

async function loadReviews() {
  const response = await getReviews();
  const reviews = response['data'];
  reviewsCount = reviews.length;

  renderReviews(reviews);

  initCarouselContainer(carouselContainer);
}

async function getReviews() {
  return await axios.get('/reviews');
}

function initCarouselContainer(container) {
  var touchStartEvents = {
    touchstart: true,
    MSPointerDown: true,
  };

  var focusNodes = {
    INPUT: true,
    SELECT: true,
  };

  Flickity.prototype.pointerDownFocus = function (event) {
    // focus element, if not touch, and its not an input or select
    if (
      !this.options.accessibility ||
      touchStartEvents[event.type] ||
      focusNodes[event.target.nodeName]
    ) {
      return;
    }
    // hack to fix scroll jump after focus, #76
    var scrollElem = this.options.scrollElement || window;
    var scrollProp = this.options.scrollElement ? 'scrollTop' : 'pageYOffset';
    var prevScrollY = scrollElem[scrollProp];

    this.element.focus();
    // reset scroll position after focus
    if (scrollElem[scrollProp] != prevScrollY) {
      if (this.options.scrollElement) {
        scrollElem.scrollTop = prevScrollY;
      } else {
        scrollElem.scrollTo(scrollElem.pageXOffset, prevScrollY);
      }
    }
  };

  var flkty = new Flickity(carousel, {
    accessibility: false,
    pageDots: false,
    prevNextButtons: false,
    scrollElement: document.querySelector('.main-reviews'),
  });

  previousButton.addEventListener('click', function () {
    flkty.previous();
  });

  nextButton.addEventListener('click', function () {
    flkty.next();
  });

  flkty.on('change', function (index) {
    if (index == 0) {
      previousButton.setAttribute('disabled', true);
    } else if (index == reviewsCount - 1) {
      nextButton.setAttribute('disabled', true);
    } else {
      nextButton.removeAttribute('disabled');
      previousButton.removeAttribute('disabled');
    }
  });
}
