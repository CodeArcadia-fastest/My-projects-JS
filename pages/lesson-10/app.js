let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

let slides = document.querySelector(".slides");
let box = document.querySelector(".box");

let photo1 = document.querySelector(".photo11");
let photo2 = document.querySelector(".photo22");
let photo3 = document.querySelector(".photo33");
let photo4 = document.querySelector(".photo44");

let cnt = 0;

next.addEventListener('click', () => {
    cnt += 25;

    if (cnt < 25) {
        photo2.style.transform = "scale(1)";
        photo1.style.transform = "scale(1.3)";
    } else if (cnt < 50) {
        photo3.style.transform = "scale(1)";
        photo2.style.transform = "scale(1.3)";
    } else if (cnt < 75) {
        photo4.style.transform = "scale(1)";
        photo3.style.transform = "scale(1.3)";
    }

    if (cnt >= 75) {
        cnt = 0;
        photo1.style.transform = "scale(1.3)";
        photo4.style.transform = "scale(1)";
    }

    slides.style.transform = `translateX(-${cnt}%)`;
    box.style.transform = `translateX(-${cnt}%)`;
});

prev.addEventListener('click', () => {
    cnt -= 25;

    if (cnt < 0) {
        cnt = 75;
        photo4.style.transform = "scale(1.3)";
        photo1.style.transform = "scale(1)";
    } else if (cnt == 50) {
        photo3.style.transform = "scale(1.3)";
        photo4.style.transform = "scale(1)";
    } else if (cnt == 25) {
        photo2.style.transform = "scale(1.3)";
        photo3.style.transform = "scale(1)";
    }

    slides.style.transform = `translateX(-${cnt}%)`;
    box.style.transform = `translateX(-${cnt}%)`;
}
)