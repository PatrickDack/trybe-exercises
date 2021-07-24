let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let biggerValue = 0;
for (let i of numbers) {
    let temp = i
    if(biggerValue <= temp){
        biggerValue = temp;
    }  
}
console.log(biggerValue);  

