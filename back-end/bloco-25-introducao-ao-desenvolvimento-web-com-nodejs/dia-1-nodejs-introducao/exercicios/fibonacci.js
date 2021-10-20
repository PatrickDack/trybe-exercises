const { questionInt } = require('readline-sync');

const baseFib = [0, 1];

const number = questionInt('Digite o numero de termos da sequencia de Fibonacci que deseja.');

const fibonacci = (number = 2) => {
  if (number > 0) {
    for (let num = 2; num <= number; num += 1) {
      baseFib.push(baseFib[num - 1] + baseFib[num - 2]);
    }

    baseFib.shift();

    console.log(baseFib);
  }
  return console.log('Digite um número inteiro maior que zero.');
};

fibonacci(number);

module.exports = fibonacci;
