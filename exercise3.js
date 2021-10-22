const main = require('./exercise1');

const makeCalc = async () => {


  const a = Math.floor(Math.random() * 100 + 1);
  const b = Math.floor(Math.random() * 100 + 1);
  const c = Math.floor(Math.random() * 100 + 1);

  try {
    const result = await main(a, b, c);
    return console.log(result);
  } catch(e) {
    console.log(e.message);
  }
}

makeCalc();
