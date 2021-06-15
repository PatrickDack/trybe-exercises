const { obj1, obj2, obj3 } = require('../source/compareObjects');

describe('campara objetos', () => {
  test('compara 1, 2 e 3', () => {
    expect(obj1).toEqual(obj2);
    expect(obj1).not.toEqual(obj3);
    expect(obj2).not.toEqual(obj3);
  });
});