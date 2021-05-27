const books = require('./books');
const assert = require('assert');

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  const fanSciAuthors = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
  const ordered = fanSciAuthors.map((element) => element.author.name);
  return ordered.sort();
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);