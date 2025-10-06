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

// Utility modal functions
function close(modal) {
  modal.classList.remove("modal_opened");
}
function open(modal) {
  modal.classList.add("modal_opened");
}

// Feature setup
function toggleLike(card) {
  const likeBtn = card.querySelector(".card__like-btn");
  const likeImg = card.querySelector(".button__img-like");
  likeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (likeImg.src.endsWith("like.svg")) {
      likeImg.src = "./images/liked.svg";
    } else {
      likeImg.src = "./images/like.svg";
    }
  });
}

function enableDelete(card) {
  const deleteBtn = card.querySelector(".button__delete");
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    card.remove();
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
    const modal = btn.closest(".modal__div");
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
  const cardClone = cardTemplate.content.cloneNode(true);
  const card = cardClone.querySelector(".gallery__card");
  const cardImg = cardClone.querySelector(".card__img");
  const cardTitle = cardClone.querySelector(".card__title");
  cardImg.src = data.link;
  cardImg.alt = data.alt;
  cardTitle.textContent = data.name;
  setupCardFeatures(card);
  return card;
}

// Render initial cards
initialCards.forEach((data) => {
  const card = createCard(data);
  cardGallery.appendChild(card);
});

// Edit profile modal
editProfileBtn.addEventListener("click", () => {
  open(editModal);
  editNameInput.value = profileNameTitle.textContent.trim();
  editDescriptionInput.value = profileDescriptionTitle.textContent.trim();
});
editModalCloseBtn.addEventListener("click", () => close(editModal));
editProfileForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileNameTitle.textContent = editNameInput.value;
  profileDescriptionTitle.textContent = editDescriptionInput.value;
  close(editModal);
});

// New post modal
addPhotoBtn.addEventListener("click", () => open(postModal));
postModalCloseBtn.addEventListener("click", () => close(postModal));
newPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const cardData = makeCardData(postCaptionInput.value, postImgLinkInput.value);
  const card = createCard(cardData);
  cardGallery.prepend(card);
  close(postModal);
  postImgLinkInput.value = "";
  postCaptionInput.value = "";
});

previewModalCloseBtn.addEventListener("click", () => close(previewModal));
