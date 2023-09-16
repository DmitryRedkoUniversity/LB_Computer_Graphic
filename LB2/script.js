// Получаем ссылки на кнопки и экран анимации
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const animationScreen = document.getElementById("animation-screen");

// Массив с классами для форм (круг, квадрат, ромб)
const shapes = ["circle", "square", "diamond"];
let currentIndex = 0; // Индекс текущей формы
let isMoving = false; // Флаг для отслеживания движения
let isMasked = false; // Флаг для отслеживания использования маски

// Обработчик события для кнопки 1 (смена формы)
button1.addEventListener("click", () => {
    // Увеличиваем индекс текущей формы и переходим к следующей форме
    currentIndex = (currentIndex + 1) % shapes.length;

    // Меняем класс текущей формы
    animationScreen.className = `shape ${shapes[currentIndex]}`;

    // Останавливаем движение при смене формы
    stopMoving();
});

// Обработчик события для кнопки 2 (начало/остановка движения)
button2.addEventListener("click", () => {
    // Переключаем состояние движения
    if (!isMoving) {
        startMoving();
    } else {
        stopMoving();
    }
});

// Обработчик события для кнопки 3 (использование маски)
button3.addEventListener("click", () => {
    // Переключаем состояние использования маски
    if (!isMasked) {
        applyMask();
    } else {
        removeMask();
    }
});

// Функция для начала движения фигуры по траектории
function startMoving() {
    if (!isMoving) {
        isMoving = true;
        animationScreen.style.animation = "move 5s linear infinite"; // Создаем анимацию движения
    }
}

// Функция для остановки движения фигуры
function stopMoving() {
    if (isMoving) {
        isMoving = false;
        animationScreen.style.animation = "none"; // Останавливаем анимацию
    }
}

// Функция для применения маски к фигуре
function applyMask() {
    if (!isMasked) {
        isMasked = true;
        animationScreen.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)"; // Пример маски
    }
}

// Функция для удаления маски с фигуры
function removeMask() {
    if (isMasked) {
        isMasked = false;
        animationScreen.style.clipPath = "none"; // Убираем маску
    }
}
