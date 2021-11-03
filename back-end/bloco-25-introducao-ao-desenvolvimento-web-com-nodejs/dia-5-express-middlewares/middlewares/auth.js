const usernameValid = (username, fn) => {
  if (!username || username.length < 3) {
    return fn.status(404).json({ message: 'Invalid data.' })
  }
}

const emailValid = (email, fn) => {
  const pattern = /(.*)@(.*).com/

  if (!email.match(pattern)) {
    return fn.status(404).json({ message: 'Invalid data.' })
  }
}

const passwordValid = (password, fn) => {
  if (typeof password !== 'number') {
    return fn.status(404).json({ message: 'Invalid data.' });
  };


  if (!password || password.toString().length < 4 || password.toString().length > 8) {
    return fn.status(404).json({ message: 'Invalid data.' });
  };
}

module.exports = (req, res, next) => {
  const { username, email, password } = req.body;

  passwordValid(password, res);
  usernameValid(username, res);
  emailValid(email, res);

  res.status(201).json({ message: 'User Created!' });

  next();
};
