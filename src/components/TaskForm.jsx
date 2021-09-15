import React, { useState } from 'react';

const TaskForm = () => {
  const [name, setName] = useState('');
  console.log(name);

  const handleTaskForm = (e) => {
    e.preventDefault();
    const [nombre, password] = e.target.elements;
    console.log(`nombre`, nombre.value, 'password', password.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={handleTaskForm}>
      <input
        onChange={handleNameChange}
        type="text"
        placeholder="Nombre"
        name="nombre"
      />
      <input
        type="password"
        placeholder="Enter your password"
        name="password"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default TaskForm;
