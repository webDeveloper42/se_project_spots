import "./index.css";
import likeIcon from "../images/like.svg";
import likedIcon from "../images/liked.svg";
import avatarImg from "../images/avatar.jpg";
import Api from "../utils/Api.js";
import {
  enableValidation,
  settings,
  resetValidation,
  disableButton,
} from "../scripts/validation.js";
// Initial card data
const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
    alt: "House on a mountain in the winter",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
    alt: "Restaurant on a street walkway",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
    alt: "An outdoor cafe",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
    alt: "A very long bridge over a forest",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
    alt: "A building like tunnel",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
    alt: "A cabin on the woods in the winter in front of snowy trees",
  },
];

// DOM references
const previewModal = document.querySelector(".modal__preview");
const previewImg = previewModal.querySelector(".modal__preview-img");
const previewTitle = previewModal.querySelector(".modal__preview-title");
const cardGallery = document.querySelector(".gallery__grid");
const cardTemplate = cardGallery.querySelector(".gallery__card-template");
const editProfileBtn = document.querySelector(".profile__edit");
const profileNameTitle = document.querySelector(".profile__name-title");
const editNameInput = document.querySelector("#profile-name");
const profileDescriptionTitle = document.querySelector(".profile__profession");
const editDescriptionInput = document.querySelector("#profile-description");
const editModal = document.querySelector(".modal__edit");
const editModalCloseBtn = document.querySelector(".modal__exit-edit");
const addPhotoBtn = document.querySelector(".profile__add");
const postModal = document.querySelector(".modal__post");
const postModalCloseBtn = document.querySelector(".modal__exit-post");
const postImgLinkInput = document.querySelector("#image-link");
const postCaptionInput = document.querySelector("#image-caption");
const editProfileForm = editModal.querySelector(".modal__form");
const previewModalCloseBtn = document.querySelector(".modal__preview-exit");
const newPostForm = postModal.querySelector(".modal__form");
const cardSubmitBtn = postModal.querySelector(".form__save");
const profileSubmitBtn = editModal.querySelector(".form__save");

const avatarModalBtn = document.querySelector(".profile__avatar-btn");
const avatarModal = document.querySelector(".modal__edit-avatar");
const avatarForm = avatarModal.querySelector(".modal__form");
const avatarBtn = avatarModal.querySelector(".form__save");
const avatarExitBtn = avatarModal.querySelector(".modal__exit");
const avatarInput = avatarModal.querySelector("#profile-avatar-input");
const avatarProfile = document.querySelector(".profile__image");
const cardClone = cardTemplate.content.cloneNode(true);
const card = cardClone.querySelector(".gallery__card");
const cardImg = cardClone.querySelector(".card__img");
const cardTitle = cardClone.querySelector(".card__title");

// cancel modal
const cardTrashBtn = cardClone.querySelector(".card__trash");
const modalCancel = document.querySelector(".modal__cancel");
const modalCancelForm = modalCancel.querySelector(".modal__cancel-form");
const modalCancelDeleteBtn = modalCancelForm.querySelector(".form__delete");
const modalCancelBtn = modalCancelForm.querySelector(".form__cancel");
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "006a4c81-1607-41c2-8939-b62f86151b71",
    "Content-Type": "application/json",
  },
});
//destructure the second item in the .then callback
api
  .getAppInfo()
  .then(([cards, user]) => {
    cards.forEach((data) => {
      const card = createCard(data);
      cardGallery.appendChild(card);
      console.log(cards);
    });
    //handle users response information
    console.log(user);
    // - set the src of the avatar image
    user.avatar = avatarImg;
    // - set the textContent of both the text element
    user.name = profileNameTitle.textContent.trim();
    user.about = profileDescriptionTitle.textContent;
  })
  .catch(console.error);

// Utility modal functions
function close(modal) {
  modal.classList.remove("modal__opened");
  document.removeEventListener("keydown", checkKeyPress);
}
function open(modal) {
  modal.classList.add("modal__opened");
  document.addEventListener("keydown", checkKeyPress);
}
function checkKeyPress(e) {
  if (e.key === "Escape") {
    const openModal = document.querySelector(".modal__opened");
    if (openModal) {
      close(openModal);
    }
  }
}
function overlayExit(overlay, modal) {
  overlay.addEventListener("click", () => {
    close(modal);
  });
}
const overlayPost = postModal.querySelector(".modal__overlay");
overlayExit(overlayPost, postModal);
const overlayEdit = editModal.querySelector(".modal__overlay");
overlayExit(overlayEdit, editModal);
const overlayPreview = previewModal.querySelector(".modal__overlay");
overlayExit(overlayPreview, previewModal);
// Feature setup
function toggleLike(card) {
  const likeBtn = card.querySelector(".card__like-btn");
  const likeImg = card.querySelector(".button__img-like");
  let isLiked = false;
  likeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (isLiked) {
      likeImg.src = likeIcon;
      isLiked = false;
    } else {
      likeImg.src = likedIcon;
      isLiked = true;
    }
  });
}

function enableDelete(card) {
  const deleteBtn = card.querySelector(".button__delete");
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
  });
}

function enablePreview(card) {
  const cardImg = card.querySelector(".card__img");
  const cardTitle = card.querySelector(".card__title");
  cardImg.addEventListener("click", (e) => {
    e.preventDefault();
    previewImg.src = cardImg.src;
    previewImg.alt = cardImg.alt;
    previewTitle.textContent = cardTitle.textContent;
    open(previewModal);
  });
}
const exitBtn = document.querySelectorAll(".modal__exit");
exitBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    close(modal);
  });
});
function setupCardFeatures(card) {
  toggleLike(card);
  enableDelete(card);
  enablePreview(card);
}

function makeCardData(name, link) {
  return {
    name: name,
    link: link,
    alt: `${name}`,
  };
}

function createCard(data) {
  cardImg.src = data.link;
  cardImg.alt = data.alt;
  cardTitle.textContent = data.name;
  setupCardFeatures(card);
  return card;
}

// Edit profile modal
editProfileBtn.addEventListener("click", () => {
  open(editModal);
  editNameInput.value = profileNameTitle.textContent.trim();
  editDescriptionInput.value = profileDescriptionTitle.textContent.trim();
  resetValidation(
    editProfileForm,
    [editNameInput, editDescriptionInput],
    settings,
  );
});
editProfileForm.addEventListener("submit", (e) => {
  e.preventDefault();
  api
    .editUserInfo({
      name: editNameInput.value,
      about: editDescriptionInput.value,
    })
    .then((data) => {
      // use data arg instead of input values
      console.log(data);
      profileNameTitle.textContent = data.name;
      profileDescriptionTitle.textContent = data.about;
      const inputList = Array.from(
        editProfileForm.querySelectorAll(settings.inputSelector),
      );
      resetValidation(editProfileForm, inputList, settings);
      disableButton(profileSubmitBtn, settings);
      close(editModal);
    })
    .catch(console.error());
});
// New post modal
addPhotoBtn.addEventListener("click", () => open(postModal));
newPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const cardData = makeCardData(postCaptionInput.value, postImgLinkInput.value);
  const card = createCard(cardData);
  cardGallery.prepend(card);
  newPostForm.reset();
  const inputList = Array.from(
    newPostForm.querySelectorAll(settings.inputSelector),
  );
  resetValidation(newPostForm, inputList, settings);
  disableButton(cardSubmitBtn, settings);
  close(postModal);
});

previewModalCloseBtn.addEventListener("click", () => close(previewModal));
enableValidation(settings);

// Select avatar modal at the top of the page
// Select avatar modal btn at the top of the page
//TODO finish avatar submision handler
function handleAvatarSubmit(evt) {
  evt.preventDefault();
  //TODO call api.editavataruserinfo()
  api
    .editAvatarInfo({ avatar: avatarInput.value })
    .then((data) => {
      console.log(data);
      avatarProfile.src = data.avatar;
      const inputList = Array.from(
        avatarForm.querySelectorAll(settings.inputSelector),
      );
      resetValidation(avatarForm, inputList, settings);
      disableButton(avatarBtn, settings);
      close(avatarModal);
    })
    .catch(console.error);
}
avatarForm.addEventListener("submit", handleAvatarSubmit);
const overlayAvatar = avatarModal.querySelector(".modal__overlay");
overlayExit(overlayAvatar, avatarModal);
avatarModalBtn.addEventListener("click", () => open(avatarModal));

cardTrashBtn.addEventListener("click", (e) => {
  e.preventDefault();
  open(modalCancel);
});
const overlayCancel = modalCancel.querySelector(".modal__overlay");
overlayExit(overlayCancel, modalCancel);
