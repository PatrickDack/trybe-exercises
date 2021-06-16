const getUserName = require('../source/Exercise-2');

describe('Testa a função getUserName', () => {
  it('testa a função utilizando Promise', () => {
    expect.assertions(1);
    return getUserName(4)
    .then((user) => expect(user).toBe('Mark'));
  });
   it('testa error utilizando Promise', () => {
    return getUserName(6)
    .catch(error => expect(error).toEqual({ error: 'User with ' + 6 + ' not found.' }))
  });

  it('testa a função utilizando async/await', async () => {
    const user = await getUserName(5);
    expect(user).toBe('Paul');
  });
  it('testa error utilizando async/await', async () => {
    try {
      await getUserName(6);
    } catch (error) {
      expect(error).toEqual({ error: 'User with ' + 6 + ' not found.' });
    }
  });
});