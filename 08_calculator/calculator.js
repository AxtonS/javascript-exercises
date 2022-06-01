const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
	let b = 1;
  if (a === 0 || a === 1){
    return b;
  } else {
    for(i = a; i >= 1; i--){
      b *= i;
    }
    return b
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
