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
});

it('testa random com mais implementations', () => {
  const randomGen = jest.spyOn(random, 'generate');
  randomGen.mockImplementation((a, b, c) => a * b * c);

  randomGen();
  expect(randomGen).toHaveBeenCalled();
  expect(randomGen(2, 4, 6)).toBe(48);
  expect(randomGen).toHaveBeenCalledWith(2, 4, 6);
  expect(randomGen).toHaveBeenCalledTimes(2);

  randomGen.mockRestore();
  randomGen.mockImplementation((a) => 2 * a);
  randomGen();
  expect(randomGen).toHaveBeenCalled();
  expect(randomGen(7)).toBe(14);
  expect(randomGen).toHaveBeenCalledWith(7);
  expect(randomGen).toHaveBeenCalledTimes(2);
});
