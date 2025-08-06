// Part 1: Mastering JavaScript Basics
function processInput() {
    const input = document.getElementById('inputField').value;
    const output = document.getElementById('output');

    if (input) {
        output.textContent = `You entered: ${input}`;
    } else {
        output.textContent = 'Please enter something!';
    }
}

// Part 2: JavaScript Functions
function calculateTotal() {
    const numbers = [1, 2, 3, 4, 5];
    const total = numbers.reduce((sum, num) => sum + num, 0);
    document.getElementById('functionOutput').textContent = `Total: ${total}`;
}

function formatString() {
    const str = "hello world";
    const formattedStr = str.toUpperCase();
    document.getElementById('functionOutput').textContent = `Formatted String: ${formattedStr}`;
}

// Part 3: JavaScript Loops
function iterateArray() {
    const fruits = ['Apple', 'Banana', 'Cherry'];
    let output = 'Fruits: ';
    fruits.forEach(fruit => {
        output += `${fruit} `;
    });
    document.getElementById('loopOutput').textContent = output;
}

function countdown() {
    let count = 5;
    const interval = setInterval(() => {
        document.getElementById('loopOutput').textContent = `Countdown: ${count}`;
        count--;
        if (count < 0) {
            clearInterval(interval);
            document.getElementById('loopOutput').textContent = 'Countdown finished!';
        }
    }, 1000);
}

// Part 4: Mastering the DOM with JavaScript
function changeText() {
    const domOutput = document.getElementById('domOutput');
    domOutput.textContent = 'The text has been changed!';
}

function toggleClass() {
    const domOutput = document.getElementById('domOutput');
    domOutput.classList.toggle('highlight');
}

function createElement() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new paragraph!';
    document.body.appendChild(newElement);
}
