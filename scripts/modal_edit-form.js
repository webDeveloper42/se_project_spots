import { openModal , closeModal } from './global_utils.js';
const editProfileBtn = document.querySelector('#profile__edit');
const editSaveBtn = document.querySelector('#profile__save');
const profileNameTitle = document.querySelector('#profile_name_title');
const editNameInput = document.querySelector('#profile-name');
const profileDescriptionTitle = document.querySelector('#profile__profession');
const editDescriptionInput = document.querySelector('#profile-description');
const modalContainer = document.querySelector('#modal__edit');
const modalCloseBtn = document.querySelector('#modal__exit-edit');
openModal(editProfileBtn , modalContainer);
closeModal(modalCloseBtn , modalContainer);
editNameInput.value = profileNameTitle.textContent;
editDescriptionInput.value = profileDescriptionTitle.textContent;
editNameInput.placeholder = profileNameTitle.textContent;
editDescriptionInput.placeholder = profileDescriptionTitle.textContent;
editSaveBtn.addEventListener('click' , (e) => {
    e.preventDefault()
    profileNameTitle.textContent = editNameInput.value;
    editNameInput.value = profileNameTitle.textContent;
    profileDescriptionTitle.textContent = editDescriptionInput.value;
    editDescriptionInput.value = profileDescriptionTitle.textContent;
    modalContainer.classList.remove('modal__opened');
    modalContainer.classList.add('modal__hidden');
})