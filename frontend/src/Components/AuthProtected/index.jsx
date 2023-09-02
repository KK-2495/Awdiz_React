import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


function AuthProtected ({ children }) {

    const {state} = useContext(AuthContext);

    const router = useNavigate();

    const login = () => {
        router("/login");
    }
    if(state?.user?.name){
        toast.success(state?.user?.name);
        return(children);
    }else{
        return(
            <>
            <h1>This Page is Auth Protected, You need to login </h1>
            <button onClick={login}>Click here to Login</button>
        </>
        )
    }
}

export default AuthProtected;