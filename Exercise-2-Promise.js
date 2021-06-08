const promisse = new Promise((resolve, reject) => {
  const ranNumArr = [];

  for(let index = 0; index < 10; index += 1) {
    const randomNumber = Math.round(Math.random() * 50);
    ranNumArr[index] = randomNumber ** 2;
  }

  const sumArr = ranNumArr.reduce((acc, curr) => acc + curr, 0);

  if (sumArr <= 8000) {
    resolve();
  } else {
    reject();
  }
})
.then(() => console.log('Promise resolvida')).catch(() => console.log('Promise rejeitada'));
