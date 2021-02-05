// function sum(){
//     let total = 0;
//     for (let value of arguments)
//         total +=value;
//         return total;
// }

// console.log(sum(1,2,3,4,5));

// function sum(...args){
//     return args.reduce((a,b) => a+b)
// }

// console.log(sum(1,2,3,4,5,6));


function sum(discount, ...prices){
    let total = prices.reduce((a,b) => a+b);
    return total *=(1-discount);
}

console.log(sum(0.1, 20, 30, 10, 40));