import { Routes ,Route} from "react-router-dom"
import { Dashboard } from "../component/Dashboard"
import { Navbar } from "../component/Navbar"
import { Login } from "../component/Login"
import { Signup } from "../component/Signup"
import { PrivateComponent } from "../component/Private" 
import { Map } from "../component/map"

export const Allroute=()=>{
    return <>
    <Navbar></Navbar>
    <Routes>
        <Route path="/dashboard" element={<PrivateComponent><Dashboard/></PrivateComponent>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/map" element={<PrivateComponent><Map/></PrivateComponent>}></Route>

    </Routes>

    </>
}