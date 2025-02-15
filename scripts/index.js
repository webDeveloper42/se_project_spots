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
    return cardClone; 
}
initialCards.forEach(function(cardData) {
    const cardElement = getCardElement(cardData); 
    galleryContainer.appendChild(cardElement); 
});
const profileEditBtn = document.querySelector('#profile__edit');
const modalExitBtn = document.querySelector('#modal__exit');
const modalContainer = document.querySelector('.modal');
function closeProfileModal(){
    modalContainer.classList.remove('modal_opened');
}
profileEditBtn.addEventListener('click',function(){
    modalContainer.classList.add('modal_opened');
    formName.value = profileName.textContent;
    formDescription.value = profileProfession.textContent;
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

