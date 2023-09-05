const buttons = document.getElementsByClassName('color-button');
const textToChange = document.getElementById('textToChange');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        if (buttons[i].classList.contains('green')) {
            textToChange.style.color = 'green';
            buttons[i].classList.add('clicked');
            setTimeout(() => {
                buttons[i].classList.remove('clicked');
            }, 300);
        } else {
            textToChange.style.color = 'blue';
            buttons[i].classList.add('clicked');
            setTimeout(() => {
                buttons[i].classList.remove('clicked');
            }, 300);
        }
    });
}
