import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const getNumberEvenness = (num) => (num % 2 === 1 ? "Neparan" : "Paran");

  return (
    <div>
      <p>Broj: {count}</p>
      <button onClick={handleClick}>Click me</button>
      <p>{getNumberEvenness(count)}</p>
    </div>
  );
};

export default Counter;
