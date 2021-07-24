let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let minorValue = 99 ** 99;
for (let i of numbers) {
    let temp = i
    if(minorValue >= temp){
        minorValue = temp;
    }  
}
console.log(minorValue);  