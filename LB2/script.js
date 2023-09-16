// Получаем ссылки на кнопку и экран анимации
const button1 = document.getElementById("button1");
const animationScreen = document.getElementById("animation-screen");

// Массив с классами для форм (круг, квадрат, ромб)
const shapes = ["circle", "square", "diamond"];
let currentIndex = 0; // Индекс текущей формы

// Обработчик события для кнопки 1
button1.addEventListener("click", () => {
    // Увеличиваем индекс текущей формы и переходим к следующей форме
    currentIndex = (currentIndex + 1) % shapes.length;

    // Меняем класс текущей формы
    animationScreen.className = `shape ${shapes[currentIndex]}`;
});
