"use strict";

const emptyMessageDiv = document.querySelector(".empty-state-message-div");
const cardsDisplayedStateDiv = document.querySelector(".cards-state-div");
const emptyStateBigIcon = document.querySelector(".ph-list-plus");

document.querySelector(".icon-wrapper").addEventListener("mouseover", () => {
  emptyStateBigIcon.classList.add("hide");
  document.querySelector(".ph-plus-circle-big").classList.add("show");
});

document.querySelector(".add-card-btn").addEventListener("click", () => {
  console.log("log");
  emptyMessageDiv.classList.add("main-hide");
  cardsDisplayedStateDiv.classList.remove("main-hide");
});
