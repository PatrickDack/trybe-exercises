const getUserName = require('../source/Exercise-2');

describe('Testa a função getUserName', () => {
  it('testa a função utilizando Promise', () => {
    return getUserName(4)
    .then((user) => {
      expect(user).toBe('Mark');
    });
  });

  it('testa a função utilizando async/await', async () => {
    const user = await getUserName(5);
    expect(user).toBe('Paul');
  });
});