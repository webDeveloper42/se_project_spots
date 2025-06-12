function close(element){
    element.classList.remove('modal_opened');
}
function openModal(openBtn , modalContainer) {
    openBtn.addEventListener('click', () => {
        modalContainer.classList.add('modal_opened');
    })
}
function closeModal(closeBtn , modalContainer) {
    closeBtn.addEventListener('click', () => {
        close(modalContainer);
    })
}



export {openModal, closeModal, close};