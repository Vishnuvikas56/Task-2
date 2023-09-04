const blueButton = document.getElementById('blueButton');
const greenButton = document.getElementById('greenButton');
const textToChange = document.getElementById('textToChange');
blueButton.addEventListener('click', function() {
    textToChange.style.color = 'blue';
    blueButton.classList.add('clicked');
    setTimeout(() => {
        blueButton.classList.remove('clicked');
    }, 300);
});
greenButton.addEventListener('click', function() {
    textToChange.style.color = 'green';
    greenButton.classList.add('clicked');
    setTimeout(() => {
        greenButton.classList.remove('clicked');
    }, 300);
});
