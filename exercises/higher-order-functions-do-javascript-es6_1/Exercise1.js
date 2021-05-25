const toHire = (fullName) => {
  const patternName = fullName.split(' ');

  return ({ fullName: fullName, email: `${patternName.join('-')}@trybe.com` });
}
// console.log(toHire('Patrick Dack'));

const newEmployees = () => {
  const empleyees = {
    id1: toHire('Pedro Guerra'),
    id2: toHire('Luiza Drumond'),
    id3: toHire('Carla Paiva'),
  }
  return empleyees;
}

console.log(newEmployees());
