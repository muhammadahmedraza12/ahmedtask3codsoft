let view = document.getElementById('view');
buttons = document.querySelectorAll('button');
let viewValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            viewValue += buttonText;
            view.value = viewValue;
        }
        else if (buttonText == 'C') {
            viewValue = "";
            view.value = viewValue;
        }
        else if (buttonText == '=') {
            view.value = eval(viewValue);
        }
        else {
            viewValue += buttonText;
            view.value = viewValue;
        }

    })
}

