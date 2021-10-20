const { question, keyInSelect } = require('readline-sync');

const scripts = ['imc', 'sorteio', 'velocidade'];

const response = keyInSelect(scripts, 'Qual script deve ser executado? ');

const chosen = require(`./${scripts[response]}`);
// const imc = require('./imc');
// const prize = require('./sorteio');
// const velocidade = require('./velocidade');
