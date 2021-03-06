const connection = require('./connection');
const { ObjectId } = require('mongodb');

const validUser = (firstName, lastName, email, password, fn) => {
  if (!firstName) return { error: true, message: 'O campo "firstName" é obrigatório.'};
  if (!lastName) return { error: true, message: 'O campo "lastName" é obrigatório.'};
  if (!email) return { error: true, message: 'O campo "email" é obrigatório.'};
  if (!password || password.length < 6) return { error: true, message: 'O campo "password" é obrigatório e deve conter pelo menos 6 caracteres.'};

  return { error: false };
}

const getUserById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const user = await connection()
    .then((db) => db.collection('user').findOne(ObjectId(id)));

  if (!user) return null;

  return user;
}

const createUser = async (firstName, lastName, email, password) => {
  await connection()
    .then((db) => db.collection('user').insertOne({ firstName, lastName, email, password }));
}

const updateUser = async (id, firstName, lastName, email, password) => {
  if (!ObjectId.isValid(id)) return null;

  const updatedUser = await connection()
    .then((db) => db.collection('user')
    .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: { firstName, lastName, email, password } }))
    .then((result) => result.value);
  if (!updatedUser) return null;

  return updatedUser;
}

const getAllUsers = async () => {
  return await connection()
    .then((db) => db.collection('user').find().toArray())
}

module.exports = {
  validUser,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
};
