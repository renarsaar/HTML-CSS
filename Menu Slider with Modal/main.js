// UI vars
const toggle = document.getElementById("toggle");
const modal = document.getElementById("modal");
const open = document.getElementById("open");
const close = document.getElementById("close");

// Toggle Nav
toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

// Show Modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

// Hide Modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide Modal on Outside Click
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
