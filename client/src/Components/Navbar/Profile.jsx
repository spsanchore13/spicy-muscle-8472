import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";
import Signup from "../../pages/Signup";
import Login from "../../pages/Login";
import { useSelector } from "react-redux";

export default function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const tok = useSelector((store) => store?.AuthReducer?.token);
  const token = localStorage.getItem("token") || tok;
  const navigate = useNavigate()
  // const token = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/")
  };
  return (
    <>
      {!token && <Login />}
      {token ? (
        <Menu isOpen={isOpen}>
          <MenuButton
            px={1}
            py={3}
            variant="ghost"
            borderRadius={5}
            aria-label="Courses"
            fontWeight="normal"
            fontSize={"xs"}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
          >
            My Account {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </MenuButton>
          <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
            <MenuItem>
              <NavLink to="#">Dashboard</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="#">Wishlist</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/cart">Cartpage</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="#">Order history</NavLink>
            </MenuItem>
            <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Signup />
      )}
    </>
  );
}
