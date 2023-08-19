import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0);
    console.log(counter, "-counter");
  return (
    <div>
        <h1>Counter - {counter}</h1>
        <button onClick={()=> setCounter((prevState) => prevState + 1) }>+</button>
        <button onClick={()=> setCounter((prevState) => prevState - 1)}>-</button>
        {/* <button onClick={()=> setCounter((prevState) => prevState * 2)}>*</button> */}
    </div>
  )
}

export default Counter;