const express = require('express');
const bookController = require('./bookController');

const router = express.Router();

router.get('/', bookController);

module.exports = router;
