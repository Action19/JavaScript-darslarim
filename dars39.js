let numbers = [5,2,3,7,4];
// let sum = 0;
// for (let number of numbers)
// sum += number;

let sum = numbers.reduce((accumlator, currentValue) => accumlator + currentValue, 0);
console.log(sum);