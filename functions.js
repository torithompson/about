"use strict";
//for modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelector(".show-modal");
btnOpenModal.addEventListener("click", openModal);
function hideModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
btnCloseModal.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);

//for guessing game
("use strict");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = (document.querySelector(".score").textContent = 20);
let highScore = 0;
let message = "";
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (score > 1) {
    if (!guess) {
      message = "No number!";
    } else if (secretNumber === guess) {
      message = " 🎉 Correct Number!";
      document.querySelector(".number").textContent = secretNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else if (secretNumber < guess) {
      message = "Too high!";
      score--;
    } else if (secretNumber > guess) {
      message = "Too low!";
      score--;
    }
  } else {
    message = "You lost the game.";
    score = 0;
  }
  document.querySelector(".message").textContent = message;
  document.querySelector(".score").textContent = score;
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
