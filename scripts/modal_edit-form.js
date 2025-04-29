import { openModal , closeModal } from './global_utils.js';
const editProfileBtn = document.querySelector('#profile__edit');
const modalContainer = document.querySelector('#modal__edit');
const modalCloseBtn = document.querySelector('#modal__exit-edit');
openModal(editProfileBtn , modalContainer);
closeModal(modalCloseBtn , modalContainer);