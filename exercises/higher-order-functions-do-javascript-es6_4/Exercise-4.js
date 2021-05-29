const book = require('./books');
const assert = require('assert');

const expectedResult = 'As Crônicas de Gelo e Fogo';

function longestNamedBook() {
 const result = book.reduce((acc, curr) => (acc.name.length > curr.name.length) ? acc : curr);
 return result.name;
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);