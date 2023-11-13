let menuButton = document.querySelector('.header-mobile');
let menu = document.querySelector('.menu');

menuButton.addEventListener('click', function () {
    menu.classList.toggle('active');
});
