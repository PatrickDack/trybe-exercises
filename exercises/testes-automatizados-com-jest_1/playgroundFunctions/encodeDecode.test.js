const { encode, decode } = require('./challenges');

describe('testa encode e decode', () => {
  test('testa o type das duas funçoes', () => {
    expect(typeof encode && typeof decode).toBe('function');
  });
  test('testa encode', () => {
    expect(encode('aeiou')).toBe('12345');
    expect(encode('aeiou')).not.toBe('aeiou');
    expect('Patrick Dack'.length).toBe(encode('Patrick Dack').length);
  });
  test('testa decode', () => {
    expect(decode('12345')).toBe('aeiou');
    expect(decode('12345')).not.toBe('12345');
    expect('P1tr3ck D1ck'.length).toBe(encode('P1tr3ck D1ck').length);
  });
});