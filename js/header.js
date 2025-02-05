
// Nav Bar
let navBar = document.querySelector(".nav");
let navBarLinks = document.querySelectorAll(".nav a");
let lastScrollPosition = window.scrollY;

window.addEventListener("scroll", () => {
  let currentScrollPosition = window.scrollY;

  if (currentScrollPosition < lastScrollPosition) {
    // console.log("Scrolling up!");
    navBar.style.cssText = "";
  } else {
    // console.log("Scrolling down or staying still.");
    navBar.style.cssText = "transform: translateY(-100%);";
  }

  lastScrollPosition = currentScrollPosition;
});
