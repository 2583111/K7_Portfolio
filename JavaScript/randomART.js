const images = [
  './IMAGES/ART/Items layout.jpg',
  './IMAGES/ART/Jumping Enemy Turnaround.jpg',
  './IMAGES/ART/Shooting Enemy Turnaround.jpg',
  './IMAGES/ART/Walking Enemy Turnaround.jpg',
  './IMAGES/ART/Venipedes All the way down.png',
  './IMAGES/ART/page 44.jpg',
  './IMAGES/ART/page 40.jpg',
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function loadImages(maxImages) {
  const container = document.getElementById('imageWrapper');
  if (!container) return; // safety check
  container.innerHTML = '';

  const shuffledImages = shuffle([...images]);
  const selectedImages = shuffledImages.slice(0, Math.min(maxImages, images.length));

  function loadPage() {
    window.location.href = './ART/index.html';
  }

  for (let i = 0; i < selectedImages.length; i++) {
    const randomContainer = document.createElement('div');
    randomContainer.className = 'randomContainer';

    const img = document.createElement('img');
    img.src = selectedImages[i];
    img.alt = `Artwork image ${i + 1}`;
    img.addEventListener('click', loadPage);

    randomContainer.appendChild(img);
    container.appendChild(randomContainer);
  }
}

// Run on load
function updateImages() {
  if (window.matchMedia('screen and (max-width: 650px)').matches) {
    loadImages(4);
  } else {
    loadImages(5);
  }
}

// Initial load
updateImages();

// Optional: update on resize
window.addEventListener('resize', updateImages);