
   
button = document.querySelector("button");
dragon = document.querySelector("#dragon");
dino = document.querySelector("#dino");
audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
const gameover=document.querySelector("#over");
button.addEventListener("click", () => {
    console.log("Hello");
    gameover.innerHTML="Let's predict your jump";
    dragon.classList.add("rightmovement");
    dragon.style.animationDuration = "3s"; // Increased duration for a slower shift
    dragon.style.animationIterationCount = "infinite";
    setTimeout(() => {
        audio.play()
    }, 1000);
 
});

i = 0;
let p = document.querySelector("p");

dino.addEventListener("click", () => {
    console.log("Jump");

    // Add the jump class to trigger the animation
    dino.classList.add("jump");

    // Remove the jump class after a delay (1 second)
    setTimeout(() => {
        dino.classList.remove("jump");
        console.log("Again");
    }, 800);
    p.innerText = `${i++}`;
    const gameover=document.querySelector("#over");
dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

ox = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
oy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'));

offsetX = Math.abs(dx - ox);
offsetY = Math.abs(dy - oy);
console.log(offsetX, offsetY)
    // Check game over condition after each jump
    checkGameOver();
});


function checkGameOver() {
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    
    ox = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'));
    
    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX <= 250 && offsetY <= 40) {
       gameover .innerHTML = "Game Over - Reload to Play Again"
        dragon.classList.remove('rightmovement')
        audio.pause();
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            
        }, 1000);
    }
}


