import { Routes ,Route} from "react-router-dom"
import { Dashboard } from "../component/Dashboard"
import { Navbar } from "../component/Navbar"
import { Login } from "../component/Login"
import { Signup } from "../component/Signup" 

export const Allroute=()=>{
    return <>
    <Navbar></Navbar>
    <Routes>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>

    </Routes>

    </>
}