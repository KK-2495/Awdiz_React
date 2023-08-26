import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Home() {
    const router = useNavigate();
    const {state} = useContext(AuthContext);

    
    return(
        <div>
            <h1>Home Page User:{state?.user?.name} </h1>
            <button onClick={() => router('/login')}>Login</button> <br />
            <button onClick={() => router('/register')}>Register</button> <br />
            <button onClick={() => router('/counter')}>Counter</button>
        </div>
    )
}

export default Home;