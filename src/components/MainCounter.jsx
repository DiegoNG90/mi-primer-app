import React, { useState } from 'react';

import CounterHook from './CounterHook';
import H1Hook from './H1Hook';

const MainCounter = () => {
  // Vamos a usar useState Hook.
  const [counter, setCounter] = useState(0);

  const handlerCounter = (operacion) => {
    if (operacion === '+') {
      setCounter(counter + 1);
    } else if (operacion === '-') {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <H1Hook counter={counter} /> {/* Este componente muestre el contador*/}
      <CounterHook handlerCounter={handlerCounter} />{' '}
      {/* Este componente maneje el setter del contador */}
    </>
  );
};

export default MainCounter;
