const add = function(numberOne, numberTwo) {
	return numberOne + numberTwo;
};

const subtract = function(numberOne, numberTwo) {
	return numberOne - numberTwo;
};
const sum = function(array) {
  return array.reduce((sumOfArray, currentItem) => sumOfArray + currentItem, 0)
};

const multiply = function(array) {
  return array.reduce((productOfArray, currentItem) => productOfArray * currentItem, 1)
};

const power = function(numberOne, numberTwo) {
  let power = 1;
	for(index = 0; index < numberTwo; index ++){power = numberOne * power}
  return power;
};

const factorial = function(number) {
  if (number === 0) return 1;
  factorialResult = 1
  for(index = number; index > 0; index --){
    factorialResult *= index; 
  }
  return factorialResult
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
