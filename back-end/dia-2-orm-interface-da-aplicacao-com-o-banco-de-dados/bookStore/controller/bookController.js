const express = require('express');
const { Book } = require('../models');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json('Livro não encontrado');
    }

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pagequantity } = req.body;

    const newBook = await Book.create({ title, author, pagequantity });

    res.status(201).json(newBook);

  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.put('/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pagequantity } = req.body;

    const [updated] = await Book.update(
      { title, author, pagequantity },
      { where: { id } },
    );

    res.status(200).json(updated);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async(req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: 'usuaŕio não encontrado' });
    }

    await Book.destroy({ where: { id } });

    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/', async(req, res) => {
  try {
    const books = await Book.findAll();

    res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
})

module.exports = router;
