function encode(string) {
  let stringToArray = string.split('');
  for (let index in stringToArray) {
    if (stringToArray[index] === 'a') stringToArray[index] = 1;
    if (stringToArray[index] === 'e') stringToArray[index] = 2;
    if (stringToArray[index] === 'i') stringToArray[index] = 3;
    if (stringToArray[index] === 'o') stringToArray[index] = 4;
    if (stringToArray[index] === 'u') stringToArray[index] = 5;
  }
  return stringToArray.join('');
}

function decode(string) {
  let stringToArray = string.split('');
  for (let index in stringToArray) {
    if (stringToArray[index] === '1') stringToArray[index] = 'a';
    if (stringToArray[index] === '2') stringToArray[index] = 'e';
    if (stringToArray[index] === '3') stringToArray[index] = 'i';
    if (stringToArray[index] === '4') stringToArray[index] = 'o';
    if (stringToArray[index] === '5') stringToArray[index] = 'u';
  }
  return stringToArray.join('');
}

module.exports = {
  decode,
  encode,
};
