const fs = require('fs').promises;

// Exercicio 1
// const main = async() => {
//   try {
//     const response = await fs.readFile('./simpsons.json', 'utf-8');
//     const data = JSON.parse(response);
//     const result = data.map(({ id, name }) => `${id} - ${name}`);
//     return console.log(result);
//   } catch(e) {
//     console.log(e.message);
//   };
// };

// main();

// Exercicio 2

// const getCharacterById = async (id) => {
//   try {
//     const response = await fs.readFile('./simpsons.json', 'utf-8');
//     const data = JSON.parse(response);
//     const result = data.find((character) => character.id == id);
//     if (!result) throw new Error('Erro: Id não Encontrado');
//     return console.log(result);
//   } catch(err) {
//     console.log(err.message);
//   }
// }

// getCharacterById(5);

// Exercicio 3

// const writeJson = async() => {
//   try {

//     const response = await fs.readFile('./simpsons.json', 'utf-8');
//     const data = JSON.parse(response);
//     const result = JSON.stringify(data.filter((character) => character.id !== '10' && character.id !== '6'));
//     console.log(result);
//     const filtered = fs.writeFile('./simpsons.json', result)
//     return console.log(filtered);

//   } catch(err) {
//     console.log(err.message);
//   }
// }

// writeJson();

// Exercicio 4

// const simpsonFamily = async() => {
//   try {

//     const response = await fs.readFile('./simpsons.json', 'utf-8');
//     const data = JSON.parse(response);
//     const result = JSON.stringify(data.filter((character) => character.id == '1' || character.id === '4'));
//     console.log(result);
//     const filtered = await fs.writeFile('./simpsonsFamily.json', result, { flag: 'wx' });
//     return console.log(filtered);

//   } catch(err) {
//     console.log(err.message);
//   }
// }

// simpsonFamily();

// Exercicio 5

const addCharacter = async(character) => {
  try {
    const response = await fs.readFile('./simpsons.json', 'utf-8');
    const data = JSON.parse(response);
    const result = data.find((simpson) => simpson.name === character);
    const array = await fs.readFile('./simpsonsFamily.json', 'utf-8')
      .then(arr => JSON.parse(arr));
    array.push(result);
    const newCharacter = await fs.writeFile('./simpsonsFamily.json', JSON.stringify(array), { flag: 'w' });
  } catch(err) {
    console.log(err.message);
  };
};

addCharacter('Nelson Muntz');
