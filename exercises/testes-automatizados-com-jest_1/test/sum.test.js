const sum = require('../source/sum');

describe('Testa a função sum', () => {
  test('soma padrao', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  test('Testa se é lançado um erro quando a ou b diferente de Number', () => {
    expect(() => {sum(4, '5')}).toThrow();
  });
  test('testa se mensagem de erro é "parameters must be numbers"', () => {
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
  });
});