const books = require('./books');
const assert = require('assert');

function oldBooksOrdered() {
  const oldBooks = books.filter((book) => book.releaseYear <= 1960
  );
  return oldBooks;
}

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  return oldBooksOrdered().map((element) => element.name);
}

assert.deepStrictEqual(oldBooks(), expectedResult);