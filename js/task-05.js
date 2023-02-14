const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', event => {
    if (event.target.value === '') {
        outputText.textContent = 'Anonymous'
    } else {
        outputText.textContent = event.target.value;
    }
})