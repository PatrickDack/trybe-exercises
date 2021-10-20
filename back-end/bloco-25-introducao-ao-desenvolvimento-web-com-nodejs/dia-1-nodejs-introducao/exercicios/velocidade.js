const { questionInt, questionFloat } = require('readline-sync');

const distance = questionInt('Qual a distância percorrida em KM? ');
const time = questionFloat('Qual o tempo gasto em horas? ');

const averageSpeed = (distance, time) => {
  const averageSpeedResult = (distance / time).toFixed(1);

  console.log(`A velocidade média é de ${averageSpeedResult}km por hora.`);
};

averageSpeed(distance, time);

module.exports = averageSpeed;
