const books = require('./books');
const assert = require('assert');

const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames() {
  const formatedBook = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`
  );
  return formatedBook;
}

assert.deepStrictEqual(formatedBookNames(), expectedResult);