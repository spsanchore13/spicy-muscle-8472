import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Flex,
  Text,
} from "@chakra-ui/react";

import React from "react";

const Language = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        px={1}
        py={3}
        fontSize={"xs"}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        transition="all 0.2s"
        borderRadius="md"
      >
        English {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </MenuButton>
      <MenuList>
        <MenuItem>Currency</MenuItem>
        <MenuItem color="#3289a4">USD (₹)</MenuItem>
        <MenuDivider />
        <MenuItem>Language</MenuItem>
        <MenuItem>
          <Flex gap={"10px"} textDecoration="underline">
            <Text color="#3289a4">English</Text>
            <Text>Hindi</Text>
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Language;
