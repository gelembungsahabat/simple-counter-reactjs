import App from "./conter";
import App2 from "./show";
import React from "react";

export default function() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <App handleClock={handleClick} />
      <App2 counter={count} />
    </div>
  );
}
