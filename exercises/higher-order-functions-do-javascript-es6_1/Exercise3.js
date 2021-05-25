const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const testCorrector = (rightAnswers, studentAnswers, callback) => {
  return callback(rightAnswers, studentAnswers);
}

const checkAnswers = (rightAnswers, studentAnswers) => {
  let score = 0;
  let count = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    if (studentAnswers[index] === 'N.A') {
      score += 0;
    } else if (rightAnswers[index] === studentAnswers[index]) {
        score += 1;
        count += 1;
      } else {
        score -= 0.5;
    }

  }
  return `Você acertou ${count} perguntas,
sua pontuação é ${score} pontos.`;
}

console.log(testCorrector(rightAnswers, studentAnswers, checkAnswers));
