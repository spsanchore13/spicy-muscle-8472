import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSearchParams } from "react-router-dom";
const PaymentSuccessPage = () => {
  const seachQuery = useSearchParams()[0];

  const referenceNum = seachQuery.get("reference");

  setTimeout(function () {
    window.location.replace("/");
  }, 5000);

  return (
    <Box>
      <VStack h="100vh" justifyContent={"center"}>
        <Heading textTransform={"uppercase"} color="green">
          Order Successfull
        </Heading>

        <Text>Reference No.{referenceNum}</Text>
      </VStack>
    </Box>
  );
};

export default PaymentSuccessPage;
