import Counter from "./Counter";
import CounterControl from "./CounterControl";
import { useState } from "react";

function CounterApp() {

    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <>
          <Counter count={count} />
          <br />
          <CounterControl increment={increment} decrement={decrement} />
        </>
    );

}

export default CounterApp;
