const fs = require('fs');
const writeFile = require('../writeFile');
const sinon = require('sinon');
const { expect } = require('chai');

describe('quando a escrita é concluida com sucesso', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  it('testa a se o output é a uma string', () => {
    const output = writeFile('arquivo.txt', 'Meu texto');
    expect(output).to.be.a('string');
  });

  it('testa a se o output é a string "ok"', () => {
    const output = writeFile('arquivo.txt', 'Meu texto');
    expect(output).to.be.equal('ok');
  });
});
