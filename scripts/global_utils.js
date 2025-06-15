function close(modal){
    modal.classList.remove('modal_opened');
}
function open(modal){
    modal.classList.add('modal_opened');
}

export {close, open};