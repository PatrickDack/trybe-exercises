const { questionInt } = require('readline-sync');

const distance = questionInt('Qual a distância percorrida em KM? ');
const time = questionInt('Qual o tempo gasto em horas? ');

const averageSpeed = (distance, time) => distance / time;

const averageSpeedResult = averageSpeed(distance, time);

console.log(`A velocidade média é de ${averageSpeedResult}km por hora.`);
