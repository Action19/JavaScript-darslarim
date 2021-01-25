let numbers = [5,3,7,2,9,6];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

let courses = [
    {id: 1, title: 'Redux'},
    {id: 2, title: 'Node.js'},
    {id: 3, title: 'aSP.Net Core'},
]

courses.sort(function(first, second){
    let titleFirst = first.title.toLowerCase()
    let titleSecond = second.title.toLowerCase()
    if (titleFirst > titleSecond) return 1;
    if (titleFirst < titleSecond) return -1;
    return 0; 
})

console.log(courses);