let blue_scare = document.querySelector(".blue_scare")
let red_scare = document.querySelector(".red_scare")

let cdn = 0

document.querySelectorAll(".elements span").forEach(item => {
    item.addEventListener('click', () => {
        let user_photo = document.querySelector(".user_photo")
        let comp_photo = document.querySelector(".comp_photo")
        let rand = Math.floor(Math.random() * 3) + 1
        cdn ++
        if (item.textContent == "✋") {
            user_photo.src = 'qogoz1.jpg'
            if (rand == 1) {
                red_scare.textContent = cdn
                blue_scare.textContent = cdn
            }
            else if (rand == 2) {
                red_scare.textContent = cdn
            }
            else if (rand == 3) {
                blue_scare.textContent = cdn
            }
        }
        else if (item.textContent == "✌️") {
            user_photo.src = 'qaychi1.jpg'
            if (rand == 1) {

                blue_scare.textContent = cdn
            }
            else if (rand == 2) {
                blue_scare.textContent = cdn
                red_scare.textContent = cdn
            }
            else if (rand == 3) {
                red_scare.textContent = cdn
            }
        }
        else if (item.textContent == "✊") {
            user_photo.src = 'tosh1.jpg'
            if (rand == 1) {

                red_scare.textContent = cdn
            }
            else if (rand == 2) {
                blue_scare.textContent = cdn

            }
            else if (rand == 3) {
                red_scare.textContent = cdn
                blue_scare.textContent = cdn
            }
        }


        if (rand == 1) {
            comp_photo.src = 'qogoz2.jpg'
        }
        else if (rand == 2) {
            comp_photo.src = 'qaychi2.jpg'
        }
        else if (rand == 3) {
            comp_photo.src = 'tosh2.jpg'
        }


    })
})