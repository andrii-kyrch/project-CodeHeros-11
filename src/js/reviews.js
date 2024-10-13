import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

const reviewsList = document.querySelector(".main-list");

window.addEventListener("load", (event) => {
    
    loadReviews();
})  

function renderReviews(reviews) {

    const htmlMarkup = reviews
    .map((review) => 
        `<li class="review-item">
            <div class="review-style">
                <p class="review-text">${review["review"]}</p>
                <div class="user-card">
                <img class="avatar" src="${review["avatar_url"]}" alt="" />
                <p class="userName">${review["author"]}</p>  
                </div> 
            </div>
        </li>`)
    .join("");

    reviewsList.innerHTML = htmlMarkup;
}      

async function loadReviews() {

    const response = await getReviews();
    const reviews = response["data"];

    renderReviews(reviews);
}

async function getReviews() {

    return await axios.get('/reviews');
}