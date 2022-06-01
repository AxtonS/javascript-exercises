const fibonacci = function(n) {
    if (n < 0) return 'OOPS';
    if (n === 0) return 0;
    let a = 0;
    let b = 1;
    for (let i = 1; i <n; i++) {
        const c = b;
        b = a + b;
        a = c;
    } return b;
};

// Do not edit below this line
module.exports = fibonacci;
