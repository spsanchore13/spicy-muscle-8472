import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaTeamspeak } from "react-icons/fa";
import Language from "./Language";
import Profile from "./Profile";
import { BsHandbag } from "react-icons/bs";
import RouteModal from "./Drawyer";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Product/action";
import mylogo from "../../images/logo.png";
import mylogotwo from "../../images/logotwo.png";

const Navbar = () => {
  const [text, setText] = useState("");
  const [isLargerThan] = useMediaQuery("(min-width: 1024px)");
  const [isSmallerThan] = useMediaQuery("(min-width: 769px)");
  const tok = useSelector((store) => store?.AuthReducer?.token);
  const token = localStorage.getItem("token") || tok;
  const navigate = useNavigate();
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

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(getProducts());
  };

  return (
    <Box position="sticky" top="0" zIndex={10}>
      <Box>
        <Image
          w={"100%"}
          src={
            "https://images.ctfassets.net/5de70he6op10/73vpJWzKmWO1fT2HwJ3p4B/b42cab1aedaef564d46e96fbd1cccaa0/Nov22_30Off_SOS_PrimaryBanner_LS_ThisWeekendOnly.jpg"
          }
          alt="banner"
        />
      </Box>

      <Flex justifyContent={"right"} bg={"#f7f6f2"}>
        <Box mx={"7"}>
          <Flex>
            <Flex alignItems={"center"}>
              <Icon fontSize={"2xl"} as={FaTeamspeak} />
              <Language />
            </Flex>
            <Flex alignItems={"center"}>
              <Profile />
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <Box bgColor="#FFFFFF">
        <Flex
          justifyContent={"space-between"}
          flexDirection={isLargerThan ? "row" : "column"}
          borderBottom={"1px solid darkgrey"}
        >
          {isLargerThan ? (
            <Flex alignItems={"center"} mx={"7"}>
              <Box
                box-shadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                p={"1"}
                _hover={{ borderTop: "5px solid #af7645" }}
                w={isLargerThan ? null : "50%"}
              >
                <Image
                  onClick={() => navigate("/")}
                  m={isLargerThan ? null : "auto"}
                  w={"150px"}
                  h={"50px"}
                  src={mylogo}
                  alt={"title1"}
                />
              </Box>
              <Box
                box-shadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                p={"1"}
                _hover={{ borderTop: "5px solid #af7645" }}
                w={isLargerThan ? null : "50%"}
              >
                <Image
                  m={isLargerThan ? null : "auto"}
                  w={"150px"}
                  h={"50px"}
                  src={mylogotwo}
                  alt={"title1"}
                />
              </Box>
            </Flex>
          ) : null}
          <Flex
            alignItems={"center"}
            gap={"15px"}
            mx={"7"}
            justifyContent={isLargerThan ? null : "space-between"}
            m={isLargerThan ? null : "7"}
          >
            <Box w={isLargerThan ? null : "90%"}>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  placeholder="Search AnthroLiving"
                  onChange={(e) => setText(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    onClick={handleSearch}
                    h="1.75rem"
                    size="sm"
                    bg="none"
                    _hover={{ bg: "none" }}
                  >
                    <Icon fontSize={"lg"} as={SearchIcon} />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
            <Link to={token ? "/cart" : "/"}>
              <Box>
                <Icon as={BsHandbag} fontSize={isLargerThan ? "xl" : "2xl"} />
              </Box>
            </Link>
            {isLargerThan ? null : <RouteModal />}
          </Flex>
        </Flex>
      </Box>
      {/* <Divider /> */}
      {isLargerThan ? (
        <Flex
          bgColor="#FFFFFF"
          alignItems={"center"}
          alignContent={"center"}
          justifyContent={isLargerThan ? "left" : null}
          fontSize={"sm"}
          px={"7"}
          gap={"15px"}
          py={"3"}
          borderBottom={"1px solid darkgrey"}
        >
          <NavLink
            to="/gift"
            style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          >
            Gifts
          </NavLink>
          <NavLink
            to="/new"
            style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          >
            New
          </NavLink>
          <NavLink
            to="/dresses"
            style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          >
            Dresses
          </NavLink>
          <NavLink
            to="/clothe"
            style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          >
            Clothing
          </NavLink>
          <NavLink
            to="/shoes"
            style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          >
            Shoes
          </NavLink>
          <NavLink
            to="/accesories"
            style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          >
            Accesories
          </NavLink>
          <NavLink
            to="/wedding"
            style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          >
            BHLDN Wedding
          </NavLink>
          <NavLink
            to="/furniture"
            style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          >
            Home & Furniture
          </NavLink>
          <NavLink
            to="/beauty"
            style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          >
            Beauty & Wellness
          </NavLink>
          <NavLink
            to="/garden"
            style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          >
            Garden & Outdore
          </NavLink>
          <NavLink
            to="/sale"
            style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          >
            Sale
          </NavLink>
        </Flex>
      ) : null}
    </Box>
  );
};

export default Navbar;
