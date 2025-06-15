import {close, open} from './global_utils.js';
import {enableDelete, enablePreview, toggleLike} from "./modal_card-features.js";
import {createCard} from "./gallery_render.js";
const addPhotoBtn = document.querySelector('#profile__add');
const modalContainer = document.querySelector('#modal__post');
const modalCloseBtn = document.querySelector('#modal__exit-post');
const postBtn = document.querySelector('#form__save-post');
const postImgLinkInput = document.querySelector('#image-link');
const postCaptionInput = document.querySelector('#image-caption');
const galleryGrid = document.querySelector('#gallery-grid');
addPhotoBtn.addEventListener('click', () =>open(modalContainer));
modalCloseBtn.addEventListener('click', () =>close(modalContainer));
function makeCardData(name, link) {
    return {
        name: name,
        link: link,
        alt: `${name}`
    };
}
export function setupCardFeatures(card) {
    toggleLike(card);
    enableDelete(card);
    enablePreview(card);
}
postBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const cardData = makeCardData(postCaptionInput.value, postImgLinkInput.value);
    const card = createCard(cardData);

    setupCardFeatures(card);

    galleryGrid.appendChild(card);
    close(modalContainer);

    postImgLinkInput.value = '';
    postCaptionInput.value = '';
});


