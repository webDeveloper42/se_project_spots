import {initialCards} from "./gallery_data.js";
import {enableDelete, enablePreview, toggleLike} from "./modal_card-features.js";

const cardGallery = document.querySelector(".gallery__grid");
const cardTemplate = cardGallery.querySelector(".gallery__card-template");
export function createCard(data) {
    const cardClone = cardTemplate.content.cloneNode(true);
    const card = cardClone.querySelector(".gallery__card");
    const cardImg = cardClone.querySelector(".card__img");
    const cardTitle = cardClone.querySelector(".card__title");
    cardImg.src = data.link;
    cardImg.alt = data.alt;
    cardTitle.textContent = data.name;
    toggleLike(card);
    enableDelete(card);
    enablePreview(card);
    return card;
}

initialCards.forEach(data => {
    const card = createCard(data);
    cardGallery.appendChild(card);
});