// Sélection des éléments du DOM
const displayButton = document.querySelector('.display');
const clearButton = document.querySelector('.clear');
const backButton = document.querySelector('.back');
const button0 = document.querySelector('.button-0');
const button1 = document.querySelector('.button-1');
const button2 = document.querySelector('.button-2');
const button3 = document.querySelector('.button-3');
const button4 = document.querySelector('.button-4');
const button5 = document.querySelector('.button-5');
const button6 = document.querySelector('.button-6');
const button7 = document.querySelector('.button-7');
const button8 = document.querySelector('.button-8');
const button9 = document.querySelector('.button-9');
const additionButton = document.querySelector('.addition');
const soustractionButton = document.querySelector('.soustraction');
const multiplicationButton = document.querySelector('.multiplication');
const divisionButton = document.querySelector('.division');
const totalButton = document.querySelector('.total');

// Initialisation du tableau
let counter = [];
let stored = null;
let currentOperator = null;

// Fonction pour effectuer le calcul
function innercalculator() {
    const currentNumber = parseFloat(counter.join(''));

    if (stored !== null) {
        switch (currentOperator) {
            case '+':
                stored += currentNumber;
                break;
            case '-':
                stored -= currentNumber;
                break;
            case '*':
                stored *= currentNumber;
                break;
            case '/':
                stored /= currentNumber;
                break;
        }
    } else {
        stored = currentNumber;
    }
}

// Fonction pour mettre à jour l'affichage
function updateDisplay() {
    const lastElement = counter[counter.length - 1];

    if (lastElement === '+' || lastElement === '-' || lastElement === '*' || lastElement === '/') {
        displayButton.innerHTML = stored;
    } else {
        displayButton.innerHTML = counter.join('');
    }
}

// Ajouter des éléments au tableau et mettre à jour l'affichage
button0.addEventListener('click', function() {
    counter.push(0);
    updateDisplay();
});

button1.addEventListener('click', function() {
    counter.push(1);
    updateDisplay();
});

button2.addEventListener('click', function() {
    counter.push(2);
    updateDisplay();
});

button3.addEventListener('click', function() {
    counter.push(3);
    updateDisplay();
});

button4.addEventListener('click', function() {
    counter.push(4);
    updateDisplay();
});

button5.addEventListener('click', function() {
    counter.push(5);
    updateDisplay();
});

button6.addEventListener('click', function() {
    counter.push(6);
    updateDisplay();
});

button7.addEventListener('click', function() {
    counter.push(7);
    updateDisplay();
});

button8.addEventListener('click', function() {
    counter.push(8);
    updateDisplay();
});

button9.addEventListener('click', function() {
    counter.push(9);
    updateDisplay();
});

additionButton.addEventListener('click', function() {
    innercalculator();
    currentOperator = '+';
    counter = [];
    updateDisplay();
});

soustractionButton.addEventListener('click', function() {
    innercalculator();
    currentOperator = '-';
    counter = [];
    updateDisplay();
});

multiplicationButton.addEventListener('click', function() {
    innercalculator();
    currentOperator = '*';
    counter = [];
    updateDisplay();
});

divisionButton.addEventListener('click', function() {
    innercalculator();
    currentOperator = '/';
    counter = [];
    updateDisplay();
});

totalButton.addEventListener('click', function() {
    innercalculator();
    displayButton.innerHTML = stored;
    counter = [];
    stored = null;
    currentOperator = null;
});

// Supprimer le dernier élément du tableau et mettre à jour l'affichage
backButton.addEventListener('click', function() {
    counter.pop();
    updateDisplay();
});

// Réinitialiser le tableau et mettre à jour l'affichage
clearButton.addEventListener('click', function() {
    counter = [];
    stored = null;
    currentOperator = null;
    updateDisplay();
});
