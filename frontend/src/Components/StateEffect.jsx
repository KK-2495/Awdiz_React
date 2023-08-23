import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const StateEffect = () => {
    const [counter,setCounter] = useState(0);

    useEffect(()=>{toast.success(`Counter Updated ${counter}`)},[counter])

    const increment = () =>{
        setCounter((x) => x+1);
    }
  return (
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default StateEffect;