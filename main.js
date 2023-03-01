"use strict";

const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const arrow = document.querySelectorAll(".arrow");

for (let i = 0; i < question.length; i++) {
  function events() {
    question[i].classList.toggle("active");
    arrow[i].classList.toggle("rotate");
    answer[i].classList.toggle("visible");
  }
  arrow[i].addEventListener("click", function () {
    events();
  });
  question[i].addEventListener("click", function () {
    events();
  });
  answer[i].addEventListener("click", function () {
    if (answer[i].classList.contains("visible")) {
      answer[i].classList.remove("visible");
      question[i].classList.remove("active");
      arrow[i].classList.remove("rotate");
    }
  });
}

// function events() {
//   question[i].classList.toggle("active");
//   arrow[i].classList.toggle("rotate");
//   answer[i].classList.toggle("visible");
// }
