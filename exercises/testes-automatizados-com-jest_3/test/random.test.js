const random = require('../souce/random');

it('testa random', () => {
  random.generate = jest.fn().mockReturnValue(23);
  random.generate();
  expect(random.generate).toHaveBeenCalled();
  expect(random.generate()).toBe(23);
  expect(random.generate).toHaveBeenCalledTimes(2);
});