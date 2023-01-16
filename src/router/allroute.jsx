import { Routes ,Route} from "react-router-dom"
import { Dashboard } from "../component/Dashboard"
export const Allroute=()=>{
    return <>
    <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route></Route>
        <Route></Route>

    </Routes>

    </>
}