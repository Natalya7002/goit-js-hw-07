// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.
// Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі, в той час як колір фону на <body> буде у форматі rgb. Це нормально й не потребує якихось правок.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.addEventListener("DOMContentLoaded", function () {
  //  Посилання на елементи DOM
  const bodyElement = document.body;
  const colorSpan = document.querySelector(".color");
  const changeColorButton = document.querySelector(".change-color");

  // Слухач клік
  changeColorButton.addEventListener("click", function () {
    // Генерація нового кольору
    const newColor = getRandomHexColor();

    // Змінюємо колір фону елемента body
    bodyElement.style.backgroundColor = newColor;
  });
});
