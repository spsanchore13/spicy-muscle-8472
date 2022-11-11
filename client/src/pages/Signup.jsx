import { Box, Heading } from "@chakra-ui/layout";
import React, { useState } from "react";
import SignupModel from "../components/signup/SignupSetUp";

const Signup = () => {
  const [auth, setAuth] = useState(false);

  // const handleThat = () => {
  //   setAuth(!auth);
  // };
  return (
    <Box>
      <Heading>Sign up</Heading>
      <SignupModel />
    </Box>
  );
};

export default Signup;
