import {
  Box,
  Center,
  Heading,
  Text,
  Wrap,
  WrapItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Spacer,
  MenuDivider,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import React from "react";

const Productheader = () => {
  return (
    <Center margin='auto'>
      <Wrap mt={10} marginBottom="1rem">
        <WrapItem>
          <Center w="170px" h="80px" bg="red.200">
            <Link to="/products">EMBELLISHED SHOES</Link>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="170px" h="80px" bg="green.200">
            <Link to="/products">SNEAKERS</Link>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="170px" h="80px" bg="tomato">
            <Link to="/products">BIRKENSTOCK CLASSICS</Link>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="170px" h="80px" bg="blue.200">
            <Link to="/products">COZY STYLES</Link>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="170px" h="80px" bg="blue.200">
            <Link to="/products">LEATHER BOOTS</Link>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="170px" h="80px" bg="blue.200">
            <Link to="/products">JEFERY CAMBELL</Link>
          </Center>
        </WrapItem>
      </Wrap>
     
    </Center>
  );
};

export default Productheader;
