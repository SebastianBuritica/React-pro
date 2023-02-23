import React from "react";
import { gsap } from "gsap";

export const useCounter = ({ maxCount = 10 }) => {
  const [counter, setCounter] = React.useState(5);
  const elementToAnimate = React.useRef<any>(null);

  const tl = React.useRef(gsap.timeline());

  const handleClick = () => {
    // setCounter((prev) => (counter >= maxCount ? prev : prev + 1));
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };

  // Whenver handling html references is recommended to use the useLayoutEffect

  React.useLayoutEffect(() => {
    // console.log("counterElement", elementToAnimate.current);

    if (!elementToAnimate.current) return;

    tl.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(elementToAnimate.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      })
      .pause();
  }, []);

  React.useEffect(() => {
    if (counter < maxCount) return;
    // console.log("%cSe llego al valor maximo", "color: #7FFFD4");
    tl.current.play();
  }, [counter]);

  return {
    counter,
    handleClick,
    elementToAnimate,
  };
};
