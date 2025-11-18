let result = 0;
const jumpButton = document.getElementById('jumpButton');

const resultDisplay = document.getElementById('resultDisplay');
const saveResult = document.getElementById('saveResult')
jumpButton.addEventListener('click', () => {
    result++;
    resultDisplay.textContent = result;
});


saveButton.addEventListener('click', () => {
    saveResult.textContent += " " + result + " -"
       result = 0;
    resultDisplay.textContent = result;
});