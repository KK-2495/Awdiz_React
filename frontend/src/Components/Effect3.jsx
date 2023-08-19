import { useEffect, useState } from "react"

const Effect3 = () => {
    const [counter, setCounter] = useState(0);
    const [counter1, setCounter1] = useState(0);

    useEffect(()=>{console.log("use Effect type 3 - single Dependency")},[counter]);


    const increment = () =>{
        setCounter((x) => x + 1)
    }
    const increment1 = () =>{
        setCounter1((x) => x + 1)
    }

  return (
    <div>
        <h1>Type 3 - Counter : {counter}</h1>
        <button onClick={increment}>+</button>
        <h1>Type 3 - Counter : {counter1}</h1>
        <button onClick={increment1}>+</button>
    </div>
  )
}

export default Effect3