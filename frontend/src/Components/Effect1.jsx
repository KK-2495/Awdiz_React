import { useEffect, useState } from "react";

const Effect1 = () => {

    const [counter, setCounter] = useState(0);

    useEffect(()=>{console.log("use efffect type-1- No dependencies")});

    const increment = () => {
        setCounter((x) => x+1)
    }

    const decrement = () =>{
        setCounter((x) => x - 1)
    }

  return (
    <div>
        <h1>Type 1 - Counter : {counter}</h1>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Effect1;