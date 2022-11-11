import { Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Button,
  GridItem,
  SimpleGrid,
  Select,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  Heading,
  Checkbox,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import axios from "axios";

const ShippingForm = () => {
  const amount = useSelector((state) => state.CartReducer.items.bill);

  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  const [address, setAddress] = useState({
    country: "",
    firstName: "",
    lastName: "",
    streetAddress: "",
    address2: "",
    city: "",
    region: "",
    pinCode: "",
    mobileNumber: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleCheckout = async () => {
    // console.log("hi");
    const {
      data: { order },
    } = await axios.post(
      "http://localhost:8080/checkout/order/636ccf3ff2b55f7b5ac1f105",
      {
        amount,
      }
    );
    // console.log(order);
    const options = {
      key: "rzp_test_3VrwWAP6CbWSsL",
      amount: order.amount,
      currency: "INR",
      name: "BetterMart",
      description: "Tutorial of RazorPay",
      image:
        "https://media-exp1.licdn.com/dms/image/D4D03AQG-maywhM50mw/profile-displayphoto-shrink_400_400/0/1666174115805?e=1673481600&v=beta&t=tkIpIyaKve2gY4LUdGPqzCv_rSqnBpYu0oxUcN6xLLw",
      order_id: order.id,
      callback_url: "http://localhost:8080/checkout/paymentverification",
      prefill: {
        name: "Shantilal Patliya",
        email: "shantilalpatliya18@gmail.com",
        contact: "9784102014",
      },
      notes: {
        address: "Bettermart Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="xl">Shipping Address</Heading>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select
              name="country"
              borderRadius="none"
              onChange={handleChange}
              value={address.country}
            >
              <option>Select Country</option>
              <option value="in">India</option>
              <option value="usa">United States of America</option>
              <option value="uae">United Arab Emirates</option>
              <option value="nmk">North Macedonia</option>
              <option value="de">Germany</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              name="firstName"
              placeholder="First Name"
              borderRadius="none"
              onChange={handleChange}
              value={address.firstName}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input
              name="lastName"
              placeholder="Last Name"
              borderRadius="none"
              onChange={handleChange}
              value={address.lastName}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Street Address</FormLabel>
            <Input
              name="streetAddress"
              placeholder="Street Address"
              borderRadius="none"
              onChange={handleChange}
              value={address.streetAddress}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address 2</FormLabel>
            <Input
              name="address2"
              placeholder="Appartment Number , Building"
              borderRadius="none"
              onChange={handleChange}
              value={address.address2}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input
              name="city"
              placeholder="City"
              borderRadius="none"
              onChange={handleChange}
              value={address.city}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Province or Region</FormLabel>
            <Input
              name="region"
              placeholder="Province or Region"
              borderRadius="none"
              onChange={handleChange}
              value={address.region}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Pin Code</FormLabel>
            <Input
              name="pinCode"
              placeholder="Pin Code"
              borderRadius="none"
              onChange={handleChange}
              value={address.pinCode}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Mobile Number</FormLabel>
            <Input
              name="mobileNumber"
              placeholder="Mobile Number"
              borderRadius="none"
              onChange={handleChange}
              value={address.mobileNumber}
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <Button
            size="lg"
            w="full"
            bgColor="#4A5766"
            color="#FFFFFF"
            fontWeight="normal"
            letterSpacing="2px"
            _hover={{
              bgColor: "white",
              border: "1px solid #4A5766",
              color: "#4A5766",
            }}
            borderRadius="none"
            onClick={handleCheckout}
          >
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default ShippingForm;
