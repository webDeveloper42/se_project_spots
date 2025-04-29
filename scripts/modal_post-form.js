import { openModal , closeModal } from './global_utils.js';
const addPhotoBtn = document.querySelector('#profile__add');
const modalContainer = document.querySelector('#modal__post');
const modalCloseBtn = document.querySelector('#modal__exit-post');
openModal(addPhotoBtn , modalContainer);
closeModal(modalCloseBtn , modalContainer);