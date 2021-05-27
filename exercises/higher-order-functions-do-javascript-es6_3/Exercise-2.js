const books = require('./books');
const assert = require('assert');

const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

const calcAge = books.map((book) => book.releaseYear - book.author.birthYear);

function nameAndAge() {
  const arrName = books.map((book, index) => {
    return {
      age: calcAge[index],
      author: book.author.name,
    }
  });
  arrName.sort((a, b) => a.age - b.age);
  return arrName;
}

assert.deepStrictEqual(nameAndAge(), expectedResult);