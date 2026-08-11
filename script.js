document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle Mobile Navigation
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
            }
        });
    });
});