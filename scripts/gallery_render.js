import {initialCards} from "./gallery_data.js";
import {toggleLike} from "./modal_card-features.js";
const cardGallery = document.getElementById("gallery-grid");
const cardTemplate = document.getElementById("card-template");
function createCard(data) {
    const cardClone = cardTemplate.content.cloneNode(true);
    const cardImg = cardClone.querySelector("#card__img");
    const cardTitle = cardClone.querySelector("#card__title");
    cardImg.src = data.link;
    cardImg.alt = data.alt;
    cardTitle.textContent = data.name;
    return cardClone;
}
initialCards.forEach(data => {
    const card = createCard(data);
    toggleLike(card);
    cardGallery.appendChild(card);
});