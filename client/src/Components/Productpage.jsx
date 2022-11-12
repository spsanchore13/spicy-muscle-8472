import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/app/action'
import { useSearchParams,Link } from "react-router-dom"
import { Box, Button, Container, Grid, GridItem, Image, SimpleGrid, Stack,Text } from '@chakra-ui/react'


const Productpage = () => {
//const [data,setData] = useState()
const [searchParam] = useSearchParams()
const dispatch = useDispatch()
const {data,isError,isLoading} = useSelector((store)=>( store ))

useEffect(()=>{
    

    dispatch(getData())

},[])

// console.log(data,isError,isLoading)


  return (
 <Stack p={20}>
<SimpleGrid columns={[1,2,3,3]} spacing={10}>

{

  data?.map((el)=>(



<Box w="450px" h="600px" key={el.id}>
 <Link to=""><Image w="100%" h="100%" src={el.url} alt="" /></Link> 
  {/* <Box w="200px" h="20px" backgroundColor='white' overflow="visible" mt="-50px" ml="150px"><Text >{el.name}</Text></Box> */}
  <Button mt="-100px" ml="150px" bgColor="white">{el.name}</Button>
    </Box>

 

  ))
}

</SimpleGrid>


 </Stack>
  )
}

export default Productpage

