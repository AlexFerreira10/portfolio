/* **** Turns the menu hamburguer into a X **** */

const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener("click", () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle("change");

    if(menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

function toggleService(button) {
    const paragraph = button.previousElementSibling;
    if (paragraph.classList.contains('expanded')) {
        paragraph.classList.remove('expanded');
        button.textContent = 'Saiba mais';
    } else {
        paragraph.classList.add('expanded');
        button.textContent = 'Mostrar menos';
    }
}