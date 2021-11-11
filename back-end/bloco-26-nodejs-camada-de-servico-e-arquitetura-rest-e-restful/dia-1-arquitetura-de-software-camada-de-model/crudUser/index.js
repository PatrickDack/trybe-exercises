const express = require('express');
const { json } = require('body-parser');
const { getAll, getById } = require('./modelsMongoDB/Author');
const { getAllBooks, getByAuthorId, isValid, create } = require('./modelsMongoDB/Book');
const { createUser,  validUser } = require('./modelsMongoDB/user');

const app = express();

app.use(json());

app.post('/user', async (req, res, _next) => {
  const { firstName, lastName, email, password } = req.body;

  validUser(firstName, lastName, email, password, res);

  await createUser(firstName, lastName, email, password);

  res.status(201).json({ error: false, message: 'Usuário criado com sucesso.'});
});

app.get('/authors', async (req, res, next) => {
  const authors = await getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res, _next) => {
  const { id } = req.params;

  const author = await getById(id);
  if (!author) return res.status(400).json({ message: 'Author not found.'});

  return res.status(200).json(author);
})

app.get('/books', async (req, res, next) => {
  const books = await getAllBooks();

  res.status(200).json(books);
});

app.post('/books', async (req, res, _next) => {
  const { title, author_id } = req.body;

  const boolean = await isValid(title, author_id);

  if (!boolean) return res.status(400).json({ message: 'Dados inválidos' });

  await create(title, author_id);

  return res.status(201).json({ message: 'Livro criado com sucesso!' });
});

app.get('/books/:id', async (req, res, next) => {
  const { id } = req.params;

  const parsedId = parseInt(id, 10);

  const books = await getByAuthorId(parsedId);
  if (!books[0]) return res.status(400).json({ message: 'Not Found :('});

  res.status(200).json(books);
});

const PORT = process.env.PORT | 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
