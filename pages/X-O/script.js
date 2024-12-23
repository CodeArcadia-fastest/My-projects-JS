let btn = true
let natija = []
let winner = document.querySelector(".winner")
let dis = document.querySelector(".game-display")
document.querySelectorAll(".terr").forEach((item, num) => {
    item.addEventListener('click', () => {
        if (item.textContent == '') {
            if (btn) {
                item.textContent = 'X'
                natija[num] = 'X'
                btn = false
            }

            else {
                item.textContent = "O"
                natija[num] = 'O'
                btn = true
            }
            hisoblash();
        }

    })
    window.addEventListener('keypress', (e) => {
        let k = e.key
        if (k == "Enter") {
            item.textContent = ""
            winner.style.display = 'none'
            dis.style.filter = 'blur(0px)'
        }
    })

})

function hisoblash() {
   
    if (natija[0] + natija[1] + natija[2] == 'XXX' ||
        natija[3] + natija[4] + natija[5] == 'XXX' ||
        natija[6] + natija[7] + natija[8] == 'XXX' ||
        natija[0] + natija[3] + natija[6] == 'XXX' ||
        natija[1] + natija[4] + natija[7] == 'XXX' ||
        natija[2] + natija[5] + natija[8] == 'XXX' ||
        natija[0] + natija[4] + natija[8] == 'XXX' ||
        natija[2] + natija[4] + natija[6] == 'XXX'
    ) {
        winner.style.display = 'block'
        winner.textContent = "X WINS"
        dis.style.filter = 'blur(8px)'
    }
    if (
        natija[0] + natija[1] + natija[2] == 'OOO' ||
        natija[3] + natija[4] + natija[5] == 'OOO' ||
        natija[6] + natija[7] + natija[8] == 'OOO' ||
        natija[0] + natija[3] + natija[6] == 'OOO' ||
        natija[1] + natija[4] + natija[7] == 'OOO' ||
        natija[2] + natija[5] + natija[8] == 'OOO' ||
        natija[0] + natija[4] + natija[8] == 'OOO' ||
        natija[2] + natija[4] + natija[6] == 'OOO'
    ) {
        winner.style.display = 'block'
        winner.textContent = "O WINS"
        dis.style.filter = 'blur(8px)'
    }
}

