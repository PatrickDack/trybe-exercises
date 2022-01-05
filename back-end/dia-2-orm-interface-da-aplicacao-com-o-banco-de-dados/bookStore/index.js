const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const bookController = require('./controller/bookController');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use('/book', bookController);
app.use('/books', bookController);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
