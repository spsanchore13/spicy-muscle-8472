import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export default function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        px={1}
        py={3}
        variant="ghost"
        borderRadius={5}
        aria-label="Courses"
        fontWeight="normal"
        fontSize={'xs'}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        My Account {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        <MenuItem>Dashboard</MenuItem>
        <MenuItem>Wishlist</MenuItem>
        <MenuItem>Cartpage</MenuItem>
        <MenuItem>Order history</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}
