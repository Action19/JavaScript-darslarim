let numbers = [5,3,-7,2,-9,6,-12];
// every metodi
// let numbers = [5,3,-7,2,9,6];
// let isAllPositive = numbers.every(function(number){
//     return number >= 0;
// })

// console.log(isAllPositive);

// some metodi
// let atLeastOnePositive = numbers.some(function(number){
//     return number >= 0;
// })
// console.log(atLeastOnePositive);

// // filter metodi
// let filtered = numbers.filter(function(number){
//     return number <= 0;
// })

let filtered = numbers.filter(number => number <= 0);

console.log(filtered);
