const uppercase = require('../source/Exercise-1');

describe('testa função uppercase', () => {
  it('testando a callback', (done) => {
    uppercase('patrick', (result) => {
      expect(result).toBe('PATRICK');
      done();
    });
  });
});