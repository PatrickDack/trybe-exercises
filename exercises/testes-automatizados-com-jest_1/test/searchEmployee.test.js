const { professionalBoard, searchEmployee } = require('../source/searchEmployee');

describe('testa a função searchEmployee', () => {
  test('verifica existencia da função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  test('test id undefined', () => {
    expect(searchEmployee('534925', 'nunes')).toBe('ID não identificada');
  });
  test('teste padrao', () => {
    expect(searchEmployee('5569-4', 'firstName')).toBe('George');
    expect(searchEmployee('5569-4', 'specialities')).toEqual([ 'Frontend', 'Redux', 'React', 'CSS' ])
  });
});