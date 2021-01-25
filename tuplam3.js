let numbers = [5,3,-7,2,-9,6,-12];
// let filtered = numbers.filter(number => number <= 0);
// let items = filtered.map(number => '<li>'+number+'</li>');
// let html = '<ul>' + items.join('') + '</ul>';
let items = numbers
                .filter(number => number <= 0)
                .map(number =>{
                    return {value: number}})
                .filter(obj => obj.value<-7);
console.log(items);
