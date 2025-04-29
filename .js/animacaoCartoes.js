// animacaoCartoes.js
window.addEventListener("DOMContentLoaded", () => {
    const cartoes = document.querySelectorAll('.cartao-01');

    cartoes.forEach(cartao => {
        cartao.addEventListener('mouseenter', () => {
            cartao.style.transform = 'scale(1.05)';
            cartao.style.transition = 'transform 0.3s ease';
            cartao.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
        });

        cartao.addEventListener('mouseleave', () => {
            cartao.style.transform = 'scale(1)';
            cartao.style.boxShadow = 'none';
        });
    });
});