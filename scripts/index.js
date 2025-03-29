const initialCards = [
    {
        "name" : "Val Thorens",
        link :"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
        alt : "House on a mountain in the winter"
    },
    {
        "name" : "Restaurant terrace",
        link : "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
        alt : "Restaurant on a street walkway"
    },
    {
        "name" : "An outdoor cafe",
        link : "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
        alt : "An outdoor cafe" 
    },
    {
        "name" : "A very long bridge, over the forest and through the trees",
        link : "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
        alt : "A very long bridge over a forest"
    },
    {
        "name" : "Tunnel with morning light",
        link : "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
        alt : "A building like tunnel"
    },
    {
        "name" : "Mountain house",
        link : "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
        alt : "A cabin on the woods in the winter in front of snowy trees"
    }
];
//card gallery stuff
const template = document.querySelector('.gallery__card-template');
const templateContext = template.content;
const galleryContainer = document.querySelector('.gallery__grid');
const modalPreview = document.querySelector('.modal__preview')
const modalPreviewImg = document.querySelector('.modal__preview-img')
const modalPreviewTitle = document.querySelector('.modal__preview-title')
const modalExitPreview = document.querySelector('#modal__preview-exit')
function getCardElement(cardData) {
    const cardClone = template.content.cloneNode(true);
    const cardImg = cardClone.querySelector('.card__img');
    const cardTitle = cardClone.querySelector('.card__title');
    const likeBtn = cardClone.querySelector('.card__like')
    const btnImg = cardClone.querySelector('.button__img-like')
    const trashBtn = cardClone.querySelector('.card__trash')
    const trashImg = cardClone.querySelector('.button__img-trash')
    
    cardImg.src = cardData.link;
    cardImg.alt = cardData.alt;
    cardTitle.textContent = cardData.name;
    likeBtn.addEventListener('click', function () {
        if (likeBtn.classList.contains('clicked')) {
            // Unlike state
            btnImg.src = '../images/like.svg'; 
            likeBtn.classList.remove('clicked');
            likeBtn.classList.add('default');
        } else {
            // Liked state
            btnImg.src = '../images/liked.svg'; 
            likeBtn.classList.add('clicked');
            likeBtn.classList.remove('default');
        }
    });
    trashBtn.addEventListener('click', function () {
        trashBtn.parentNode.remove();
    });
    trashBtn.addEventListener('mouseover',function(){
        trashImg.src = '../images/trashActive.svg';
    })
    trashBtn.addEventListener('mouseout',function(){
        trashImg.src = '../images/trashDefault.svg';
    })
    modalExitPreview.addEventListener('mouseover',function(){
        modalExitPreview.src = '../images/default-invert-x.svg';
    })
    modalExitPreview.addEventListener('mouseout',function(){
        modalExitPreview.src = '../images/active-invert-x.svg';
    })
    cardImg.addEventListener('click',function(){
        console.log('do something');
        modalPreview.classList.remove('modal__displayToggle')
        modalPreviewImg.src = cardData.link;
        modalPreviewTitle.textContent = cardData.name;

    })
    modalExitPreview.addEventListener('click', function (){
        modalPreview.classList.add('modal__displayToggle')
    })
    return cardClone; 
}
initialCards.forEach(function(cardData) {
    const cardElement = getCardElement(cardData); 
    galleryContainer.appendChild(cardElement); 
});
const profileEditBtn = document.querySelector('#profile__edit');
const buttonPost = document.querySelector('.profile__add');
const modalExitBtn = document.querySelector('#modal__exit-edit');
const modalEditContainer = document.querySelector('.modal__edit');
const modalPostContainer = document.querySelector('.modal__post');

function closeProfileModal(){
    modalEditContainer.classList.remove('modal_opened');
    modalPostContainer.classList.remove('modal_opened');

}
profileEditBtn.addEventListener('click',function(){
    modalEditContainer.classList.add('modal_opened');
    formName.value = profileName.textContent;
    formDescription.value = profileProfession.textContent;
})
buttonPost.addEventListener('click',function(){
    modalPostContainer.classList.add('modal_opened');

})
modalExitBtn.addEventListener('click',function(){
    closeProfileModal();
})

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const formName = document.querySelector('.form__input#profile-name');
const formDescription = document.querySelector('.form__input#profile-description');
const saveBtn = document.querySelector('#form__save');
const profileForm = modalContainer.querySelector('.modal__form');
function handleProfileFormSubmit(event){
    event.preventDefault();
    profileName.textContent = formName.value;
    profileProfession.textContent = formDescription.value;
    closeProfileModal();
}
profileForm.addEventListener('submit',handleProfileFormSubmit);

