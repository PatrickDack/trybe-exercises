const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const joined =  names.reduce((acc, curr) => acc + curr);
  const joinedArr = joined.split('');
  const result = joinedArr.reduce((acc, curr) => {
    (curr === 'A' || curr === 'a') ? acc += 1 : acc;
    return acc;
  }, 0)
  return result;
}

assert.deepStrictEqual(containsA(), 20);