//Like Button Logic
export function toggleLike(card){
    const likeBtn = card.querySelector('#card__like-btn');
    const likeImg = card.querySelector('#img-like');
    likeBtn.addEventListener('click' , (e) => {
        e.preventDefault();
        if(likeImg.src.includes('like.svg')){
            likeImg.src = '../images/liked.svg';
        }else{
            likeImg.src = '../images/like.svg';
        }
    })
}
