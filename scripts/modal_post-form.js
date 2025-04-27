const addPhotoBtn = document.querySelector('#profile__add');
const modalContainer = document.querySelector('#modal__post');
const modalCloseBtn = document.querySelector('#modal__exit-post');
addPhotoBtn.addEventListener('click', () => {
    modalContainer.classList.remove('modal__hidden')
    modalContainer.classList.add('modal__opened');
    console.log('clicked');
})
modalCloseBtn.addEventListener('click', () => {
    modalContainer.classList.remove('modal__opened');
    modalContainer.classList.add('modal__hidden');

})