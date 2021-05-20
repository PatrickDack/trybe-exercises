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