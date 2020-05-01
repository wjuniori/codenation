"use strict";

const arrayFibonacci = [];
const limit = 350;

const fibonacci = () => {
  if (!arrayFibonacci.length) {
    let value = 0;

    while (value <= limit) {
      arrayFibonacci.push(value);

      if (value === 0) {
        value += 1;
      } else {
        value += arrayFibonacci[arrayFibonacci.length - 2];
      }
    }
    arrayFibonacci.push(value);
  }
  return arrayFibonacci;
};

const isFibonnaci = (num) => {
  return arrayFibonacci.indexOf(num) !== -1;
};

// Para Teste Local:
// console.log(fibonacci());
// console.log(fibonacci());
// console.log(isFibonnaci(5));
// console.log(isFibonnaci(4));

module.exports = {
  fibonacci,
  isFibonnaci,
};
