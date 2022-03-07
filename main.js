const hamburgur = document.querySelector('#navbar .hamburgur');
const menu = document.querySelector('.menu');
const icon = document.querySelector('.icon');

hamburgur.addEventListener('click', function() {
    menu.classList.toggle('show');
    icon.classList.toggle('show');
});

