const express = require('express');
const auth = require('../middlewares/auth');
const authLogin = require('../middlewares/authLogin');

const router = express.Router();

router.post('/register', auth);

router.post('/login', authLogin);

module.exports = router;
