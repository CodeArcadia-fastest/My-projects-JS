let words = document.querySelector(".words");
let game_display = document.querySelector(".game-display");

let word_json = {
  VATAN: ["V", "A", "T", "A", "N"],
  TIRIK: ["T", "I", "R", "I", "K"],
  ONA: ["O", "N", "A"],
  KITOB: ["K", "I", "T", "O", "B"],
  DARAXT: ["D", "A", "R", "A", "X", "T"],
  BOLALAR: ["B", "O", "L", "A", "L", "A", "R"],
  SHOH: ["S", "H", "O", "H"],
  XALQ: ["X", "A", "L", "Q"],
  HAYOT: ["H", "A", "Y", "O", "T"],
  XAZINA: ["X", "A", "Z", "I", "N", "A"],
  OSMON: ["O", "S", "M", "O", "N"],
  OLIM: ["O", "L", "I", "M"],
  DUNYO: ["D", "U", "N", "Y", "O"],
  USTOZ: ["U", "S", "T", "O", "Z"],
  OTA: ["O", "T", "A"],
  QAHRAMON: ["Q", "A", "H", "R", "A", "M", "O", "N"],
};


let suzlar = Object.keys(word_json);
for (let i = 0; i < suzlar.length; i++) {
  let span = document.createElement("span");
  span.classList.add("word");
  span.textContent = suzlar[i];
  span.setAttribute("data-word", suzlar[i]);
  words.appendChild(span);
}


let allLetter = [];
for (let i = 0; i < suzlar.length; i++) {
  allLetter.push(...word_json[suzlar[i]]);
}


for (let i = 0; i < 80; i++) {
  let rand1 = Math.floor(Math.random() * allLetter.length);
  let rand2 = Math.floor(Math.random() * allLetter.length);

  let t = allLetter[rand1];
  allLetter[rand1] = allLetter[rand2];
  allLetter[rand2] = t;
}


let clickedLetters = [];
let clickedSpans = [];

for (let i = 0; i < allLetter.length; i++) {
  let span = document.createElement("span");
  span.classList.add("letter");
  span.textContent = allLetter[i];
  game_display.appendChild(span);

 
  span.addEventListener("click", () => {
    if (span.classList.contains("locked")) {
      
      return;
    }

    span.style.backgroundColor = "aqua";
    clickedLetters.push(span.textContent);
    clickedSpans.push(span); 

  
    suzlar.forEach((word) => {
      let wordArray = word_json[word];
      if (
        clickedLetters.length === wordArray.length &&
        clickedLetters.join("") === wordArray.join("")
      ) {
        
        clickedSpans.forEach((clickedSpan) => {
          clickedSpan.textContent = "";
          clickedSpan.classList.add("locked");
        });

       
        let topWord = document.querySelector(`[data-word="${word}"]`);
        if (topWord) {
          topWord.style.color = "aqua"; 
        }

       
        clickedLetters = [];
        clickedSpans = [];
      }
    });
  });
}
