import { Box, Heading } from '@chakra-ui/layout'
import React from 'react'
import SignupModel from '../components/signup/Modal'

const Signup = () => {
  return (
    <Box>
        <Heading>Sign up</Heading>
        <SignupModel/>
    </Box>
  )
}

export default Signup