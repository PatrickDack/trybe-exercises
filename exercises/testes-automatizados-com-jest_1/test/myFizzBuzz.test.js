const myFizzBuzz = require('../source/myFizzBuzz');

describe('testa a função myFizzBuzz', () => {
  test('divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('divisível por 3', () => {
    expect(myFizzBuzz(21)).toBe('fizz');
  });
  test('divisível por 5', () => {
    expect(myFizzBuzz(20)).toBe('buzz');
  });
  test('testa !== number', () => {
    expect(myFizzBuzz('Patrick')).toBe(false);
  });
  test('não divisível por 3 e 5', () => {
    expect(myFizzBuzz(29)).toBe(29);
  });
});