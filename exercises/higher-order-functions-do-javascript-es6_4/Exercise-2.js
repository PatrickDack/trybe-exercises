const books = require('./books');
const assert = require('assert');

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft, ";

function reduceNames() {
  const result = books.reduce((acc, curr) => `${acc}${curr.author.name}, `, '');
  return result;
}
// console.log(reduceNames());
assert.strictEqual(reduceNames(), expectedResult);