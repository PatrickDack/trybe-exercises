import './App.css';

const tasks = ['Momento Inicial', 'Estudar no Course', 'Aula ao Vivo', 'Fazer os Exercicios', 'Forms', 'Encerramento'];

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

function App() {
 return(
  tasks.map((task) => Task(task))
 )
}

export default App;
