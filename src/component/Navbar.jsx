import { SimpleGrid ,Input,Box} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {SearchIcon} from '@chakra-ui/icons'
export const Navbar=()=>{
    return <SimpleGrid height="60px"  background={"pink.600"} color="white" columns={3} spacing="10" >
        <Box lineHeight={"60px"}><Link to={"/dashboard"}>Dashboard</Link></Box>
        <Box lineHeight={"60px"}><Link to={"/login"}>Login</Link></Box>
        <Box lineHeight={"60px"}><Link to={"/signup"}>Signup</Link></Box>
    </SimpleGrid>
}