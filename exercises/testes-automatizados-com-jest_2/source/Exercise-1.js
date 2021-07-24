const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

uppercase('patrick', (result) => {
  console.log(result);
})

module.exports = uppercase;
