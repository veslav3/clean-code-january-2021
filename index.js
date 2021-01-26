const fs = require('fs');
const readline = require('readline');

let accumilator = 0;
let lineIndex = 0;
let uniqueItems = new Set();

const readInterface = readline.createInterface({
    input: fs.createReadStream('./input.txt'),
    output: process.stdout,
    console: false
});

readInterface.on('line', function(line) {
    console.log(extractCommand(line))
    console.log(extractOperation(line));
    console.log(extractValue(line));
});

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
