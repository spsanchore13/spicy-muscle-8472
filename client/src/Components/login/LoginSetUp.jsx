import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
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
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  Text,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../Redux/Authentication/action";
import { useNavigate } from "react-router-dom";

export default function LoginModel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hanldeLogin = () => {
    const payload = {
      email,
      password,
    };
    dispatch(LoginUser(payload, toast, navigate)).then(() => {
      onClose();
    });
  };
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <Text onClick={onOpen}>Login</Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent fontFamily={"cursive"}>
          <ModalHeader>
            <Text textAlign={"center"}>Sign In</Text>
            <Divider />
            <Text fontSize={"xs"} mx={"10"} textAlign={"center"}>
              Sign in so you can save items to your wishlists, track your
              orders, and check out faster!
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <InputGroup>
                <InputLeftAddon children={<EmailIcon color="gray.300" />} />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
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
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
            </Stack>
          </ModalBody>

          <Button mx={"6"} bg={"#4b5666"} color={"white"} onClick={hanldeLogin}>
            Login
          </Button>

          <ModalFooter>
            Don't Have an Account?
            <Text color={"black"} fontWeight={"semibold"} mx={"5"} onClick={""}>
              Register
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
