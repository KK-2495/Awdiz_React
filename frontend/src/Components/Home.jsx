import { useNavigate } from "react-router-dom";

function Home() {
    const router = useNavigate();
    return(
        <div>
            <h1>Home Page</h1>
            <button onClick={() => router('/login')}>Login</button> <br />
            <button onClick={() => router('/register')}>Register</button> <br />
            <button onClick={() => router('/counter')}>Counter</button>
        </div>
    )
}

export default Home;