const rainContainer = document.getElementById('rainContainer');

function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = `${Math.random() * 100}vw`;
    raindrop.style.animationDuration = `${Math.random() * 1 + 1}s`;
    raindrop.style.animationDelay = `${Math.random() * 2}s`;
    rainContainer.appendChild(raindrop);

    raindrop.addEventListener('animationend', () => {
        raindrop.remove();
    });
}

setInterval(createRaindrop, 100);

function showImageGrid() {
    const boxContainer = document.getElementById('boxContainer');
    const toggleButton = document.getElementById('toggleButton');
    boxContainer.style.display = 'grid';
    toggleButton.style.display = 'none';
}
