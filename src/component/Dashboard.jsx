import { Box, SimpleGrid } from '@chakra-ui/react'
import { cities } from './city'
import { ComponentofCity } from './ComponentofCity'

export const Dashboard=()=>{
   

    
    return <SimpleGrid mt="40px" columns={{"sm":2,"md":3,"lg":4}} spacing="10">
        {cities?.map((ele)=>{
          return <ComponentofCity key={ele.id} data = {ele}/>
        }) }
    </SimpleGrid>

}