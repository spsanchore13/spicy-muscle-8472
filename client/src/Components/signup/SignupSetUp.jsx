import { EmailIcon, PhoneIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
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
import { useReducer, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { signUp } from "../../Redux/Authentication/action";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
  name: "",
  mobile: 0,
  username: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "username":
      return { ...state, username: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "name":
      return { ...state, name: action.payload };
    case "mobile":
      return { ...state, mobile: action.payload };
    default:
      return state;
  }
};

export default function SignupModel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [state, setState] = useReducer(reducer, initialState);

  const hanldeSignUp = () => {
    dispatch(signUp(state, toast, navigate));
  };
  const handleClick = () => {
    setShow(!show);
  };
  const showLogin = () => {
    navigate("/login");
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
                <Input
                  type="text"
                  value={state.name}
                  onChange={(e) =>
                    setState({ type: "name", payload: e.target.value })
                  }
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon children={<AiFillEdit color="gray" />} />
                <Input
                  type="text"
                  value={state.username}
                  onChange={(e) =>
                    setState({ type: "username", payload: e.target.value })
                  }
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
                  type="password"
                  value={state.password}
                  onChange={(e) =>
                    setState({ type: "password", payload: e.target.value })
                  }
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon children={<EmailIcon color="gray.300" />} />
                <Input
                  type="email"
                  value={state.email}
                  onChange={(e) =>
                    setState({ type: "email", payload: e.target.value })
                  }
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon children={<PhoneIcon color="gray.300" />} />
                <Input
                  type="number"
                  value={state.mobile}
                  onChange={(e) =>
                    setState({ type: "mobile", payload: e.target.value })
                  }
                />
              </InputGroup>
            </Stack>
          </ModalBody>

          <Button
            mx={"6"}
            bg={"#4b5666"}
            color={"white"}
            onClick={hanldeSignUp}
          >
            Sign up
          </Button>

          <ModalFooter>
            Already Have an Account?
            <Text
              color={"black"}
              fontWeight={"semibold"}
              mx={"5"}
              onClick={showLogin}
            >
              Login
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
