import {createContext, useEffect, useReducer} from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const AuthContext = createContext();

const initialState = { user: null, product: null };

const reducer = (state,action) =>{
    switch (action.type) {
        case "LOGIN":
            return{ ...state, user: action.payload };
        case "LOGOUT":
            localStorage.removeItem("userToken");
            toast.success("Logged out Succesfully");
            return{ ...state, user: null }
        default:
            return state;
    }
}

const HandleAuthContext = ({ children }) =>{
    const [state, dispatch] = useReducer(reducer,initialState);

    useEffect(()=>{
        const getCurrentUser = async () =>{
            const getTokenFromLs = JSON.parse(localStorage.getItem("userToken"));
            if(getTokenFromLs){
                const response = await axios.post("http://localhost:8000/api/v1/get-current-user",{getTokenFromLs});
                console.log(response)
                if(response.data.success){
                    dispatch({
                        type: "LOGIN",
                        payload: response.data.user
                    })
                }
            }
        }
        getCurrentUser();
    },[])

    
    return (
        <AuthContext.Provider value={{ dispatch, state }} >
            {children}
        </AuthContext.Provider>
    )

}


export default HandleAuthContext;