import React from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT = 10;

const CounterEffect = () => {
  const [counter, setCounter] = React.useState(5);
  const counterElement = React.useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCounter((prev) => (counter >= MAXIMUN_COUNT ? prev : prev + 1));
    // setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  // Whenver handling html references is recommended to use the useLayoutEffect

  React.useEffect(() => {
    if (counter < 10) return;
    console.log("%cSe llego al valor maximo", "color: #7FFFD4");

    const tl = gsap.timeline();

    tl.to(counterElement.current, { y: -10, duration: 0.2, ease: "ease.out" });
    tl.to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" });
  }, [counter]);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <h1 ref={counterElement}>{counter}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default CounterEffect;
