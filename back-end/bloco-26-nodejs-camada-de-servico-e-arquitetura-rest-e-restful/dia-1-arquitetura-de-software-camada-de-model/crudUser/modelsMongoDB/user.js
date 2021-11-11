const connection = require('./connection');

const validUser = (firstName, lastName, email, password, fn) => {
  if (!firstName) return { error: true, message: 'O campo "firstName" é obrigatório.'};
  if (!lastName) return { error: true, message: 'O campo "lastName" é obrigatório.'};
  if (!email) return { error: true, message: 'O campo "email" é obrigatório.'};
  if (!password || password.length < 6) return { error: true, message: 'O campo "password" é obrigatório e deve conter pelo menos 6 caracteres.'};

  return { error: false };
}

const createUser = async (firstName, lastName, email, password) => {
  await connection()
    .then((db) => db.collection('user').insertOne({ firstName, lastName, email, password }));
}

const getAllUsers = async () => {
  return await connection()
    .then((db) => db.collection('user').find().toArray())
}

module.exports = {
  validUser,
  createUser,
  getAllUsers,
};
