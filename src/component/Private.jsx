import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateComponent =({children})=>{
    const authdata = useSelector(store=>store.auth)

    if(authdata.logintoken)
    {
        return children 
    }
    else{
        return <Navigate to="/login"/>
    }

}

