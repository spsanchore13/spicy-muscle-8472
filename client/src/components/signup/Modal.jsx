import { FocusLock } from "@chakra-ui/focus-lock";
import {
  EmailIcon,
  LockIcon,
  PhoneIcon,
  UnlockIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Heading,
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  InputLeftElement,
  Text,
  Divider,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
export default function SignupModel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);
  console.log(show);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <Button onClick={onOpen}>Sign up</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent fontFamily={"cursive"}>
          <ModalHeader>
            <Text textAlign={"center"}>Create An Account</Text>
            <Divider />
            <Text fontSize={"xs"} mx={"10"} textAlign={"center"}>
              Welcome to Anthropologie! It's quick and easy to set up an
              account.
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <InputGroup>
                <InputLeftAddon children={<FaUserCircle color="gray" />} />
                <Input type="text" placeholder="Name" />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon children={<AiFillEdit color="gray" />} />
                <Input type="text" placeholder="Username" />
              </InputGroup>
              <InputGroup size="md">
                <InputLeftAddon
                  children={
                    <Text p={"0"} m={"0"} onClick={handleClick}>
                      {show ? (
                        <ViewIcon color="gray.500" w={4} h={4} />
                      ) : (
                        <ViewOffIcon color="gray.500" w={4} h={4} />
                      )}
                    </Text>
                  }
                />
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon children={<EmailIcon color="gray.300" />} />
                <Input type="tel" placeholder="Email" />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon children={<PhoneIcon color="gray.300" />} />
                <Input type="tel" placeholder="Mobile No." />
              </InputGroup>
            </Stack>
          </ModalBody>

          <Button mx={"6"} bg={"#4b5666"} color={"white"}>
            Sign up
          </Button>

          <ModalFooter>
            Already Have an Account?{" "}
            <Text color={"black"} fontWeight={"semibold"} mx={"5"}>
              Login
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
