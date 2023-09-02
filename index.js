let Stringg = '';
var display = document.getElementById('display');

function screendisplay(value) {
    Stringg += value;
    display.value = Stringg;
}

function calculate() {
    try {
        Stringg = eval(Stringg).toString();
        display.value = Stringg;
    } catch (error) {
        Stringg = '';
        display.value = 'Error';
    }
}

function clearDisplay() {
    Stringg = '';
    display.value = '';
}
