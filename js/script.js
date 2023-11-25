const bgEffect = document.getElementById("home-page");
const searchToggle = document.querySelector(".search-toggle");
const sideBarOpen = document.querySelector(".sidebaropen");
const sideBarClose = document.querySelector(".sidebarclose");
const sideBarMenu = document.querySelector(".navbar-menu");
const searchField = document.querySelector(".search-field");
const inputField = document.querySelector(".input-field");
const shoppingCart = document.querySelector(".shopping-carts");
const shoppingCartBtn = document.querySelector(".shopping-cart-btn");

// bg home page effect
window.addEventListener("scroll", () => {
  bgEffect.style.opacity = 1 - window.pageYOffset / 900;
});

// kumpulan button
searchToggle.addEventListener("click", () => {
  searchField.classList.toggle("active");
  inputField.focus();
});

sideBarOpen.addEventListener("click", () => {
  sideBarMenu.classList.add("active");
});

sideBarClose.addEventListener("click", () => {
  sideBarMenu.classList.remove("active");
});

shoppingCartBtn.addEventListener("click", () => {
  shoppingCart.classList.toggle("active");
});

// bagian luar sidebar biar bisa di close
window.addEventListener("click", (e) => {
  if (!sideBarOpen.contains(e.target) && !sideBarMenu.contains(e.target)) {
    sideBarMenu.classList.remove("active");
  }
});

window.addEventListener("click", (e) => {
  if (!searchToggle.contains(e.target) && !searchField.contains(e.target)) {
    searchField.classList.remove("active");
  }
});

window.addEventListener("click", (e) => {
  if (!shoppingCartBtn.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// REVIEW PAGE SLIDER
var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
