// Get the hamburger menu icon and the navigation links
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Add a click event listener to the icon
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
});

// Initialize Typed.js with the correct selector
var typed = new Typed(".animated-text", {
    strings: ["Student", "Software Developer", "Web Developer", "Youtuber", "Techy Person"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
});