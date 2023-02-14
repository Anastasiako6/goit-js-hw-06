// Напиши скрипт, який реагує на зміну значення
// input#font - size - control(подія input) і змінює
// інлайн - стиль span#text, оновлюючи властивість
// font - size.В результаті, перетягуючи повзунок,
// буде змінюватися розмір тексту.

const sizeEl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

sizeEl.addEventListener('input', e => {
textSpan.style.fontSize = `${e.target.value}px`
})