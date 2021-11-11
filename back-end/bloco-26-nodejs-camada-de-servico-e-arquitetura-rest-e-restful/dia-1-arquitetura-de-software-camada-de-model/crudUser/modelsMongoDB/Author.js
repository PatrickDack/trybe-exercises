const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
      .then((authors) =>
        authors.map(({ _id, firstName, middleName, lastName }) =>

          getNewAuthor({
            id: _id,
            firstName,
            middleName,
            lastName,
          })
        )
      )
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(ObjectId(id)));

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return getNewAuthor({ firstName, middleName, lastName });
};

module.exports = {
  getAll,
  getById,
};
