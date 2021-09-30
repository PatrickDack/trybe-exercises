import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function TodoList() {

  const { handleChange, handleClick, todo } = useContext(MyContext);

  return (
    <>
      <input type="text" id="task" onChange={ handleChange }/><br/>
      <button type="button" onClick={ handleClick }>
        Adicionar Tarefa
      </button>
      <ul>
        {
          todo.map((task, index) => <li key={ index }>{task}</li>)
        }
      </ul>
    </>
  );
}

export default TodoList;
