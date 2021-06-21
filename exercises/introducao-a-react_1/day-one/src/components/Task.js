import React from 'react';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

export default Task;