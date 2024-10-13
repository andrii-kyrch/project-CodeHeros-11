import { getReviews } from "./api.js";

const reviewsList = document.querySelector(".main-list");

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

window.addEventListener("load", (event) => {
    
    loadReviews();

})    

async function loadReviews() {

    const response = await getReviews();
    const reviews = response["data"];
    console.log(reviews);

    renderReviews(reviews);
    

}

 




//вызываем апи функцию с получением отзывов 
//показать ревью для пользователя
