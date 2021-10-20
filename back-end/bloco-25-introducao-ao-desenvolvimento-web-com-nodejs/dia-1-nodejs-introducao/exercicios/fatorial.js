const { questionInt } = require('readline-sync');

const number = questionInt('Digite um numero Inteiro para calcular seu Fatorial. ');

const fatorial = (number) => {
  if (number === 0) return console.log(`O fatorial de ${number} é 1.`);

  console.log('oi');
  let total = 1;
  for (let num = number; num > 0; num -= 1) {
    total *= num;
  };

  console.log(`O fatorial de ${number} é ${total}.`);
};

fatorial(number);

module.exports = fatorial;
