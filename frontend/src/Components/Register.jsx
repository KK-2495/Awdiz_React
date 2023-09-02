import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from 'axios';
import api from "../ApiConfig/index";
import { AuthContext } from "../Context/AuthContext";


const Register = () => {
    const router = useNavigate();
    const {state} = useContext(AuthContext);
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
            const response = await api.post('/register',{
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

    useEffect(() => {
      if(state?.user?.name) {
        toast.success("You're already Logged in");
        router("/");
      }
    },[state]);
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