let numbers = [3,2,6,8,5,7];
console.log(move(numbers, 0, 10));
function move(array , index, offset){
    let position = index + offset
    if (position < 0 || position >=  array.length) {
        console.error('Kiritilgan effset hato');
        return;
    }    
    let result = [... array];
    let element = result.splice(index, 1)[0];
    result.splice(position, 0, element);
    return result;

}