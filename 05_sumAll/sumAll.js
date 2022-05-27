const sumAll = function (numOne, numTwo) {
    let sum = 0;
    if (((numOne || numTwo) >= 0) && (typeof(numOne) && (typeof(numTwo) === 'number'))) {
        if (numOne > numTwo) {
            for (i = numOne; i >= numTwo; i--) {
                sum += i;
            }
        }
        if (numOne < numTwo) {
            for (i = numOne; i <= numTwo; i++) {
                sum += i;
            }
        }
        return sum;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
