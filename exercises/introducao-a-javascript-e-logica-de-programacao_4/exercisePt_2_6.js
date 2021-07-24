function somaDeN (n) {
    let total = 0;
    for (let index = 0; index <= n; index += 1) {
        total += index;     
    }
    return total;  
}

let n = 100;
console.log(somaDeN(n));