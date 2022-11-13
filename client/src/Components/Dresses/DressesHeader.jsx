import React from "react";
import { Center, Wrap, WrapItem } from "@chakra-ui/react";

import { Link } from "react-router-dom";

const DressesHeader = () => {
  return (
    <Center margin="auto" display={["none", "none", "flex", "flex"]}>
      <Wrap mt={10} marginBottom="1rem">
        <WrapItem>
          <Center w="170px" h="50px" bg="red.200">
            <Link to="/dresses">WEDDING DRESSES</Link>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="170px" h="50px" bg="green.200">
            <Link to="/dresses">CASUAL DRESSES</Link>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="170px" h="50px" bg="tomato">
            <Link to="/dresses">PARTY DRESSES</Link>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="170px" h="50px" bg="blue.200">
            <Link to="/dresses">WHITE DRESSES</Link>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="170px" h="50px" bg="blue.200">
            <Link to="/dresses">BLACK DRESSES</Link>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="170px" h="50px" bg="blue.200">
            <Link to="/dresses">FORMAL DRESSES</Link>
          </Center>
        </WrapItem>
      </Wrap>
    </Center>
  );
};

export default DressesHeader;
