const tokenGenerate = () => {
  const random = Math.random();
  const token = random.toString(16).substring(3);
  return token;
}

const emailValid = (email, fn) => {
  const pattern = /(.*)@(.*).com/

  if (!email.match(pattern)) {
    return fn.status(404).json({ message: 'Email or Password incorrect.' })
  }
}

const passwordValid = (password, fn) => {
  if (typeof password !== 'number') {
    return fn.status(404).json({ message: 'Email or Password incorrect.' });
  };


  if (!password || password.toString().length < 4 || password.toString().length > 8) {
    return fn.status(404).json({ message: 'Email or Password incorrect.' });
  };
}

module.exports = (req, res, next) => {
  const { email, password } = req.body;

  passwordValid(password, res);
  emailValid(email, res);

  res.status(201).json({ token: tokenGenerate() });

  next();
};
