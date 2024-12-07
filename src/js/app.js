// HAMBURGER MENU
document.querySelector('.navbar__hamburger').addEventListener('click', function () {
    const navLinks = document.querySelector('.navbar__links');
    navLinks.classList.toggle('navbar__links--active');
});

