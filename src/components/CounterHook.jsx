import React from 'react';

const CounterHook = ({ increment, handlerCounter }) => {
  return (
    <>
      <button onClick={() => handlerCounter('+')}>+</button>
      <button onClick={() => handlerCounter('-')}>-</button>
    </>
  );
};

export default CounterHook;
