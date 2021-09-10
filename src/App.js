import React from 'react';
import './App.css';
import logo from './logo.svg';

import Card from './components/Card';
import Title from './components/Title';

function App() {
  // Aca podemos definir variables y funciones

  return (
    // Aca podemos pasar los variables, llamar funciones, pero no definirlas
    <div className="App">
      <Title nombre="Diego" apellido="Gandara" edad={30} esCasado={false} />
      <div className="d-flex justify-content-between m-2 p-2">
        <Card color="red" logo={logo} />
        <Card color="#000" />
        <Card color="blue" />
      </div>
      <Title nombre="Hernan" apellido="Quintero" />
    </div>
  );
}

export default App;
