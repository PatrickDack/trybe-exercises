const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addMorningTurn = (obj, key, value) => {
  obj[key] = value;
}
addMorningTurn(lesson2, 'turno', 'manhã');
console.log(lesson2);

const listKeys = obj => console.log(Object.keys(obj));
listKeys(lesson3);

const listValues = obj => console.log(Object.values(obj));
listValues(lesson3);

const objectLength = obj => console.log(Object.keys(obj).length);
objectLength(lesson1);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

console.log(allLessons.lesson1.numeroEstudantes);

const studentsCount = obj => {
  const keys = Object.keys(obj);
  let total = 0;
  for (key of keys) {
    total += obj[key]['numeroEstudantes'];
  }
  return total;
}

console.log(studentsCount(allLessons));

const getValueByNumber = (obj, index) => {
  const values = Object.values(obj);
  return values[index];
}
console.log(getValueByNumber(lesson2, 0));

const verifyPair = (obj, key, value) => obj[key] === value ? true : false;
console.log(verifyPair(lesson3, 'turno', 'noite'));
