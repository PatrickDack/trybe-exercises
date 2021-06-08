const promisse = new Promise((resolve, reject) => {
  const ranNumArr = [];

  for(let index = 0; index < 10; index += 1) {
    const randomNumber = Math.round(Math.random() * 50);
    ranNumArr[index] = randomNumber ** 2;
  }
  console.log(ranNumArr);
});