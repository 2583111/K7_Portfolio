document.addEventListener('DOMContentLoaded', () => {
  const artPieces = [ 
    {
      src: '../IMAGES/ART/Venipedes All the way down.png',
      title: 'Venipedes All The Way Down',
      artType: 'Digital Art',
      reference: 'Turtles All the Way Down by Sam Hollingsworth',
      date: '12-01-2025',
    },
    {
      src: '../IMAGES/ART/Jumping Enemy Turnaround.jpg',
      title: 'Jumping Enemy Turnaround',
      artType: 'Digital Art',
      reference: '...',
      date: '23-06-2024',
    },
    {
      src: '../IMAGES/ART/Shooting Enemy Turnaround.jpg',
      title: 'Shooting Enemy Turnaround',
      artType: 'Digital Art',
      reference: '...',
      date: '23-06-2024',
    },
    {
      src: '../IMAGES/ART/Walking Enemy Turnaround.jpg',
      title: 'Walking Enemy Turnaround',
      artType: 'Digital Art',
      reference: '...',
      date: '23-06-2024',
    },
    {
      src: '../IMAGES/ART/Items layout.jpg',
      title: 'Shop Items Layout',
      artType: 'Digital Art',
      reference: '...',
      date: '15-05-2023',
    },
    {
      src: '../IMAGES/ART/page 44.jpg',
      title: 'Johnny Joestar & Tusk Act 4',
      artType: 'Pencil and Ink Illustration',
      reference: 'JoJo\'s Bizarre Adventure Part 7: Steel Ball Run Chapter 85 by Hirohiko Araki',
      date: '2021',
    },
    {
      src: '../IMAGES/ART/page 43.jpg',
      title: 'Spiral',
      artType: 'Pencil and Ink Illustration',
      reference: 'Uzumaki Chapter 3 by Junji Ito',
      date: '2021',
    },
    {
      src: '../IMAGES/ART/page 42.jpg',
      title: 'Krookodile Using Bulldoze',
      artType: 'Pencil Illustration',
      reference: 'Krookodile by ishmam on DeviantArt [ https://imgur.com/krookodile-by-ishmam-Z6llV ]',
      date: '2021',
    },
    {
      src: '../IMAGES/ART/page 41.jpg',
      title: 'Shirou Emiya Oath Under Snow',
      artType: 'Pencil and Ink Illustration',
      reference: '...',
      date: '2021',
    },
    {
      src: '../IMAGES/ART/page 40.jpg',
      title: 'Gyro Zeppeli',
      artType: 'Pencil and Ink Illustration',
      reference: 'JoJo\'s Bizarre Adventure Part 7: Steel Ball Run Chapter 31 by Hirohiko Araki',
      date: '2021',
    },
    {
      src: '../IMAGES/ART/page 39.jpg',
      title: 'Meruem\'s Game',
      artType: 'Pencil and Ink Illustration',
      reference: 'Hunter x Hunter 2011 Episode 126 Directed by Hiroshi Kôjina & Migmi Written by Yoshihiro Togashi',
      date: '2021',
    },
    {
      src: '../IMAGES/ART/page 38.jpg',
      title: 'Astolfo Fate/Apocrypha',
      artType: 'Pencil Illustration',
      reference: '...',
      date: '2021',
    },
    {
      src: '../IMAGES/ART/page 37.jpg',
      title: 'Meruem vs Netero',
      artType: 'Pencil and Ink Illustration',
      reference: '[Hunter x Hunter] Meruem vs Netero!! by Kurolines on DeviantArt [ https://www.deviantart.com/kurolines/art/Hunter-x-Hunter-Meruem-vs-Netero-673396165 ]',
      date: '2021',
    },
    {
      src: '../IMAGES/ART/page 36.jpg',
      title: 'Tanjiro & Nezuko',
      artType: 'Pencil Illustration',
      reference: 'Demon Slayer: Kimetsu no Yaiba Episode 4 Directed by Hideki Hosokawa, Haruo Sotozaki Written by Koyoharu Gotouge',
      date: '2021',
    },
    {
      src: '../IMAGES/ART/page 35.jpg',
      title: 'Death Of Optimus Prime',
      artType: 'Pencil and Ink Illustration',
      reference: '...',
      date: '2021',
    },
    {
      src: '../IMAGES/ART/page 34.jpg',
      title: 'Filia',
      artType: 'Pencil and Ink Illustration',
      reference: 'Skullgirls by Lab Zero Games [ https://www.skullgirls.com/ ]',
      date: '2020',
    },
    {
      src: '../IMAGES/ART/page 33.jpg',
      title: 'Naruto One Tail Jinchuriki',
      artType: 'Pencil Illustration',
      reference: 'Naruto by @vinicius201333 on Twitter [ https://x.com/vinicius201333/status/1191699161235755008?s=20 ]',
      date: '2020',
    },
    {
      src: '../IMAGES/ART/page 32.jpg',
      title: 'Dragon Ball Volume 1 Cover Recreation',
      artType: 'Pencil Illustration',
      reference: 'Dragon Ball Volume 1 Cover by Akira Toriyama',
      date: '2020',
    },
    {
      src: '../IMAGES/ART/page 30.jpg',
      title: 'Naruto Volume 60 Cover Recreation',
      artType: 'Pencil Illustration',
      reference: 'Naruto Volume 60 Cover by Masashi Kishimoto',
      date: '2020',
    },
    {
      src: '../IMAGES/ART/page 29.jpg',
      title: 'Alien Vs Predator',
      artType: 'Pencil and Ink Illustration',
      reference: 'Alien vs Predator by Danny Cruz on ArtStation [ https://dannycruzart.artstation.com/projects/dKy54A ]',
      date: '2020',
    },
    {
      src: '../IMAGES/ART/page 28.jpg',
      title: 'Gon\'s Rage',
      artType: 'Pencil and Ink Illustration',
      reference: 'Hunter x Hunter 2011 Episode 116 Directed by Hiroshi Kôjina & Masaki Matsumura Written by Yoshihiro Togashi',
      date: '2020',
    },
    {
      src: '../IMAGES/ART/page 27.jpg',
      title: 'Shin Godzilla Portrait',
      artType: 'Pencil and Ink Illustration',
      reference: '...',
      date: '2020',
    },
    {
      src: '../IMAGES/ART/page 26.jpg',
      title: 'Gengar Evo Line',
      artType: 'Pencil and Ink Illustration',
      reference: '...',
      date: '2020',
    },
    {
      src: '../IMAGES/ART/page 25.jpg',
      title: 'Mewtwo',
      artType: 'Pencil and Ink Illustration',
      reference: 'Mewtwo by kevinplane_tattooer on Instagram [ https://www.instagram.com/p/BhHjwaWnFM4/?utm_source=ig_web_copy_link ]',
      date: '2020',
    }, 
    {
      src: '../IMAGES/ART/page 23.jpg',
      title: 'Pikachu Sage of Six Paths',
      artType: 'Pencil Illustration',
      reference: 'The Yellow Flash by @itsbirdy On DeviantArt',
      date: '2020',
    },
    {    
      src: '../IMAGES/ART/page 22.jpg',
      title: 'Greninja',
      artType: 'Pencil Illustration',
      reference: '...',
      date: '2020',
    },
    {
      src: '../IMAGES/ART/page 21.jpg',
      title: 'Hyakkimaru',
      artType: 'Pencil Illustration',
      reference: 'Hyakkimaru by u/ijarts on Reddit [ https://x.com/sorcererofmagic/status/1320869134418350080?s=20 ]',
      date: '2020',
    },
    {
      src: '../IMAGES/ART/page 20.jpg',
      title: 'Yin & Yang',
      artType: 'Pencil Illustration',
      reference: 'Naruto Sasuke, Yin - Yang by @thiethom on 9GAG [ https://9gag.com/gag/axDNWYb?utm_source=copy_link&utm_medium=post_share ]',
      date: '2020',
    },
    {
      src: '../IMAGES/ART/page 19.jpg',
      title: 'Itachi Uchiha',
      artType: 'Pencil and Ink Illustration',
      reference: 'Uchiha Itachi by u/xannchristinfe on Reddit [ https://www.reddit.com/r/Naruto/comments/mkrkva/uchiha_itachi/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button ]',
      date: '2020',
    },
    {
      src: '../IMAGES/ART/page 18.jpg',
      title: 'Naruto & Kurama',
      artType: 'Pencil Illustration',
      reference: 'Naruto & Kurama by @pirateking_pencil on Instagram [ https://www.instagram.com/pirateking_pencil/ ]',
      date: '2020',
    },
    {
      src: '../IMAGES/ART/page 17.jpg',
      title: 'The Knight\'s Descent',
      artType: 'Pencil Illustration',
      reference: 'Hollow Knight Screenprint 1 by Team Cherry ',
      date: '2020',
    },
    {
      src: '../IMAGES/ART/page 16.jpg',
      title: 'The Knight',
      artType: 'Pencil Illustration',
      reference: 'Hollow Knight by Zaiisey- Ana Viana on ArtStation [ https://www.artstation.com/artwork/ZyZ8x?utm_source=Pinterest&utm_medium=organic ]',
      date: '2019',
    },
    {
      src: '../IMAGES/ART/page 15.jpg',
      title: 'Obito\'s Lament',
      artType: 'Pencil and Ink Illustration',
      reference: 'I\'m nobody and I prefer it that way. by Obito Uchiha on Facebook [ https://www.facebook.com/photo/?fbid=1956377724426023&set=a.274045034079955 ]',
      date: '2019',
    },
    {
      src: '../IMAGES/ART/page 14.jpg',
      title: 'The Word Of Andrew Ryan',
      artType: 'Pencil Illustration',
      reference: 'Bioshock tattoo on Pinterest [ https://pin.it/5jxO3Ihb7]',
      date: '2019',
    },
    {
      src: '../IMAGES/ART/Page 13.jpg',
      title: 'Natsu Dragneel',
      artType: 'Pencil Illustration',
      reference: 'Coloriage Fairy Tail Natsu On Coloriage Manga [ https://coloriagemanga.fr/natsu/fairy-tail-natsu/ ]',
      date: '2019',
    },
    {
      src: '../IMAGES/ART/page 12.jpg',
      title: 'Leonardo Watch',
      artType: 'Pencil Sketch',
      reference: 'Blood Blockade Battlefront : Kekkai Sensen by Yasuhiro Nightow',
      date: '2019',
    },
    {
      src: '../IMAGES/ART/page 11.jpg',
      title: 'Hollow Ichigo',
      artType: 'Pencil Illustration',
      reference: 'Drawing Ichigo Kurosaki - Hollow Form | BLEACH | Anime Sketch By ST Artist on YouTube',
      date: '2019',
    },
    {
      src: '../IMAGES/ART/page 10.jpg',
      title: 'Godzilla 2018',
      artType: 'Pencil Sketch',
      reference: '...',
      date: '2019',
    },
    {
      src: '../IMAGES/ART/page 9.jpg',
      title: 'Killer Queen',
      artType: 'Pencil and Ink Illustration',
      reference: 'KILLER QUEEN by Witnesstheabsurd On Tumblr [ https://witnesstheabsurd.tumblr.com/post/102823961435/killer-queen-we-sat-together-on-the-porch-as-the ]',
      date: '2019',
    },
    {
      src: '../IMAGES/ART/page 8.jpg',
      title: 'Black Heart',
      artType: 'Pencil and Ink Illustration',
      reference: 'Hyperdimension Neptunia by Idea Factory International ',
      date: '2019',
    },
    {
      src: '../IMAGES/ART/page 7.jpg',
      title: 'Nanachi',
      artType: 'Pencil Sketch',
      reference: 'Made in Abyss by Akihito Tsukushi',
      date: '2019',
    },
    {
      src: '../IMAGES/ART/page 6.jpg',
      title: 'Jotaro & Star Platinum SD',
      artType: 'Pencil Sketch',
      reference: 'Chibi Jotaro Kujo and Star Platinum by Hamza on Amino [ https://pt.quizur.com/_image?href=https%3A%2F%2Fimg.quizur.com%2Ff%2Fimg5e1ce4bd1ba9c2.63088121.jpg%3FlastEdited%3D1578951909&w=400&h=400&f=webp ]',
      date: '2019',
    },
    {
      src: '../IMAGES/ART/page 5.jpg',
      title: 'Goblin Slayer',
      artType: 'Pencil and Ink Illustration',
      reference: 'Chibi Goblin Slayer [ https://forums.spacebattles.com/threads/goblin-slayer-image-thread.690697/page-29 ]',
      date: '2019',
    },
    {
      src: '../IMAGES/ART/page 4.jpg',
      title: 'EVA-01',
      artType: 'Pencil Illustration',
      reference: 'EVA 01 Berserk - Neon Genesis Evangelion BY buo3r on DeviantArt [ https://www.deviantart.com/buo3run/art/EVA-01-Berserk-Neon-Genesis-Evangelion-316263904 ]',
      date: '2019',
    },
    {
      src: '../IMAGES/ART/page 3.jpg',
      title: 'Shin Godzilla',
      artType: 'Pencil and Ink Illustration',
      reference: '...',
      date: '2019',
    },
    {
      src: '../IMAGES/ART/page 2.jpg',
      title: 'Bowser Profile',
      artType: 'Pencil and Ink Illustration',
      reference: 'Bowser by Nintendo',
      date: '2019',
    },
    {
      src: '../IMAGES/ART/page 1.jpg',
      title: 'Gold Experience',
      artType: 'Pencil and Ink Illustration',
      reference: 'JoJo\'s Bizarre Adventure Part 5: Golden Wind by Hirohiko Araki',
      date: '2019',
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

