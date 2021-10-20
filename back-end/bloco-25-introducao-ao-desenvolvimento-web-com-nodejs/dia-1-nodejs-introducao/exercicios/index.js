const { question, keyInSelect } = require('readline-sync');

const scripts = ['imc', 'sorteio', 'velocidade', 'fatorial', 'fibonacci'];

const response = keyInSelect(scripts, 'Qual script deve ser executado? ');

const chosen = require(`./${scripts[response]}`);
