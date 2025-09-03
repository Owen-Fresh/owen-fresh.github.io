// Make a variable for hamburger icon
const hamburgerBtn = document.getElementById("js-hamburger-button")

// Make a variable for mobile nav
const mobileNav = document.getElementById("js-mobile-nav")

// On nav button click, display (flex) mobile nav menu
const handleNavClick = () => {
  mobileNav.style.display = "flex";
}

// Add event listener for click on hamburger icon
hamburgerBtn.addEventListener("click", handleNavClick)


// Make a variable for close button
const closeButton = document.getElementById("js-close-button")

// On close button click, display (none) mobile nav menu
const handleCloseClick = () => {
  mobileNav.style.display = "none";
}

// Add event listener for click on close button
closeButton.addEventListener("click", handleCloseClick)