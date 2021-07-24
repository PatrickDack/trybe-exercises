
const fatorial = num => {
  let fat = 1;
  for (let index = num; index >= 1; index -= 1) {
    fat *= index;
  }
  return fat;
}

console.log(fatorial(5));

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(6));

const longestWord = string => {
 const splited = string.split(' ');
 let longest = splited[0];
 for (let index = 1; index < splited.length; index += 1 ) {
  if (longest.length < splited[index].length) {
    longest = splited[index];
  }
 }
 return longest;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
