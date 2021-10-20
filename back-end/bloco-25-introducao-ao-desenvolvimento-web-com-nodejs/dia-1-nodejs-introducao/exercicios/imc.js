const { questionFloat } = require('readline-sync');

const weight = questionFloat('Qual o seu Peso? ');
const height = questionFloat('Qual a sua Altura em METROS? ');

const imcCalc = (weight, height) => {
  const imc = weight / (height ** 2);
  return imc;
};

const imcResult = imcCalc(weight, height).toFixed(1);

console.log(`O seu imc é de ${imcResult}`);

if (imcResult < 18.5) {
  console.log('Abaixo do peso (magreza)');
} else if (imcResult <= 24.9) {
  console.log('Peso Normal');
} else if (imcResult <= 29.9) {
  console.log('Acima do peso (sobrepeso)');
} else if (imcResult <= 34.9) {
  console.log('Obesidade grau I ');
} else if (imcResult <= 39.9) {
  console.log('Obesidade grau II');
} else {
  console.log('Obesidade grau III e IV');
};
