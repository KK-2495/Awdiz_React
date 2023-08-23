import { useState } from "react"
import "./DynamicStyle.css";

const DynamicStyle = () => {
    const [activeButton, setActiveButton] = useState(false);

    const handleButtonClick = () =>{
        setActiveButton(!activeButton);
    }

    const myClassName = activeButton ? "active-style" : "inActive-style"

  return (
    <div>
        <button onClick={handleButtonClick} className={myClassName}>{activeButton ? "active" : "Inactive"}</button>
    </div>
  )
}

export default DynamicStyle;