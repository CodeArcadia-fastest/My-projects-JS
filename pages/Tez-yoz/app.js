let letter = document.querySelector('.letter-number');
let main = document.querySelector('.main-display');
let score = document.querySelector('.score');
let viver = document.querySelector('.viver');
let matn = 'ABCDEFGFAGGASJDJAS'; // Все буквы
let k = 0; // Счётчик правильных ответов
let audio1 = new Audio('3.mp3');
let audio2 = new Audio('6.mp3');
let d = matn.length; // Количество оставшихся букв
let intervalId;

// Функция обновления оставшихся букв
function updateRemainingLetters() {
    letter.textContent = `Qolgan harflar: ${d}ta`;
    if (d === 0) {
        letter.textContent = `Qolgan harflar: 0ta`; // Явно указываем, что букв нет
    }
}

// Удаление всех букв, которые упали
function clearAllFallingLetters() {
    document.querySelectorAll('.main-display span').forEach(item => item.remove());
}

// Запуск интервала для падения букв
function startLetterDrop() {
    intervalId = setInterval(() => {
        if (matn.length > 0) {
            updateRemainingLetters();
            let span = document.createElement('span');
            span.textContent = matn[0];
            matn = matn.slice(1); // Убираем первую букву
            d -= 1;
            let rand = Math.floor(Math.random() * main.offsetWidth);
            span.style.transform = `translateX(${rand}px)`;
            main.appendChild(span);

            // Удаляем букву, если она упала
            span.addEventListener('animationend', () => {
                if (span.style.display !== 'none') {
                    span.remove();
                }
            });

            // Если буквы закончились
            if (d === 0) {
                clearInterval(intervalId);
                intervalId = null;
                audio2.currentTime = 0;
                audio2.play();
                updateRemainingLetters();
            }
        }
    }, 500);
}

// Отслеживание нажатий клавиш
window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (!intervalId) {
            clearAllFallingLetters(); // Убираем старые буквы при повторном запуске
            startLetterDrop();
        }
    } else {
        document.querySelectorAll('.main-display span').forEach(item => {
            if (item.textContent === e.key) {
                item.textContent = '💥';
                k += 1;
                audio1.currentTime = 0;
                audio1.play();
                score.textContent = `To'g'ri: ${k} ta`;
                setTimeout(() => {
                    item.style.display = 'none';
                }, 100);
            }
        });

        // Показать нажатую клавишу в блоке .viver
        viver.textContent = ` ${e.key}`;
    }
});
