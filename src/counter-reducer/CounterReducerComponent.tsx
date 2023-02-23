import React from "react";
import { doReset } from "./actions/actions";
// import { CounterAction } from "./actions/actions";
import { counterReducer } from "./context/counterReducer";
// import { CounterState } from "./interfaces/interfaces";

const INITIAL_STATE = {
  counter: 0,
  previous: 0,
  changes: 0,
};

// Example of pure function, which is a function that does not interact with anything else besides the parameters passed onto it
// const sumar = (a:number, b:number) => {
//   return a + b;
// }

const CounterReducerComponent = () => {
  const [counterState, dispatch] = React.useReducer(
    counterReducer,
    INITIAL_STATE
  );

  const handleReset = () => {
    dispatch(doReset());
  };

  const increaseBy = (value: number) => {
    dispatch({ type: "increaseBy", payload: { value } });
  };

  return (
    <>
      <h1>Counter Segmentado</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>

      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default CounterReducerComponent;
