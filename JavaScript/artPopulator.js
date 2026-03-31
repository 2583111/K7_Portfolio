document.addEventListener('DOMContentLoaded', () => {
  const artPieces = [ 
    {
      src: '../IMAGES/ART/Venipedes All the way down.png',
      title: 'Venipedes All The Way Down',
      artType: 'Digital Art',
      reference: 'Turtles All The Way Down by John Green',
      date: '2024',
    },
    {
      src: '../IMAGES/ART/Jumping Enemy Turnaround.jpg',
      title: 'Jumping Enemy Turnaround',
      artType: 'Pixel Art',
      reference: 'A jumping enemy character turnaround for a game project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/Shooting Enemy Turnaround.jpg',
      title: 'Shooting Enemy Turnaround',
      artType: 'Pixel Art',
      reference: 'A shooting enemy character turnaround for a game project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/Walking Enemy Turnaround.jpg',
      title: 'Walking Enemy Turnaround',
      artType: 'Pixel Art',
      reference: 'A walking enemy character turnaround for a game project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/Items layout.jpg',
      title: 'Items Layout',
      artType: 'Pixel Art',
      reference: 'Layout of items for a game project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 44.jpg',
      title: 'Page 44',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 43.jpg',
      title: 'Page 43',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 42.jpg',
      title: 'Page 42',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 41.jpg',
      title: 'Page 41',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 40.jpg',
      title: 'Page 40',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 39.jpg',
      title: 'Page 39',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 38.jpg',
      title: 'Page 38',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 37.jpg',
      title: 'Page 37',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 36.jpg',
      title: 'Page 36',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 35.jpg',
      title: 'Page 35',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 34.jpg',
      title: 'Page 34',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 33.jpg',
      title: 'Page 33',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 32.jpg',
      title: 'Page 32',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 30.jpg',
      title: 'Page 30',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 29.jpg',
      title: 'Page 29',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 28.jpg',
      title: 'Page 28',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 27.jpg',
      title: 'Page 27',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 26.jpg',
      title: 'Page 26',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 25.jpg',
      title: 'Page 25',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    }, 
    {
      src: '../IMAGES/ART/page 23.jpg',
      title: 'Page 23',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {    
      src: '../IMAGES/ART/page 22.jpg',
      title: 'Page 22',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 21.jpg',
      title: 'Page 21',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 20.jpg',
      title: 'Page 20',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 19.jpg',
      title: 'Page 19',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 18.jpg',
      title: 'Page 18',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 17.jpg',
      title: 'Page 17',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 16.jpg',
      title: 'Page 16',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 15.jpg',
      title: 'Page 15',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 14.jpg',
      title: 'Page 14',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/Page 13.jpg',
      title: 'Page 13',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 12.jpg',
      title: 'Page 12',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 11.jpg',
      title: 'Page 11',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 10.jpg',
      title: 'Page 10',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 9.jpg',
      title: 'Page 9',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 8.jpg',
      title: 'Page 8',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 7.jpg',
      title: 'Page 7',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 6.jpg',
      title: 'Page 6',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 5.jpg',
      title: 'Page 5',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 4.jpg',
      title: 'Page 4',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 3.jpg',
      title: 'Page 3',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 2.jpg',
      title: 'Page 2',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
    {
      src: '../IMAGES/ART/page 1.jpg',
      title: 'Page 1',
      artType: 'Digital Art',
      reference: 'A page from a digital art project',
      date: '2023',
    },
  ];
  

  const container = document.getElementById('imageRow');
  if (!container) {
    console.warn('imageRow container not found, aborting gallery population.');
    return;
  }

  for (let i = 0; i < artPieces.length; i++) {
    const artBox = document.createElement('div');
    artBox.className = 'artBox';

    const img = document.createElement('img');
    artBox.appendChild(img);
    img.src = artPieces[i].src;

    //Create Overlay
    const infoOverlay = document.createElement('div');
    infoOverlay.className = 'infoOverlay';

    infoOverlay.innerHTML = `
      <h3 class='art-title'>${artPieces[i].title}</h3>
      <p class='art-type'>${artPieces[i].artType}</p>
      <p class='art-reference'>${artPieces[i].reference}</p>
      <p class='art-date'>${artPieces[i].date}</p>
    `;

    artBox.appendChild(img);
    artBox.appendChild(infoOverlay);
    container.appendChild(artBox);
  }

  // slide-in animation after all resources are loaded
  window.addEventListener('load', () => {
    document.querySelectorAll('.artBox img').forEach((img, index) => {
      setTimeout(() => {
        img.classList.add('slide-in');
      }, index * 200); // stagger delay
    });
  });

  // Get modal elements after DOM is ready
  const modalOverlay = document.getElementById('modalOverlay');
  const modalImage = document.getElementById('modalImage');

  const galleryImgs = Array.from(document.querySelectorAll('.artBox img'));

  // If modal elements exist, wire up modal + slideshow behavior
  if (modalOverlay && modalImage) {
    let slideIndex = 1;

    function showSlides(n) {
      if (galleryImgs.length === 0) return;
      // wrap index
      if (n > galleryImgs.length) {
        slideIndex = 1;
      } else if (n < 1) {
        slideIndex = galleryImgs.length;
      } else {
        slideIndex = n;
      }

      // update the modal image to the current slide
      modalImage.src = galleryImgs[slideIndex - 1].src;
      // ensure modal is visible when navigating programmatically
      modalOverlay.style.display = 'flex';
      document.body.classList.add('modal-open');
    }

    function plusSlides(n) {
      showSlides(slideIndex + n);
    }

    // When an image in the gallery is clicked, open modal at that index
    galleryImgs.forEach((img, index) => {
      img.addEventListener('click', () => {
        slideIndex = index + 1;
        showSlides(slideIndex);
      });
    });

    //Add click event to modal overlay to close it, but ignore clicks on buttons inside the overlay
    modalOverlay.addEventListener('click', (e) => {
      // don't close if the click originated on a button (or inside one)
      if (e.target.closest('button')) return;

      modalOverlay.style.display = 'none'; // Hide modal
      document.body.classList.remove('modal-open');
    });

    // Prevent clicks on the modal image from closing the overlay (overlay click closes)
    modalImage.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Keyboard navigation while modal is open
    document.addEventListener('keydown', (e) => {
      const isOpen = modalOverlay.style.display === 'flex';
      if (!isOpen) return;

      if (e.key === 'ArrowRight') {
        plusSlides(1);
      } else if (e.key === 'ArrowLeft') {
        plusSlides(-1);
      } else if (e.key === 'Escape') {
        modalOverlay.style.display = 'none';
        document.body.classList.remove('modal-open');
      }
    });
  } else {
    console.warn('Modal elements not found (modalOverlay or modalImage). Modal functionality disabled.');
  }
});

