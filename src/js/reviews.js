import axios from 'axios';
import Flickity from 'flickity';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

const carousel = document.querySelector('.carousel');
const previousButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');
let flkty;

window.addEventListener('load', loadReviews);

function renderReviews(reviews) {
  const htmlMarkup = reviews
    .map(
      review =>
        `<div class="carousel-cell">
            <div class="review-style">
                <p class="review-text">${review.review}</p>
                <div class="user-card">
                  <img class="avatar" src="${review.avatar_url}" alt="${review.author}'s avatar" width="40" height="40" />
                  <p class="userName">${review.author}</p>  
                </div> 
            </div>
        </div>`
    )
    .join('');

  carousel.innerHTML = htmlMarkup;
}

async function loadReviews() {
  try {
    const response = await getReviews();
    const reviews = response.data;

    renderReviews(reviews);
    initCarousel();
  } catch (error) {
    console.error('Error loading reviews:', error);
  }
}

async function getReviews() {
  return await axios.get('/reviews');
}

function initCarousel() {
  flkty = new Flickity(carousel, {
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false,
    adaptiveHeight: true
  });

  previousButton.addEventListener('click', () => flkty.previous());
  nextButton.addEventListener('click', () => flkty.next());

  flkty.on('change', updateButtonStates);
  updateButtonStates(0);
}

function updateButtonStates() {
  previousButton.disabled = false;
  nextButton.disabled = false;
  previousButton.style.background = '#fff';
  nextButton.style.background = '#fff';
}