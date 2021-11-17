const connection = require('./connection');

const getNewBooks = (booksData) => {
  const { _id, author_id, title } = booksData;

  return {
    id: _id,
    author_id,
    title,
  };
}

const getAllBooks = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray())
      .then((books) =>
        books.map(({ _id, author_id, title }) => getNewBooks({ _id, author_id, title }))
      )
}

const getById = (id) => {

}

const getByAuthorId = async (id) => {
  return connection()
    .then((db) => db.collection('books').find({ author_id: id }).toArray());
};

const isValid = async (title, author_id) => {
  if (!title || title.length < 3) return false;
  if (!author_id) return false;

  const doAuthorExists = async (id) => {
    const author = await connection()
      .then((db) => db.collection('books').find({ author_id: id }).toArray());
    console.log(author);
    return author;
  }

  const authorArr = await doAuthorExists(author_id);

  if (!authorArr[0]) return false;

  return true;
};

const create = async (title, author_id) => {
  await connection()
    .then((db) => db.collection('books').insertOne({ title, author_id }))
    .then(result => getNewBooks({ id: result.insertedId, title, author_id }));
};

module.exports = {
  getAllBooks,
  getByAuthorId,
  isValid,
  create,
};
