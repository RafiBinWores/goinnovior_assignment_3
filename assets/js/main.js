// Toggle Navbar
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navCloseButton = document.getElementById("nav-close");

navToggle.addEventListener("click", () => {
  navMenu.classList.remove("-translate-x-full");
});

navCloseButton.addEventListener("click", () => {
  navMenu.classList.add("-translate-x-full");
});
