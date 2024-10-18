export function renderReviews(data, container) {
  const reviewsMarkup = data
    .map(({ review, author, avatar_url }) => {
      return `<li class="swiper-slide reviews-item">
        <p class="reviews-text">${review}</p>
          <p class="reviews-author">
          <img src="${avatar_url}" alt="" />${author}</p>
      </li>`;
    })
    .join('');

  container.innerHTML = reviewsMarkup;
}
