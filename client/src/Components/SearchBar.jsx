import { Box, Input } from '@chakra-ui/react'
import React from 'react'


export default function SearchBar({value, changeInput}) {
  return (
    <Box className='searchBar-wrap'>
    
    
    <Input
      type='text'
      placeholder='Search Products'
      value={value}
      onChange={changeInput}
    />
  </Box>
  )
}
