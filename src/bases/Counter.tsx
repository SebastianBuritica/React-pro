import React from "react";

interface Props {
  initialValue: number;
}

const Counter = ({ initialValue }: Props) => {
  const [counter, setCounter] = React.useState(initialValue);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>

      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default Counter;
