const main = (num1, num2, num3) => {
    return new Promise((resolve, reject) => {
      if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
        reject('Informe apenas numeros.');
      }

      const result = (num2 + num1) * num3;

      if (result < 50) reject('Valor muito baixo.');

      return resolve(result);
    });
};

main(21, 22, 30)
  .then(resolve => console.log(resolve))
  .catch(reject => console.log(reject));
