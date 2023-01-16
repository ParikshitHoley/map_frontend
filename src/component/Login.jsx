import { useDispatch,useSelector } from 'react-redux'
import {
    FormControl,
    FormLabel,
    CircularProgress, CircularProgressLabel ,
    FormErrorMessage,
    FormHelperText,Input,Button,Text,
  } from '@chakra-ui/react'
  import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
  import { Userlogin } from '../redux/auth/action'
export const Login=()=>{
     const dispatch=useDispatch()
    const authdata =useSelector(store=>store.auth);
    

   const [data,setData] =useState({});
   const HandleChange=(e)=>{
    const {id,value} = e.target;
    setData({...data,[id]:value})
   }

   const Handle=()=>{
    dispatch(Userlogin(data))
   }
    const navigate=useNavigate()

    if(authdata.logintoken)
    {
        navigate("/dashboard")
    }

    return <FormControl width="40%" margin={"auto"} mt="20px">
    <FormLabel>Email address</FormLabel>
    <Input id="email" onChange={HandleChange} type='email' />
    <FormLabel>Password</FormLabel>
    <Input id="password" onChange={HandleChange} type='Password' />
    <FormLabel></FormLabel>
    {authdata.loginloading ? <CircularProgress isIndeterminate color='pink.500' /> :  <Button onClick={Handle} color="white" background={"pink.600"}>Login</Button>}
   
    <FormLabel></FormLabel>
    <Text onClick={()=>{
        navigate("/signup")
    }} cursor={"pointer"} color={"pink.600"}>create a new acount ?</Text>
    <FormLabel></FormLabel>
    <Text color="red">{authdata.signuperror? "Something wents wrong !" : null}</Text>
  </FormControl>
}