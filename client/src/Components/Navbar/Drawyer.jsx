import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  useMediaQuery,
  Box,
  Icon,
} from "@chakra-ui/react";

import React from "react";
import { NavLink } from "react-router-dom";
export default function RouteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isLargerThan] = useMediaQuery("(min-width: 1024px)");
  const baseStyle = {
    color: "black",
    textDecoration: "none",
  };

  const activeStyle = {
    color: "#c07174",
    textDecoration: "none",
    transition: "0.5s",
    borderBottom: "2px solid black",
  };
  return (
    <>
      <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <Icon as={HamburgerIcon} fontSize={isLargerThan ? "xl" : "2xl"} />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Anthropology</DrawerHeader>

          <DrawerBody lineHeight={'45px'} >
          <Box><NavLink to="/gift"  style={({ isActive }) => (isActive ? activeStyle : baseStyle)} >Gifts</NavLink></Box>
          <Box><NavLink to="/new"  style={({ isActive }) => (isActive ? activeStyle : baseStyle)} >New</NavLink></Box>
          <Box><NavLink to="/dresses"  style={({ isActive }) => (isActive ? activeStyle : baseStyle)} >Dresses</NavLink></Box>
          <Box><NavLink to="/clothe"  style={({ isActive }) => (isActive ? activeStyle : baseStyle)} >Clothing</NavLink></Box>
          <Box><NavLink to="/shoes"  style={({ isActive }) => (isActive ? activeStyle : baseStyle)} >Shoes</NavLink></Box>
          <Box><NavLink to="/accesories"  style={({ isActive }) => (isActive ? activeStyle : baseStyle)} >Accesories</NavLink></Box>
          <Box><NavLink to="/wedding"  style={({ isActive }) => (isActive ? activeStyle : baseStyle)} >BHLDN Wedding</NavLink></Box>
          <Box><NavLink to="/furniture"  style={({ isActive }) => (isActive ? activeStyle : baseStyle)} >Home & Furniture</NavLink></Box>
          <Box><NavLink to="/beauty"  style={({ isActive }) => (isActive ? activeStyle : baseStyle)} >Beauty & Wellness</NavLink></Box>
          <Box><NavLink to="/garden"  style={({ isActive }) => (isActive ? activeStyle : baseStyle)} >Garden & Outdore</NavLink></Box>
          <Box><NavLink to="/sale"  style={({ isActive }) => (isActive ? activeStyle : baseStyle)} >Sale</NavLink></Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
