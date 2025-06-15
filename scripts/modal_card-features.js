import { previewModal, previewImg, previewTitle } from './modal_preview-elements.js';
import { open } from './global_utils.js';
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
    const cardImg = card.querySelector('#card__img');
    const cardTitle = card.querySelector('.card__title');
    cardImg.addEventListener('click', (e) => {
        e.preventDefault();
        previewImg.src = cardImg.src;
        previewImg.alt = cardImg.alt;
        previewTitle.textContent = cardTitle.textContent;
        open(previewModal);
    });
}