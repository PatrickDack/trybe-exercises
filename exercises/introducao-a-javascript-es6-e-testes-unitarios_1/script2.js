// with template literals

let oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens = [`${oddsAndEvens[5]}, ${oddsAndEvens[1]}, ${oddsAndEvens[2]}, ${oddsAndEvens[4]}, ${oddsAndEvens[3]}, ${oddsAndEvens[0]}`];


console.log(oddsAndEvens);

// with sort()
let oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort((a, b) => a - b);
console.log(oddsAndEvens);