const fs = require('fs');

let accumilator = 0;
let lineIndex = 0;

const items = fs.readFileSync('./input.txt').toString().replace(/\r\n/g, '\n').split('\n');

function executeItem(item) {
    const command = extractCommand(item);
    const operation = extractOperation(item);
    const value = extractValue(item);

    processLine(command, operation, value);
}

executeItem(items[0]);

function processLine(command, operator, value) {
    if (command !== 'nop') {
        doOperation(command, operator, value);
    } else {
        lineIndex++;
    }

    executeItem(items[lineIndex]);
}

function doOperation(command, operator, value) {
    if (command === 'acc') {
        if (operator === '+') {
            accumilator += +value;
        } else if (operator === '-') {
            accumilator -= +value;
        }
        lineIndex++;
    } else if (command === 'jmp') {
        if (operator === '+') {
            lineIndex += +value;
        } else if (operator === '-') {
            lineIndex -= +value;
        }
    }
}

function extractCommand(text) {
    return text.split(' ')[0];
}

function extractOperation(text) {
    return text.split(' ')[1].charAt(0)
}

function extractValue(text) {
    const newText = text.split(' ')[1];

    return newText.slice(1, newText.length)
}
