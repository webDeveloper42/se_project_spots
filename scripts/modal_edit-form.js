const edditProfileBtn = document.querySelector('#profile__edit');
const modalContainer = document.querySelector('#modal__edit');
const modalCloseBtn = document.querySelector('#modal__exit-edit');
edditProfileBtn.addEventListener('click', () => {
    modalContainer.classList.remove('modal__hidden')
    modalContainer.classList.add('modal__opened');
    console.log('clicked');
})
modalCloseBtn.addEventListener('click', () => {
    modalContainer.classList.remove('modal__opened');
    modalContainer.classList.add('modal__hidden');

})