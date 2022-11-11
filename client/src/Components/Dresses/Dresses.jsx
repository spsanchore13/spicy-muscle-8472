import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
  MenuDivider,
  Heading,
  Text,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DressesInfo from "./DressesInfo";
import { getDressesProducts, getProducts } from "../../Redux/Product/action";

const Dresses = () => {
  const params = useParams();
  // console.log(params)

  const [shoes, setShoes] = useState([]);

  const productsData = useSelector((state) => state.ProductReducer.products);
  console.log(productsData);

  const dispatch = useDispatch();

  useEffect(() => {
    // const getProductsParams = {
    //   params: {
    //     type: "dresses",
    //   },
    // };
    dispatch(getDressesProducts());
  }, []);

  return (
    <Box>
      <Center>
        <Box>
          <Heading as="h4" size="md">
            Womens's Dresses
          </Heading>
          <Text>{}</Text>
        </Box>
        <Spacer />
        <Box>
          Sort :
          <Menu>
            <MenuButton
              px={4}
              py={2}
              marginBottom="1rem"
              marginRight="10px"
              marginLeft="10px"
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              _hover={{ bg: "gray.400" }}
              _expanded={{ bg: "blue.400" }}
              _focus={{ boxShadow: "outline" }}
            >
              Featured
              <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>Price : Low to High</MenuItem>
              <MenuItem> price High to Low</MenuItem>
              <MenuItem>A-Z</MenuItem>
              <MenuItem>Z-A</MenuItem>
              <MenuItem>Newest</MenuItem>
              <MenuDivider />
            </MenuList>
          </Menu>
        </Box>
      </Center>

      <SimpleGrid columns={[1, 2, 3]} gap={5}>
        {productsData &&
          productsData.map((item) => {
            // console.log(item);
            return (
              <DressesInfo
                key={item.id}
                item={item}
                // location={products}
              />
            );
          })}
      </SimpleGrid>
    </Box>
  );
};

export default Dresses;
