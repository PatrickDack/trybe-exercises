function repeatNumber (array) {

let count = 0;
let countCompare = 0;
let mostRepeat = 0;
for(let index in array){
    let numCompare = array[index];
    for (let index2 in array) {
        if(numCompare === array[index2]) {
            count += 1;
            }
        }
    if(count >= countCompare){
        countCompare = count;
        mostRepeat = index;
        count = 0;
    }
    
}
return array[mostRepeat];
}

let array = [2, 3, 2, 5, 8, 2, 3, 3, 3, 7, 8, 7, 8 , 9, 9, 9, 9 , 8, 8, 8];
console.log(repeatNumber(array));