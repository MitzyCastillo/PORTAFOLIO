const openNav = document.getElementById('openNav');
const barraMenu = document.getElementById('barraMenu');
const closeNav = document.getElementById('closeNav');

function cerrarMenu() {
    barraMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

openNav.addEventListener('click', () => {
    barraMenu.classList.add('active');
    document.body.classList.add('no-scroll');
});

closeNav.addEventListener('click', cerrarMenu);


document.querySelectorAll('.navLink').forEach(link => {
    link.addEventListener('click', cerrarMenu);
});


window.addEventListener('pageshow', cerrarMenu);
