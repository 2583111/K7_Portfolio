// Single quick spin on each hover
const playPolygon = document.getElementById('playPoly');

playPolygon.addEventListener('mouseover', () => {
gsap.to(playPolygon, {
    duration: 0.5,
    rotation: '+=360',
    transformOrigin: '100px 100px',
    ease: 'power1.out'
});
});