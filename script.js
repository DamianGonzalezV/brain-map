"use strict";

const emptyMessageDiv = document.querySelector(".empty-state-message-div");
const cardsDisplayedStateDiv = document.querySelector(".cards-state-div");
const cardForm = document.querySelector(".card-form");
const emptyStateBigIcon = document.querySelector(".ph-list-plus");

const cardTitleInput = document.querySelector(".card-title-input");

document.querySelector(".icon-wrapper").addEventListener("mouseover", () => {
  emptyStateBigIcon.classList.add("hide");
  document.querySelector(".ph-plus-circle-big").classList.add("show");
});

document.querySelector(".add-card-btn").addEventListener("click", () => {
  console.log("log");
  emptyMessageDiv.classList.add("main-hide");
  cardForm.classList.remove("main-hide");
});

cardTitleInput.addEventListener("keydown", (e) => {
  console.log(e);

  if (e.key === "Enter") {
    const cardTitle = document.createElement("h3");
    cardTitle.textContent = cardTitleInput.value;
    cardTitleInput.replaceWith(cardTitle);
  }
});
