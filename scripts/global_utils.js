function openModal(openBtn , modalContainer) {
    openBtn.addEventListener('click', () => {
        modalContainer.classList.remove('modal__hidden')
        modalContainer.classList.add('modal__opened');
    })
}
function closeModal(closeBtn , modalContainer) {
    closeBtn.addEventListener('click', () => {
        modalContainer.classList.remove('modal__opened');
        modalContainer.classList.add('modal__hidden');
    })
}



export {openModal, closeModal};