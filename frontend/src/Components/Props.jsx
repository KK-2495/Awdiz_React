
const Props = () => {
  const handleClick = () => {
    alert('button clicked!');
  }
  return <MyChildComponent text="Click me from parent component" changeButton={handleClick}/>
};

const MyChildComponent = ({ text, changeButton }) => {
  return <button onClick={changeButton}>Hi: {text}</button>;
}
export default Props;