const repeatString = function(word, num) {
    let phrase = '';
    if (num < 0) {
        return 'ERROR';
    }
    for (i = num; i > 0; i--) {
        phrase += `${word}`;
    } return phrase;
};

// Do not edit below this line
module.exports = repeatString;
