let lastText = document.querySelector(".last-text");
let newText = document.querySelector(".new-text");
let title = document.querySelector(".title");
let title2 = document.querySelector(".title2");

let correctSound = new Audio("audio/2.wav");
let incorrectSound = new Audio("audio/1.mp3");
let completeSound = new Audio("audio/6.mp3");

let matn = "Lorem ipsum dolor amet consectetur adipisicing.";
newText.textContent = matn;
let score = 0;
let score2 = 0;
title.textContent = "0";
title2.textContent = "0";

window.addEventListener("keypress", (e) => {
  if (matn[0] === e.key) {
    lastText.textContent += matn[0];
    matn = matn.slice(1);
    newText.textContent = matn;
    score++
    title.textContent = `${score}`;
    correctSound.currentTime = 0;
    correctSound.play();
    if (!matn) {
      completeSound.currentTime = 0;
      completeSound.play();
    }
    
    } 
    else if(e.key){
        score2++
        title2.textContent = `${score2}`;
        
        incorrectSound.currentTime = 0;
        incorrectSound.play(); 

    }
     else {
    incorrectSound.currentTime = 0;
    incorrectSound.play();
  }
});
