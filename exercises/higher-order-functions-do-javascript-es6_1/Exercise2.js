const prizeDraw = (num, func) => {
  if (num > 5 || typeof num === 'string' || num < 0) {
    return 'Insira apenas NUMEROS de 0 a 5.'
  }
  const drawn = Math.floor(Math.random() * 5);
  console.log(drawn);
  if (func(num, drawn)) {
    return 'Parabéns, você ganhou!';
  } else {
    return 'Tente novamente.';
  }
};

const resultCheck = (num, drawn) => {
  if (num === drawn) {
    return true;
  }
};

console.log(prizeDraw(3, resultCheck));