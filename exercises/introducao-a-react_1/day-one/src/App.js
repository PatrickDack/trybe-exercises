import './App.css';
import Task from './components/Task';

const tasks = ['Momento Inicial', 'Estudar no Course', 'Aula ao Vivo', 'Fazer os Exercicios', 'Forms', 'Encerramento'];

function App() {
 return(
  <ul>{tasks.map((task) => <Task task={task} />)}</ul>
 );
}

export default App;
