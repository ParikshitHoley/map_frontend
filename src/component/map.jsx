import { Box, Button } from "@chakra-ui/react"

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const Map=()=>{
    const authdata = useSelector(store=>store.auth);
    const navigate=useNavigate();
    const key = "AIzaSyB7laagbuVtrCoqHweVloeQe0LmdTLlivw";
    var nameofCity=authdata.city ;
    console.log(nameofCity)
    const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCx2KxcO125HIJ8thYJp3QJBpFygdEtiZk&q=${nameofCity}`
    return <Box >
        <Box mt="30px" ml="20px" mr="20px">
         <iframe src={url} style={{width:"100%" , height:"500px" , allowfullscreen:true}} ></iframe>
       
        </Box>
        <Button  onClick={()=>{
            navigate("/dashboard")
        }} mt="20px" color="white" width="100px" background={"pink.600"}>Back</Button>
        </Box>
       
    
}


// AIzaSyCx2KxcO125HIJ8thYJp3QJBpFygdEtiZk  my 

// AIzaSyA-P7qneZTr9cIBmxty1VGkXZILdQXLzuw  niks


