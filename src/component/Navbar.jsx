import { SimpleGrid ,Input,Box,Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux' 
import {SearchIcon} from '@chakra-ui/icons'
export const Navbar=()=>{
    const authdata = useSelector(store=>store.auth);
    const dispatch=useDispatch()
    return <SimpleGrid height="60px" display={"flex"} justifyContent={"space-evenly"}  background={"pink.600"} color="white" columns={3} spacing="10" >
        <Box lineHeight={"60px"}><Link to={"/dashboard"}>Dashboard</Link></Box>
        {!authdata.logintoken? 
        <><Box lineHeight={"60px"}><Link to={"/login"}>Login</Link></Box>
        <Box lineHeight={"60px"}><Link to={"/signup"}>Signup</Link></Box></> : <Box lineHeight={"60px"}><Button background={"white"} color="pink.600" onClick={()=>{
           dispatch({type:"LOGOUT"})
        }}>Logout</Button></Box>}
    </SimpleGrid>
}