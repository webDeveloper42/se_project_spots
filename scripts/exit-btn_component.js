const exitBtn = document.querySelectorAll('.modal__exit');
exitBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal__div');
        modal.classList.remove('modal_opened');
        console.log('worked')
    })
})