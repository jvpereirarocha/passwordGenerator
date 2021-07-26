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

module.exports = {
  generatePassword
}
