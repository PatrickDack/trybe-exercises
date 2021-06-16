const getUserName = require('../source/Exercise-2');

test('test', () => {
  return getUserName(4)
  .then((user) => {
    expect(user).toBe('Mark');
  });
});