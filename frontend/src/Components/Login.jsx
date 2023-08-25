import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const router = useNavigate();

    const [userData, setUserData] = useState({email: "", password: ""});

    const handleChange = (event) =>{
      setUserData({...userData,[event.target.name]: event.target.value});
    }

    const handleSubmit = async (event) =>{
      event.preventDefault();
      if(userData.email && userData.password){
        try {
          const response = await axios.post('http://localhost:8000/api/v1/login',{
            email: userData.email,
            password: userData.password
          });
          if(response.data.success){
            toast.success(response.data.message);
          }
        } catch (error) {
          toast.error("response not found");
        }
      }else{
        toast.error("Email and password required to login");
      }
    }

  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <label>Email</label> <br />
      <input type="email" name="email" onChange={handleChange} /> <br />
      <label>Password</label> <br />
      <input type="password" name="password" onChange={handleChange} /> <br />
      <input type="submit" value="Login" />
    </form>
    <button onClick={() => router('/register')}>Click here for Register page</button>
    <button onClick={() => router('/')}>Click here for Home page</button>
    </>
  )
}

export default Login;