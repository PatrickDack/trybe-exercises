const myRemoveWithoutCopy = require('../source/myRemoveWithoutCopy');
const arrTest = [1, 2, 3, 4];

describe('testa a função myRemoveWithoutCopy', () => {
  test('teste padrão da função', () => {
    expect(myRemoveWithoutCopy(arrTest, 3)).toEqual(arrTest);
    expect(myRemoveWithoutCopy(arrTest, 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemoveWithoutCopy(arrTest, 5)).toEqual(arrTest);
  });
  test('verifica se o array passado por parâmetro sofreu alterações', () => {
    expect(myRemoveWithoutCopy(arrTest, 3).length).not.toEqual(4);
  });
});