function close(element){
    element.classList.remove('modal__opened');
    element.classList.add('modal__hidden');
}
function openModal(openBtn , modalContainer) {
    openBtn.addEventListener('click', () => {
        modalContainer.classList.remove('modal__hidden')
        modalContainer.classList.add('modal__opened');
    })
}
function closeModal(closeBtn , modalContainer) {
    closeBtn.addEventListener('click', () => {
        close(modalContainer);
    })
}



export {openModal, closeModal, close};