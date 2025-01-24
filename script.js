const container = document.getElementById('container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  const size = Math.random() * 10 + 10; // Tamaño aleatorio
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;

  heart.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
  heart.style.animationDuration = `${Math.random() * 3 + 3}s`; // Duración aleatoria

  container.appendChild(heart);

  // Eliminar el corazón después de que salga de la pantalla
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Crear un corazón cada 300ms
setInterval(createHeart, 300);
