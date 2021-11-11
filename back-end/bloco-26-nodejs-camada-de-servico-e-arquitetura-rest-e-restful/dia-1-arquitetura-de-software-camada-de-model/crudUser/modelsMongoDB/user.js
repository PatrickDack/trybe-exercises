const connection = require('./connection');

const validUser = (firstName, lastName, email, password, fn) => {
  if (!firstName) return fn.status(401).json({ error: true, message: 'O campo "firstName" é obrigatório.'})
  if (!lastName) return fn.status(401).json({ error: true, message: 'O campo "lastName" é obrigatório.'})
  if (!email) return fn.status(401).json({ error: true, message: 'O campo "email" é obrigatório.'})
  if (!password || password.length < 6) return fn.status(401).json({ error: true, message: 'O campo "password" é obrigatório e deve conter pelo menos 6 caracteres.'})
}

const createUser = async (firstName, lastName, email, password) => {
  await connection()
    .then((db) => db.collection('user').insertOne({ firstName, lastName, email, password }));
}

module.exports = {
  validUser,
  createUser,
};
