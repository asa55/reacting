function CounterControl({ increment, decrement}) {
    return (
        <>
          <button name="increment" onClick={increment}>increment</button>
          <button name="decrement" onClick={decrement}>decrement</button>
        </>
    );
}

export default CounterControl;
