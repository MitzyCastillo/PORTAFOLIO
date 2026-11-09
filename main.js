const openNav = document.getElementById('openNav');
const barraMenu = document.getElementById('barraMenu');
const closeNav = document.getElementById('closeNav');

openNav.addEventListener('click', () => {
    barraMenu.classList.add('active');
});

closeNav.addEventListener('click', () => {
    barraMenu.classList.remove('active');
});