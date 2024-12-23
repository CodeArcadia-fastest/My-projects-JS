let question = document.querySelector(".question")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let data = [
    "CSS nima?",
    "JAvScriptda function qanday ochiladi?",
    "HTML nima?",
    "JavaScript nima?",
    "click nima",
    "Fron-end dasturlashda assosiy texnilogiyalar qaysi?",
    "REsposive dizayn nima?",
    "Freamework va kutubxona nima?",
    "API nima?",
    "Fron_end dasturchisi kim",
    "Background-color css da nima qiladi?",

]

document.querySelectorAll(".question-numbers").forEach(item => {
    item.addEventListener('click', () => {
        let rand = Math.trunc(Math.random() * 10)
        // data[n] = rand
        question.textContent = data[rand]
        // alert(data.length)
    })
    next.addEventListener('click', () => {
        let rand1= Math.trunc(Math.random() * 10)

        question.textContent = data[rand1]
    
    })
    prev.addEventListener('click', () => {
        let rand2 = Math.trunc(Math.random() * 10)

        question.textContent = data[rand2]
    
    })
})