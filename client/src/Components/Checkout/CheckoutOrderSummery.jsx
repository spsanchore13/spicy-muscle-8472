import {
  Button,
  Divider,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { Link } from "react-router-dom";

const CheckoutOrderSummery = ({ bill }) => {
  const handleCheckout = () => {};

  return (
    <>
      <HStack w="100%" justify="center">
        <Heading size="md">Order Summery</Heading>
      </HStack>
      <VStack align="left" p={6}>
        <HStack>
          <Text fontWeight="semibold">Subtotal </Text>
          <Spacer />
          <Text>$ {bill}</Text>
        </HStack>
        <Divider />
        <HStack>
          <Text fontWeight="semibold">Shipping Chargel </Text>
          <Spacer />
          <Text>$ 0</Text>
        </HStack>
        <Divider />
        <HStack>
          <Text fontWeight="semibold">Estimated Tex </Text>
          <Spacer />
          <Text>$ 0</Text>
        </HStack>
        <Divider />
        <HStack>
          <Text fontWeight="bold">Total </Text>
          <Spacer />
          <Text fontWeight="bold">$ {bill}</Text>
        </HStack>
        <Spacer />
        <Link to="/cart">
          <HStack>
            <Button
              w="100%"
              borderRadius="none"
              size="lg"
              bgColor="#4A5766"
              color="#FFFFFF"
              fontWeight="normal"
              letterSpacing="2px"
              _hover={{
                bgColor: "white",
                border: "1px solid #4A5766",
                color: "#4A5766",
              }}
            >
              EDIT CART
            </Button>
          </HStack>
        </Link>
      </VStack>
    </>
  );
};

export default CheckoutOrderSummery;
