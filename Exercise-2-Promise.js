const promisse = new Promise((resolve, reject) => {
  const ranNumArr = [];
  const dividers = [2, 3, 5, 10];

  for(let index = 0; index < 10; index += 1) {
    const randomNumber = Math.round(Math.random() * 50);
    ranNumArr[index] = randomNumber ** 2;
  }

  const sumArr = ranNumArr.reduce((acc, curr) => acc + curr, 0);

  if (sumArr <= 8000) {
    const result = [];
    dividers.map((num) => result.push(Math.round(sumArr / num)));
    resolve(result);
  } else {
    reject();
  }
})
.then((arr) => console.log(arr)).catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
