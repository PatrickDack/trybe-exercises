const math = require('../souce/math');

it('testa a função subtrair', () => {
  math.subtrair = jest.fn().mockReturnValue(5);
  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair(10, 5)).toBe(5);
});

it('testa a função multtiplicar', () => {
  math.multiplicar = jest.fn().mockReturnValue(10);
  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar(2, 5)).toBe(10);
});