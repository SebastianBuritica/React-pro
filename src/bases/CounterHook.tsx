import React from "react";
import { useCounter } from "../hooks/useCounter";

const CounterHook = () => {
  const { counter, elementToAnimate, handleClick } = useCounter({
    maxCount: 15,
  });

  return (
    <>
      <h1>Counter Hook</h1>
      <h1 ref={elementToAnimate}>{counter}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default CounterHook;
