function techList(array, name) {
  if (array.length === 0) return 'Vazio!';

  return array.sort().map(tech => ({
    'tech': tech,
    'name': name,
  }));
}

function hydrate(string) {
  const result = string.split('').map((char) => parseInt(char))
  .reduce((cup, char) => isNaN(char) === false ? cup + char : cup, 0);
  const phrase = result === 1 ? 'copo' : 'copos';
  return `${result} ${phrase} de água`;
}

module.exports = {
  techList,
  hydrate,
};
