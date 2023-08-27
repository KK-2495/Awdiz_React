import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Home() {
    const router = useNavigate();
    const {state,dispatch} = useContext(AuthContext);

    const logout = () => {
        dispatch({
            type: "LOGOUT"
        })
    }
    
    return(
        <div className="w-[100%] h-[100%] border-black border-[1px] flex justify-center items-center">
            <div className=" w-[70%] h-[150px] flex justify-around flex-col items-center">
            <div className="flex justify-between w-[50%]">
                <h1>User:{state?.user?.name} </h1>
                <button className="bg-red-200 p-2 rounded text-black" onClick={logout}>logout</button>
            </div>
            <div  className="flex justify-between w-2/5">
            <button onClick={() => router('/login')} className="bg-slate-600 text-white p-2 rounded" >Login</button> <br />
            <button onClick={() => router('/register')} className="bg-slate-600 text-white p-2 rounded">Register</button> <br />
            <button onClick={() => router('/counter')} className="bg-slate-600 text-white p-2 rounded">Counter</button>
            </div>
            </div>
        </div>
    )
}

export default Home;