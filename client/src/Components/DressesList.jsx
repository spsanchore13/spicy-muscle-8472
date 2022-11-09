import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

const DressesList = ({
  _id,
  type,
  name,
  brand,
  colors,
  price,
  seller,
  images,
  description,
  febric,
  rating,
  sleeves_length,
}) => {
  console.log(colors);
  return (
    <Box
      w="220px"
      h="400"
      // border="1px solid gray"
    >
      <Box>
        {images &&
          images.slice(0, 1).map((pic) => {
            return (
              <Image w="100%" h="250px" src={pic.image} alt="product image" />
            );
          })}
      </Box>
      <HStack
        h="70px"
        //   border="1px solid gray"
      >
        <Text>{name}</Text>
      </HStack>
      <HStack
        justify="space-between"
        //    border="1px solid gray"
        align="center"
      >
        <Text w="40px" mt={0}>
          ₹ {price}
        </Text>
        <Button variant="ghost" colorScheme="pink">
          Quick View
        </Button>
      </HStack>
    </Box>
  );
};

export default DressesList;
