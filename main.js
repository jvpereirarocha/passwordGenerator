const fs = require('fs');
const path = require('path');
const { generatePassword } = require('./charUtils.js');
const { formatDate } = require('./dateUtils.js');

const filePath = path.join(__dirname, 'psswd.txt');

const randomicPassword = generatePassword(5);
const formatedDate = formatDate(new Date());
const content = `Password ${randomicPassword} created at ${formatedDate} `;

fs.writeFile(filePath, content + "\n", { flag: 'a+' }, err => {
    if(err) {
        console.error(err);
        return;
    }

    return content;

})
