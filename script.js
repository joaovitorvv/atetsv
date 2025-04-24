// Função para gerar pontos no fundo
function createStars() {
    const starContainer = document.querySelector('.background');
    const numStars = 100; // Quantidade de estrelas (pode ajustar conforme necessário)

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Posição aleatória das estrelas
        const size = Math.random() * 3 + 1; // Tamanho aleatório de 1 a 3px
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${posX}px`;
        star.style.top = `${posY}px`;

        // Adiciona a estrela ao contêiner de fundo
        starContainer.appendChild(star);
    }
}

// Chama a função para gerar as estrelas assim que a página carrega
window.onload = createStars;
