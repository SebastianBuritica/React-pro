import React from "react";
import Counter from "./bases/Counter";
import CounterBy from "./bases/CounterBy";

function App() {
  return (
    <>
      <Counter initialValue={3} />
      <CounterBy />
    </>
  );
}

export default App;
