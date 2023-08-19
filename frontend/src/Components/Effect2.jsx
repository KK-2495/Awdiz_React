import { useEffect, useState } from "react"

const Effect2 = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() =>{console.log("use Effect type 2 - empty dependencies")},[]);

    const increment = () =>{
        setCounter((x) => x + 1)
    }

    const decrement = () =>{
        setCounter((x) => x - 1)
    }
  return (
    <div>
        <h1>Type 2 - Counter : {counter}</h1>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>

    </div>  )
}

export default Effect2