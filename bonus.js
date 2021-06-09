const sumRandom = () => {
  const ranNumArr = [];
  for(let index = 0; index < 10; index += 1) {
    const randomNumber = Math.round(Math.random() * 50);
    ranNumArr[index] = randomNumber ** 2;
  }

  const sumArr = ranNumArr.reduce((acc, curr) => acc + curr, 0);

  if (sumArr >= 8000) {
    throw new Error('caralho');
  }

  return sumArr;
}

const divideSum = (sum) => {
  const dividers = [2, 3, 5, 10];
  return dividers.map((num) => Math.round(sum / num))
  .reduce((acc, curr) => acc + curr, 0);
}

const runPromise = async () => {
  try {
    const sum = await sumRandom();
    const divide = await divideSum(sum);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

runPromise();
