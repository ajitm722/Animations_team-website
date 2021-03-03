"use strict";

document.querySelectorAll(".story-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("change");
    btn.nextElementSibling.classList.toggle("change");
    //goes to .story to toggle its change as well
  });
});
