import React from 'react';
import './App.css';
// import logo from './logo.svg';

import MainCounter from './components/MainCounter';
import Saludar from './components/Saludar';
import TaskForm from './components/TaskForm';

// JSX? vs vainilla JS
function App() {
  return (
    <div className="App">
      <MainCounter />
      <h3>Hola soy Diego</h3>
      <Saludar />
      <TaskForm />
    </div>
  );
}

export default App;
