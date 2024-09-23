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
    const serviceBox = button.closest('.service-box');
    const summary = serviceBox.querySelector('.service-summary');
    const fullContent = serviceBox.querySelector('.service-full');

    // Alterna a visibilidade dos parágrafos
    if (summary.style.display !== "none") {
        summary.style.display = "none"; // Oculta o resumo
        fullContent.style.display = "block"; // Exibe o conteúdo completo
        button.textContent = "Ver menos";
    } else {
        summary.style.display = "block"; // Exibe o resumo
        fullContent.style.display = "none"; // Oculta o conteúdo completo
        button.textContent = "Saiba mais"; 
    }
}

// Inicializa a página
document.addEventListener("DOMContentLoaded", function() {
    const fullText = document.querySelectorAll('.service-full');
    fullText.forEach(text => {
        text.style.display = 'none'; // Oculta o texto completo ao carregar a página
    });
});