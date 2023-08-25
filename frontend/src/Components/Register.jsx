import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from 'axios';


const Register = () => {
    const router = useNavigate();
    const [userData, setUserData] = useState({name:"", email:"", password:"", confirmPassword:""});
    // console.log(userData, "- userData");

    const handleChange = (event) => {
      // console.log(event.target.value);
      // console.log(event.target.name);
      setUserData({...userData,[event.target.name]: event.target.value});
    }

    const handleSubmit = async (event) =>{
      event.preventDefault();
      if(userData.name && userData.email && userData.password && userData.confirmPassword){
        if(userData.password === userData.confirmPassword){
          try {
            const response = await axios.post('http://localhost:8000/api/v1/register',{
              name:userData.name,
              email:userData.email,
              password:userData.password,
              confirmPassword:userData.confirmPassword
          });
          if(response.data.success){
            toast.success(response.data.message);
            router('/login');
          }
          } catch (error) {
            toast.error("response not found");
          }
        }else{
          toast.error("Passwords does not match");
        }
      }else{
        toast.error("All fields are Mandatory.!");
      }
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
      <input type="password" name="confirmPassword" onChange={handleChange} /> <br />
      <input type="submit" value="Register" />
    </form>
    <button onClick={() => router('/login')}>Click here for Login page</button>
    <button onClick={() => router('/')}>Click here for Home Page</button>
    </>
  )
}

export default Register;