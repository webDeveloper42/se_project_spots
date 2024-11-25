let initialCards = [
    {
        "name" : "Val Thorens",
        link :"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"

    },
    {
        "name" : "Restaurant terrace",
        link : "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"
    },
    {
        "name" : "An outdoor cafe",
        link : "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"
    },
    {
        "name" : "A very long bridge, over the forest and through the trees",
        link : "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"
    },
    {
        "name" : "Tunnel with morning light",
        link : "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"
    },
    {
        "name" : "Mountain house",
        link : "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"
    }
];

let avatarEditBtn = document.querySelector('#avatar__edit-button');
let modalExitBtn = document.querySelector('#modal__exit-button');
let modalContainer = document.querySelector('.modal');
avatarEditBtn.addEventListener('click',function(){
    modalContainer.classList.add('modal_opened');
})
modalExitBtn.addEventListener('click',function(){
    modalContainer.classList.remove('modal_opened');
})

let avatarName = document.querySelector('.avatar__name');
let avatarProfession = document.querySelector('.avatar__profession');
let formName = document.querySelector('.form__input.profile__name');
let formDescription = document.querySelector('.form__input.profile__description');
//the input has the value of the profile's values
formName.value = avatarName.innerHTML;
formDescription.value = avatarProfession.innerHTML;
let saveBtn = document.querySelector('#form__save-button');
function handleProfileFormSubmit(event){
    saveBtn.addEventListener('click', function(){
        avatarName.innerHTML = formName.value;
        avatarProfession.innerHTML = formDescription.value;
        modalContainer.classList.remove('modal_opened');
    })
    event.preventDefault();

}
modalContainer.addEventListener('submit',handleProfileFormSubmit);
let template = document.querySelector('.gallery__card-template');
let templateContext = template.content;
let galleryContainer = document.querySelector('.gallery__grid');
for(let card of initialCards){
    let cardClone = templateContext.cloneNode(true);
    let cardImgClone = cardClone.querySelector('.card__img');
    let cardTitleClone = cardClone.querySelector('.card__title');
    cardTitleClone.textContent = card.name;
    cardImgClone.src = card.link;
    galleryContainer.appendChild(cardClone);
}