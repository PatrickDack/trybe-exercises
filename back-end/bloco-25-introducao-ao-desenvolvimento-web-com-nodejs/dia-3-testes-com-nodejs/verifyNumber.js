const verifyNumber = (n) => {
  if (typeof n !== 'number') return 'Insira apenas números inteiros.'

  if (n > 0) {
    return 'positivo';
  } else if (n < 0) {
    return 'negativo';
  } else {
    return 'nulo'
  };
};

module.exports = verifyNumber;
