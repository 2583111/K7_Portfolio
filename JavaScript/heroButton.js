   document.addEventListener("DOMContentLoaded", () => {
     var x = document.getElementById("360Audio"); 

     function playAudio() { 
       x.play(); 
     } 

     // Attach the function to the button
     document.querySelector("button").onclick = playAudio;
   });

const fillText = document.querySelector(".textContainer");
const animateButton = document.querySelector("button");

// Set initial state to green
gsap.set(fillText, {
    backgroundPosition: "100% 100%",
    color: "#89cc04"
});

animateButton.addEventListener("click", function () {
    const tl = gsap.timeline();
    tl.to(fillText, {
        backgroundPosition: "100% 0%",
        color: "#080808",
        duration: 0,
        ease: "none",
    })
    .to(fillText, {
        backgroundPosition: "100% 100%",
        color: "#89cc04",
        duration: 2,
        ease: "none",
    });
});