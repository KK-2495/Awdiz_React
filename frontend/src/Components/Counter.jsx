
const Counter = (props) => {
    // const [counter, setCounter] = useState(0);

    // console.log(counter, "-counter");
    // console.log(props);
    const {testname, myName, setName, myAge, myStudents} = props;

    const changeName = () =>{
      setName('abc')
    }
    // console.log(testname, setName);
  return (
    <div>
      <h1>Name : {testname}</h1>
      <button onClick={changeName}>Click to change the Name</button>
        {/* <h1>Counter - {counter}</h1>
        <button onClick={()=> setCounter((prevState) => prevState + 1) }>+</button>
        <button onClick={()=> setCounter((prevState) => prevState - 1)}>-</button> */}
        {/* <button onClick={()=> setCounter((prevState) => prevState * 2)}>*</button> */}
    </div>
  )
}

export default Counter;