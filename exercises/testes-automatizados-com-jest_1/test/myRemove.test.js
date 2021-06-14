const myRemove = require('../source/myRemove');
const arrTest = [1, 2, 3, 4];

describe('testa a função myRemove', () => {
  test('teste padrao', () => {
    expect(myRemove(arrTest, 3)).toEqual([1, 2, 4]);
    expect(myRemove(arrTest, 3)).not.toEqual(arrTest);
    expect(myRemove(arrTest, 5)).toEqual(arrTest);
  });
  test('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    expect(myRemove(arrTest, 3).length).not.toBe(arrTest.length);
  });
});