import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';

function Provider({children}) {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    const task = document.getElementById('taks');
    task.innerText = '';
  }, [todo]);

  const handleChange = ({ target }) => {
    setTask(target.value);
  }

  const handleClick = () => {
    setTodo([...todo, task]);
  }

  const context = {
    todo,
    handleChange,
    handleClick,
  }


  return (
    <MyContext.Provider value={context}>
      {
        children
      }
    </MyContext.Provider>
  );
}

export default Provider;
