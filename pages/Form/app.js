let eye = document.querySelector(".eye")
let password = document.querySelector(".parol")
let login = document.querySelector(".login")



let kuz = true
eye.addEventListener("click", () => {
    if (kuz) {
        eye.src = "eye.png"
        kuz = false
        password.type = `text`
    }

    else {
        eye.src = "eye-x.png"
        kuz = true
        password.type = `password`
    }
})

let user = document.querySelector("#user")

function run() {
    if (password.value == "mersedes" && login.value == "mersedes") {
        alert("TOgri")
    }else {
        alert("Error")
    }
}
