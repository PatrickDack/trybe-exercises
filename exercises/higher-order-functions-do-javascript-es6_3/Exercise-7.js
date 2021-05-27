const books = require('./books');
const assert = require('assert');

const expectedResult = 'O Senhor dos Anéis';

const reg = /\w\.\s\w\.\s\w\.\s/;

function authorWith3DotsOnName() {
  const nameAuthor = books.filter((element) => {
    return element.author.name.match(reg);
  })
  const result = nameAuthor.map(element => element.name);
  return result[0];
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);