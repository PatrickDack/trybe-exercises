const verifyNumber = require('../verifyNumber');
const { expect } = require('chai');

describe('Input da função', () => {
  it('verifica se o input é do tipo number', () => {
    const output = verifyNumber('a');
    expect(output).to.be.equal('Insira apenas números inteiros.');
  });
});

describe('Output da função', () => {
  it('verifica se é uma string', () => {
    const output = verifyNumber();
    expect(typeof output).to.be.equal('string');
  });

  it('quando n > 0', () => {
    const output = verifyNumber(1);
    expect(output).to.be.equal('positivo');
  });

  it('quando n < 0', () => {
    const output = verifyNumber(-1);
    expect(output).to.be.equal('negativo');
  });

  it('quando n = 0', () => {
    const output = verifyNumber(0);
    expect(output).to.be.equal('nulo');
  });
});
