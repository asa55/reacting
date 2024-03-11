import { useState } from "react";

function Greeting( { name } ) {

  const [count, setCount] = useState(0);

  return (
    <>
      Hello, {name} <button onClick={() => setCount(count + 1)}>click me! {count}</button>
    </>
  );
}

export default Greeting;
