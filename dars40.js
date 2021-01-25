// let numbers = arrayFromRange(-5, 5);
// console.log(numbers);

// function arrayFromRange(min, max){
//     result = [];
//     if (min< max)
//     for (let i = min; i<=max; i++)
//         result.push(i);
//     return result;
// }
let numbers = [3,2,6,8,5,7];
console.log(includes(numbers, 9));
function includes(array, elementToFind){
    for (let i of  array)
    if (i === elementToFind) 
        return true; 

        return false;
}