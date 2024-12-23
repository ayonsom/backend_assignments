const crypto = require('crypto');

function generateRandomDecimalNumber(length) {
    // console.log(`from random_num.js`);   
    if (!length || length <= 0) {
        console.error('\nProvide a valid length for random number generation, Ex:- node calculator.js random 10');
        return '';
    }

    let randomNumber = '';
    while (randomNumber.length < length) {
        const randomBytes = crypto.randomBytes(1);
        const randomDigit = randomBytes[0] % 10;
        randomNumber += randomDigit;
    }
    return randomNumber;
}

module.exports = {generateRandomDecimalNumber};