const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});



document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".typing-text", {
        strings: ["Mathematics.", "Statistics.", "Data Science.", "Programming."], // Add more words
        typeSpeed: 60,  // Speed of typing
        backSpeed: 30,  // Speed of deleting
        backDelay: 500, // Delay before deleting
        loop: true      // Loops infinitely
    });
});
