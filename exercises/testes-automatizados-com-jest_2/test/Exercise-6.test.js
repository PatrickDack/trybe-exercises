const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    const animal = Animals.filter((animals) => animals.name === name);
    if (animal.length !== 0) {
      return resolve(...animal);
    }
    return reject('Nenhum animal com esse nome!');
  })
}

const getAnimal = (name) => {
  return findAnimalByName(name);
};

const findAnimalByAge = (age) => {
  return new Promise((resolve, reject) => {
    const animal = Animals.filter((animals) => animals.age === age);
    if (animal.length !== 0) {
      return resolve(...animal);
    }
    return reject('Não existe animal com esta idade.');
  })
}

const getAnimalByAge = (age) => {
  return findAnimalByAge(age);
}

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimalByAge(5).then(animal => {
        expect(animal).toEqual({ name: 'Preguiça', age: 5, type: 'Cat' });
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalByAge(15).catch(error =>
        expect(error).toEqual('Não existe animal com esta idade.')
      );
    });
  });
});