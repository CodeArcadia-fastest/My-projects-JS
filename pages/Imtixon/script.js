let rgb1 = document.querySelector("#box1")
let rgb2 = document.querySelector("#box2")
let rgb3 = document.querySelector("#box3")
let rgb4 = document.querySelector("#box4")
let rgb5 = document.querySelector("#box5")
let rgb6 = document.querySelector("#box6")
let text1 = document.querySelector("#rgb1")
let text2 = document.querySelector("#rgb2")
let text3 = document.querySelector("#rgb3")
let text4 = document.querySelector("#rgb4")
let text5 = document.querySelector("#rgb5")
let text6 = document.querySelector("#rgb6")

let btn = 0
let rang = 0
rgb1.addEventListener('click', ()=>{
        btn += 5
        rgb1.style.backgroundColor = `rgb(0, 0 , ${btn})`
       text1.textContent =  "rbg(0 ," +rang + "," + btn + ")"
    if (btn == 255) {
        btn = 0
        rang += 5
        rgb1.style.backgroundColor = `rgb(0, ${rang}, ${btn})`
         text1.textContent =  "rbg(0 ," +rang + "," + btn + ")"
    }
   
})

let btn2 = 0
let rang2 = 0
rgb2.addEventListener('click', ()=>{
        btn2 += 5
        rgb2.style.backgroundColor = `rgb(0, ${btn2} , 0 )`
        text2.textContent =  "rbg(" +rang2 + "," + btn2 + ", 0 )"
    if (btn2 == 255) {
        btn2 = 0
        rang2 += 5
         rgb2.style.backgroundColor = `rgb(${rang2}, ${btn2} , 0 )`
    }
})
let btn3 = 0
let rang3 = 0
rgb3.addEventListener('click', ()=>{
        btn3 += 5
        rgb3.style.backgroundColor = `rgb(${btn3}, 0 , 0 )`
        text3.textContent =  "rbg(" +btn3 + ", 0 , " +rang3 + ")"
    if (btn3 == 255) {
        btn3 = 0
        rang3 += 5
         rgb3.style.backgroundColor = `rgb(${btn3}, 0 ,  ${rang3} )`
    }
})


let btn4 = 0
let btn4pro = 0
let rang4 = 0
rgb4.addEventListener('click', ()=>{
        btn4 += 5
        btn4pro += 5
        rgb4.style.backgroundColor = `rgb(${btn4}, ${rang4} , ${btn4pro})`
        text4.textContent =  "rbg(" +btn4 +","+ rang4 +","+btn4pro + ")"
    if (btn4  == 255 || btn4pro == 255) {
        btn4 = 0
        btn4pro = 0
        rang4 += 5
         rgb4.style.backgroundColor =`rgb(${btn4}, ${rang4} , ${btn4pro})`
    }
})


let btn5 = 0
let btn5pro = 0
let rang5 = 0
rgb5.addEventListener('click', ()=>{
        btn5 += 5
        btn5pro += 5
        rgb5.style.backgroundColor = `rgb(${rang5}, ${btn5} , ${btn5pro})`
        text5.textContent =  "rbg(" +rang5 +","+ btn5 +","+btn5pro + ")"
    if (btn5  == 255 || btn5pro == 255) {
        btn5 = 0
        btn5pro = 0
        rang5 += 5
         rgb5.style.backgroundColor =`rgb(${rang5}, ${rang5} , ${btn5pro})`
    }
})
let btn6 = 0
let btn6pro = 0
let btn6max = 0
rgb6.addEventListener('click', ()=>{
        btn6 += 5
        btn6pro += 5
        btn6max += 5
        rgb6.style.backgroundColor = `rgb(${btn6}, ${btn6pro} , ${btn6max})`
        text6.textContent =  "rbg(" +btn6 +","+ btn6pro +","+btn6max + ")"
    if (btn6  == 255 || btn6pro == 255) {
        btn6 = 0
        btn6pro = 0
        btn6max = 0
         rgb6.style.backgroundColor =`rgb(${rang6}, ${rang6pro} , ${btn6max})`
    }
})
