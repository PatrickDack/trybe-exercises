const main = require('./exercise1');

const makeCalc = () => {


  const a = Math.floor(Math.random() * 100 + 1);
  const b = Math.floor(Math.random() * 100 + 1);
  const c = Math.floor(Math.random() * 100 + 1);

  return main(a, b, c)
  .then(resolve => console.log(resolve))
  .catch(e => console.log(e));

}

makeCalc();
