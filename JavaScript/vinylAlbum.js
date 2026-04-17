document.addEventListener('DOMContentLoaded', () => {
  const albums = document.querySelectorAll('.album');

  albums.forEach(album => {
    const coverUrl = album.getAttribute('data-cover-url');
    const vinylCover = album.querySelector('.vinyl-cover');

    if (coverUrl && vinylCover) {
      vinylCover.style.backgroundImage = `url('${coverUrl}')`;
    }
  });
});

const btn = document.getElementById('hover-btn');
const sound = document.getElementById('360Audio2');

btn.addEventListener('mouseenter', () => {
    sound.currentTime = 0; // Reset to start if already playing
    sound.play();
});

btn.addEventListener('mouseleave', () => {
    sound.pause(); // Optional: Stop sound when mouse leaves
});
