import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../Redux/Cart/action";
import { Link } from "react-router-dom";
import {
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useMediaQuery,
  useToast,
  VStack,
} from "@chakra-ui/react";
import Basket from "../components/Cart/Basket";
import OrderSummery from "../components/Cart/OrderSummery";

const CartPage = () => {
  const [isNotSmallScreen] = useMediaQuery("(min-width: 786px)");
  const cartItems = useSelector((state) => state.CartReducer.items);
  
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    dispatch(getCartItems(userId));
  }, []);

  return (
    <Flex p={5} gap={10} direction={isNotSmallScreen ? "row" : "column"}>
      <Stack
        w={["100%", "100%", "100%", "70%"]}
        // border="1px solid black"
        h="100vh"
      >
        <HStack justify="space-evenly">
          <Text
            // border="1px solid black"
            w="350px"
            align="center"
            fontSize="md"
            fontWeight="bold"
            casing="uppercase"
          >
            Item
          </Text>
          <Text
            // border="1px solid black"
            w="170px"
            align="right"
            fontSize="md"
            fontWeight="bold"
            casing="uppercase"
          >
            Item Price
          </Text>
          <Text
            // border="1px solid black"
            w="120px"
            align="right"
            fontSize="md"
            fontWeight="bold"
            casing="uppercase"
          >
            Quantity
          </Text>
          <Text
            // border="1px solid black"
            w="150px"
            align="right"
            fontSize="md"
            fontWeight="bold"
            casing="uppercase"
          >
            Total Price
          </Text>
        </HStack>
        <Divider />
        {cartItems.items &&
          cartItems.items.map((item) => (
            <Basket key={item.productId} {...item} />
          ))}
      </Stack>
      <Stack
        position="sticky"
        top="50px"
        w={["100%", "100%", "25%", "25%"]}
        border="1px solid black"
        h="60vh"
        py="15px"
      >
        <OrderSummery bill={cartItems.bill} />
      </Stack>
    </Flex>
  );
};

export default CartPage;
