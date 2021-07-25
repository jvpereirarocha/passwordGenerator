const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'psswd.txt');

function charExists(sequence, char) {
    if (sequence.includes(char))
        return true;

    return false;
}

function generatedChar(characters) {
    return characters.charAt(Math.floor(Math.random() * characters.length));
}

function setCharacter(sequence, characters) {
    let char = generatedChar(characters);
    while (charExists(sequence, char)) {
        char = generatedChar(characters);
    }

    return char;
}

function formatDate(date) {
    const day = date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString();
    const month = date.getMonth() + 1 < 10 ? "0" + String(date.getMonth() + 1) : String(date.getMonth() + 1);
    const year = date.getFullYear().toString();

    return `${day}/${month}/${year}`;
}

function generatePassword(size=8) {
    const letters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%&*+~?';

    let result = '';

    for (let i = 0; i < size; i++) {
        result += setCharacter(result, letters);
        result += setCharacter(result, numbers);
        result += setCharacter(result, specialCharacters);
    }

    return result;

}

const randomicPassword = generatePassword(3);
const formatedDate = formatDate(new Date());
const content = `Password ${randomicPassword} created at ${formatedDate} `;

fs.writeFile(filePath, content + "\n", { flag: 'a+' }, err => {
    if(err) {
        console.error(err);
        return;
    }

    return content;

})
