
let qoshish = 0
function run(e) {
    let number = document.querySelector(".number")

    let rand = Math.floor(Math.random() * 9) + 1

    if (!isNaN(e.key)) {
        number.textContent = e.key
    }

    else if (e.key == 'Enter') {
        qoshish ++
        let son = number.textContent
        if (son == rand) {
            let j = document.querySelector(".javob")
            let h1 = document.createElement("h1")
            h1.textContent = (`SIZ TOPDINGIZ✅ ${qoshish} urinishda`)
            j.appendChild(h1)
            h1.style.backgroundColor = `green`
        }

        else {
            let j = document.querySelector(".javob")
            let h1 = document.createElement("h1")
            h1.textContent = ("SIZ TOPA OLMADINGIZ❌")
            h1.style.backgroundColor = `red`
            j.appendChild(h1)
        }
    }


}



window.addEventListener('keydown', run)