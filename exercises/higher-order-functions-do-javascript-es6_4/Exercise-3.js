const book = require('./books');
const assert = require('assert');

const expectedResult = 43;

const middleAge = book.map((element) => element.releaseYear - element.author.birthYear);

function averageAge() {
  const sum = middleAge.reduce((acc, curr) => acc + curr)
  return sum / middleAge.length;
}

assert.strictEqual(averageAge(), expectedResult);