import React from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE = {
  counter: 0,
  previous: 0,
  changes: 0,
};

// Example of pure function, which is a function that does not interact with anything else besides the parameters passed onto it
// const sumar = (a:number, b:number) => {
//   return a + b;
// }

type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "reset":
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      };

    case "increaseBy":
      return {
        ...state,
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      };

    default:
      return state;
  }
};

const CounterReducerComponent = () => {
  const [counterState, dispatch] = React.useReducer(
    counterReducer,
    INITIAL_STATE
  );

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const increaseBy = (value: number) => {
    dispatch({ type: "increaseBy", payload: { value } });
  };

  return (
    <>
      <h1>Counter Reducer</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>

      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default CounterReducerComponent;
