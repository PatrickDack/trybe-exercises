const { questionInt, question, keyInSelect } = require('readline-sync');

const  prizeDraw = () => {
  const chosenNumber = questionInt('Escolha um numero entre 0 e 10. ');

  const randomNumber = () => Math.round(Math.random() * 10);

  const drawnNumber = randomNumber();

  if (chosenNumber === drawnNumber) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${drawnNumber}`);
  };

  const playAgain = keyInSelect(['Sim', 'Não'],'Deseja jogar novamente? ');

  if(!playAgain) return prizeDraw();
};

prizeDraw();

module.exports = prizeDraw;
