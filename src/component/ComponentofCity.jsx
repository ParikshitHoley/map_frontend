import { Box } from '@chakra-ui/react'
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { Signupactioncreator,CITY } from '../redux/auth/action'
export const ComponentofCity=(prop)=>{
    const dispatch=useDispatch()
    const {name,id} = prop.data
    const navigate=useNavigate()
    
    return <Box onClick={()=>{
        dispatch(Signupactioncreator(CITY,name))
        navigate("/map")
      }} borderRadius={"10px"} cursor={"pointer"} padding={"40px"} width={{"sm":"200px","md":"300px","lg":"300px"}} height="100px" background={"pink.600"} color="white" >{name}</Box>
}