import {openModal, closeModal, close} from './global_utils.js';
const addPhotoBtn = document.querySelector('#profile__add');
const modalContainer = document.querySelector('#modal__post');
const modalCloseBtn = document.querySelector('#modal__exit-post');
const cardTemplate = document.querySelector('#card-template');
const postBtn = document.querySelector('#form__save-post');
const postImgLinkInput = document.querySelector('#image-link');
const postCaptionInput = document.querySelector('#image-caption');
const galleryGrid = document.querySelector('#gallery-grid');
openModal(addPhotoBtn , modalContainer);
closeModal(modalCloseBtn , modalContainer);
postBtn.addEventListener('click' , (e) => {
    e.preventDefault();
    const card = cardTemplate.content.cloneNode(true);
    card.querySelector('#card__img').src = postImgLinkInput.value;
    card.querySelector('#card__title').textContent = postCaptionInput.value;
    close(modalContainer);
    postImgLinkInput.value = '';
    postCaptionInput.value = '';
    return galleryGrid.prepend(card);
})

