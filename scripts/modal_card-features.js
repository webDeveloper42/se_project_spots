//Like Button Logic
export function toggleLike(card){
    const likeBtn = card.querySelector('#card__like-btn');
    const likeImg = card.querySelector('#img-like');
    likeBtn.addEventListener('click' , (e) => {
        e.preventDefault();
        if(likeImg.src.endsWith('like.svg')){
            likeImg.src = './images/liked.svg';
        }else{
            likeImg.src = './images/like.svg';
        }
    })
}
export function enableDelete(card){
    const deleteBtn = card.querySelector('#button__delete');
    deleteBtn.addEventListener('click' , (e) => {
        e.preventDefault();
        card.remove();
    })
}
export function enablePreview(card){
    const previewModal = document.querySelector('#modal__preview');
    const previewImg = previewModal.querySelector('#modal__preview-img');
    const cardImg = card.querySelector('#card__img');
    const previewTitle = previewModal.querySelector('.modal__preview-title');
    const cardTitle = card.querySelector('.card__title');
    cardImg.addEventListener('click', (e) => {
        e.preventDefault();
        previewImg.src = cardImg.src;
        previewImg.alt = cardImg.alt;
        previewTitle.textContent = cardTitle.textContent;
        previewModal.classList.add('modal_opened');
    });
}