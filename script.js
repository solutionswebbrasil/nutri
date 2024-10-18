// Função para rolagem suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Slider de Depoimentos Simples
const depoimentosSlider = document.querySelector('.depoimentos-grid');
let isDown = false;
let startX;
let scrollLeft;

depoimentosSlider.addEventListener('mousedown', (e) => {
    isDown = true;
    depoimentosSlider.classList.add('active');
    startX = e.pageX - depoimentosSlider.offsetLeft;
    scrollLeft = depoimentosSlider.scrollLeft;
});

depoimentosSlider.addEventListener('mouseleave', () => {
    isDown = false;
    depoimentosSlider.classList.remove('active');
});

depoimentosSlider.addEventListener('mouseup', () => {
    isDown = false;
    depoimentosSlider.classList.remove('active');
});

depoimentosSlider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - depoimentosSlider.offsetLeft;
    const walk = (x - startX) * 2; // Ajustar o fator de velocidade de rolagem
    depoimentosSlider.scrollLeft = scrollLeft - walk;
});


// Script para abrir e fechar o menu ao clicar no ícone de hambúrguer
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
