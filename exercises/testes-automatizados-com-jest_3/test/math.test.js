const math = require('../souce/math');
jest.mock('../souce/math');

beforeEach(() => {
  math.subtrair.mockRestore();
});

describe('subtrair', () => {
  it('testa a função subtrair', () => {
    math.subtrair = jest.fn().mockReturnValue(5);
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair(10, 5)).toBe(5);
  });
});

it('testa a função multtiplicar', () => {
  math.multiplicar = jest.fn().mockReturnValue(10);
  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar(2, 5)).toBe(10);
});

it('testa a funççao soma', () => {
  math.somar.mockImplementation((a, b) => a + b);
  math.somar(3, 2);
  expect(math.somar(3, 2)).toBe(5);
  expect(math.somar).toHaveBeenCalledTimes(2);
  expect(math.somar).toHaveBeenCalledWith(3, 2);
});

it('testa a função dividir', () => {
  math.dividir = jest.fn().mockReturnValue(15);
  math.dividir(2, 5);
  expect(math.dividir).toHaveBeenCalled();
  expect(math.dividir(2, 5)).toBe(15);
  expect(math.dividir).toHaveBeenCalledTimes(2);
});

describe('subtrair com restore', () => {
  it('testa a função subtrair e a restaura', () => {
    const mathSub = jest.spyOn(math, 'subtrair');
    mathSub.mockImplementation((a, b) => a * b);
    mathSub.mockReturnValue(20);

    expect(mathSub(4, 5)).toBe(20);
    expect(mathSub).toHaveBeenCalled();
    expect(mathSub).toHaveBeenCalledTimes(1);
    expect(mathSub).toHaveBeenCalledWith(4, 5);

    mathSub.mockRestore();
    mathSub.mockReturnValue(23);
    expect(mathSub(30, 7)).toBe(23);
    expect(mathSub).toHaveBeenCalled();
    expect(mathSub).toHaveBeenCalledTimes(1)

  });
});