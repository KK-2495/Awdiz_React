import { useNavigate } from "react-router-dom";

const Login = () => {
    const router = useNavigate();
  return (
    <>
    <h1>Login</h1>
    <button onClick={() => router('/register')}>Click here for Register page</button>
    <button onClick={() => router('/')}>Click here for Home page</button>
    </>
  )
}

export default Login;