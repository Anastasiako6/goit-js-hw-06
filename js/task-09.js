function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// Напиши скрипт, який змінює кольори фону елемента <body> 
// через інлайн - стиль по кліку на button.change - color і 
// виводить значення кольору в span.color.

const bodyEl = document.querySelector('body');
const bgColBtn = document.querySelector('button.change-color');
const spanColEl = document.querySelector('span.color');

bgColBtn.addEventListener('click', (element) => {
  let color = getRandomHexColor(); 
  bodyEl.style.backgroundColor = color;
  
  spanColEl.textContent = color;
}
)