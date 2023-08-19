import { useNavigate } from "react-router-dom";


const Register = () => {
    const router = useNavigate();
  return (
    <>
    <h1>Register</h1>
    <button onClick={() => router('/login')}>Click here for Login page</button>
    <button onClick={() => router('/')}>Click here for Home Page</button>
    </>
  )
}

export default Register;