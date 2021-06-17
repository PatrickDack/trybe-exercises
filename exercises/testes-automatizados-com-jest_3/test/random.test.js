const random = require('../souce/random');

afterEach(() => {
  random.generate.mockRestore();
})

it('testa random', () => {
  random.generate = jest.fn().mockReturnValue(23);
  random.generate();
  expect(random.generate).toHaveBeenCalled();
  expect(random.generate()).toBe(23);
  expect(random.generate).toHaveBeenCalledTimes(2);
});

it('testa random com implementation', () => {
  const randomGen = jest.spyOn(random, 'generate');
  randomGen.mockImplementation((a, b) => a / b);
  randomGen();
  expect(randomGen).toHaveBeenCalled();
  expect(randomGen(10, 5)).toBe(2);
  expect(randomGen).toHaveBeenCalledTimes(2);

  randomGen.mockRestore();
  randomGen.mockReturnValue(54);
  expect(randomGen()).toBe(54);
  expect(randomGen).toHaveBeenCalledTimes(1);
})