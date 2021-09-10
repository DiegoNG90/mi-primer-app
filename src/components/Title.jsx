import React from 'react';

const Title = ({ nombre, apellido, edad, esCasado }) => {
  const checkEstadoCivil = () => {
    if (esCasado === undefined) {
      return '';
    } else if (esCasado === false) {
      return 'Es soltero';
    } else if (esCasado === true) {
      return 'Es casado';
    }
  };

  return (
    <h1>
      Hola {nombre} {apellido}
      {/* Conditional rendering */}
      {edad ? <p>Hola</p> : <h2>Chau</h2>}
      {/* Chain rendering */}
      {edad > 29 && 'Es mayor de edad'}
      {checkEstadoCivil()}
    </h1>
  );
};

export default Title;
