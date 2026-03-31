const images = [
  '../IMAGES/ART/Items layout.jpg',
  '../IMAGES/ART/Jumping Enemy Turnaround.jpg',
  '../IMAGES/ART/Shooting Enemy Turnaround.jpg',
  '../IMAGES/ART/Walking Enemy Turnaround.jpg',
  '../IMAGES/ART/Venipedes All the way down.png',
  '../IMAGES/ART/page 44.jpg',
  '../IMAGES/ART/page 40.jpg',
  '../IMAGES/ART/page 21.jpg',
  '../IMAGES/ART/page 29.jpg',

];

// Set the maximum number of images
const max = 5;
// Generate a random images to show
const numImagesToShow = Math.min(max, images.length);

// Shuffle and select images
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledImages = shuffle([...images]);
const selectedImages = shuffledImages.slice(0, numImagesToShow);

// Reference to the container
const container = document.getElementById('imageWrapper');
container.innerHTML = ''; // clear previous images

for (let i = 0; i < selectedImages.length; i++) {
  const randomContainer = document.createElement('div');
  randomContainer.className = 'randomContainer';

  const img = document.createElement('img');
  img.src = selectedImages[i];

  randomContainer.appendChild(img);
  container.appendChild(randomContainer);
}
