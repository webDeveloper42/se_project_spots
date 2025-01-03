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
const template = document.querySelector('.gallery__card-template');
let templateContext = template.content;
const galleryContainer = document.querySelector('.gallery__grid');
for(let card of initialCards){
    let cardClone = templateContext.cloneNode(true);
    let cardImgClone = cardClone.querySelector('.card__img');
    let cardTitleClone = cardClone.querySelector('.card__title');
    let cardAltClone = cardClone.querySelector('.card__img');
    cardTitleClone.textContent = card.name;
    cardImgClone.src = card.link;
    cardAltClone.alt = card.alt
    galleryContainer.appendChild(cardClone);
}

const profileEditBtn = document.querySelector('#profile__edit-button');
const modalExitBtn = document.querySelector('#modal__exit-button');
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
const formName = document.querySelector('.form__input.profile__name');
const formDescription = document.querySelector('.form__input.profile__description');
const saveBtn = document.querySelector('#form__save-button');
saveBtn.addEventListener('click', function(){
    profileName.textContent = formName.value;
    profileProfession.textContent = formDescription.value;
    closeProfileModal();
})
function handleProfileFormSubmit(event){
    event.preventDefault();
    
}
modalContainer.addEventListener('submit',handleProfileFormSubmit);
