let numbers = [6,4,3,1,7,9];
let maxNumber = getMaxNumber(numbers);
console.log(maxNumber);
function getMaxNumber(array){
    if (array.length === 0) return undefined;
    max = array.reduce((a, b) => (b > a) ? b : a);
    return max;
}
// let max = array[0];
// for(let i = 1; i<array.length; i++) if(max<array[i]) max = array[i];
// return max
