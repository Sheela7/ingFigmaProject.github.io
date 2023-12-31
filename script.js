//js for navbar begins
let navbar = document.querySelector(".navbar");
let hamBurgerMenu = document.querySelector(".hamburger-menu");
let hamBurgerMenuIcon = document.querySelector(".hamburger-menu i");

function showMenu() {
  navbar.classList.toggle("show-menu");
  const isShowingMenu = navbar.classList.contains("show-menu");
  hamBurgerMenuIcon.classList = isShowingMenu
    ? "fa-solid fa-bars"
    : "fa-solid fa-xmark";
}
//js for navbar ends

// js for image carousel begins
const header = document.querySelector("header");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");

const headerImages = [
  "src/images/headerImages/forest.png",
  "src/images/headerImages/forestNext.jpg",
  "src/images/headerImages/forestPrev.jpg",
];
let currentImageIndex = 0;

// Event handler for previous button
prevButton.addEventListener("click", () => {
  console.log("pressed prev");
  currentImageIndex =
    (currentImageIndex - 1 + headerImages.length) % headerImages.length;
  header.classList.add("slide");
  setTimeout(() => {
    header.style.backgroundImage = `url(${headerImages[currentImageIndex]})`;
    header.classList.remove("slide");
  }, 500);
});

//Event handler for next button
nextButton.addEventListener("click", () => {
  console.log("pressed next");
  currentImageIndex = (currentImageIndex + 1) % headerImages.length;
  header.classList.add("slide");
  setTimeout(() => {
    header.style.backgroundImage = `url(${headerImages[currentImageIndex]})`;
    header.classList.remove("slide");
  }, 500);
});
// js for image carousel ends
