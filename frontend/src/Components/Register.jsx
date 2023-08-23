import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const router = useNavigate();
    const [userData, setUserData] = useState({name:"", email:"", password:"", confirmPassword:""});
    console.log(userData, "- userData");

    const handleChange = (event) => {
      // console.log(event.target.value);
      // console.log(event.target.name);
      setUserData({...userData,[event.target.name]: event.target.value});
    }

    const handleSubmit = (event) =>{
      event.preventDefault();
      alert("submitted succesfully;")
    }
  return (
    <>
    <h1>Register</h1>
    <form onSubmit={handleSubmit}>
      <label>Name:</label> <br />
      <input type="text" name="name" onChange={handleChange} /> <br />
      <label>Email:</label> <br />
      <input type="email" name="email" onChange={handleChange} /> <br />
      <label>Password:</label> <br />
      <input type="password" name="password" onChange={handleChange} /> <br />
      <label>Confirm Password:</label> <br />
      <input type="password" name="confirmpassword" onChange={handleChange} /> <br />
      <input type="submit" value="Register" />
    </form>
    <button onClick={() => router('/login')}>Click here for Login page</button>
    <button onClick={() => router('/')}>Click here for Home Page</button>
    </>
  )
}

export default Register;