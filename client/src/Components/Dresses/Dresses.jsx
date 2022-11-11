import {
  Box,
  Spacer,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  FormControl,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DressesInfo from "./DressesInfo";
import {
  getDressesProducts,
 
} from "../../Redux/Product/action";
import Filter from "./Filter";
import SearchBar from "../SearchBar";

const Dresses = () => {
  const params = useParams();
  // console.log(params)

  const [shoes, setShoes] = useState([]);

  const productsData = useSelector(
    (state) => state.ProductReducer.filteredItems
  );
  console.log(productsData);

  const dispatch = useDispatch();

  const [list, setList] = useState(productsData);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const applyFilters = () => {
    let updatedList = productsData;

    if (searchInput) {
      console.log(searchInput);
      updatedList = updatedList.filter(
        (item) =>
          item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }
    setList(updatedList);
    !updatedList ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [searchInput]);

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
      <Flex spacing="20px" marginBottom={4} width="70%" marginLeft={37}>
        <Box direction={["column", "row"]}>
          <Heading as="h4" size="md">
            Womens's Dresses
          </Heading>
        </Box>
        <Spacer />
        <Box direction={["column", "row"]}>
          <Text>{productsData?.length} Products</Text>
        </Box>
        <Spacer />
        <Box direction={["column", "row"]}>
          <SearchBar
            value={searchInput}
            changeInput={(e) => setSearchInput(e.target.value)}
          />
        </Box>
        <Spacer />
        <Box direction={["column", "row"]}>
          <Filter></Filter>
        </Box>
      </Flex>

      <SimpleGrid columns={[1, 1, 2, 3]} gap={5}>
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
