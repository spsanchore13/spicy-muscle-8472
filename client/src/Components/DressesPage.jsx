import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Product/action";
import { Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import DressesFilter from "./DressesFilter";
import DressesList from "./DressesList";

const DressesPage = () => {
  const dresses = useSelector((state) => state.ProductReducer.products);
  console.log(dresses);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductsParams = {
      params: {
        type: "dresses",
      },
    };
    dispatch(getProducts(getProductsParams));
  }, []);

  return (
    <Stack>
      <SimpleGrid>
        <Flex>
          <DressesFilter />
        </Flex>
        <Stack w="80%">
          <SimpleGrid columns={[1, 1, 4, 4]} spacing={10}>
            {dresses &&
              dresses.map((item) => {
                console.log(item);
                return <DressesList key={item._id} {...item} />;
              })}
          </SimpleGrid>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};

export default DressesPage;
