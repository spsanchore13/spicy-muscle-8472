import { Flex, Stack, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutOrderSummery from "../components/Checkout/CheckoutOrderSummery";
import ShippingForm from "../components/Checkout/ShippingForm";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.CartReducer.items);
  const [isNotSmallScreen] = useMediaQuery("(min-width: 786px)");
  return (
    <Flex p={5} gap={5} direction={isNotSmallScreen ? "row" : "column"}>
      <Stack w={["100%", "100%", "100%", "70%"]} border="1px solid black">
        <ShippingForm />
      </Stack>
      <Stack
        position="sticky"
        top="50px"
        w={["100%", "100%", "25%", "25%"]}
        border="1px solid black"
        h="60vh"
        py="15px"
      >
        <CheckoutOrderSummery bill={cartItems.bill} />
      </Stack>
    </Flex>
  );
};

export default CheckoutPage;
