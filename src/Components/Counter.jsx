import { useEffect, useState } from "react";

function Counter({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const fps = 60;
    const totalFrames = Math.round((duration / 1000) * fps);
    const increment = value / totalFrames;

    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      start += increment;

      if (frame >= totalFrames) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [value, duration]);

  return <>{count}</>;
}

export default Counter;
