import { Box, Spacer, Heading, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ShoesProductsInfo from "../Shoes/ShoesProductsInfo";
import { useDispatch, useSelector } from "react-redux";
import { getShoesProducts } from "../../Redux/Product/action";
import { useParams } from "react-router-dom";
import SearchBar from "../SearchBar";
import Filter from "../Dresses/Filter";

const ShoesProducts = ({ products }) => {
  const params = useParams();
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
    //     type: "shoes",
    //   },
    // };
    dispatch(getShoesProducts());
  }, []);

  return (
    <Box>
      <Flex spacing="20px" marginBottom={4} width="70%" marginLeft={37}>
        <Box direction={["column", "row"]}>
          <Heading as="h4" size="md">
            Womens's Shoes
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
        <Box marginLeft="10px" direction={["column", "row"]}>
          <Filter></Filter>
        </Box>
      </Flex>

      <SimpleGrid columns={[1, 2, 3]} gap={5}>
        {productsData &&
          productsData.map((item) => {
            // console.log(item);
            return (
              <ShoesProductsInfo
                key={item.id}
                item={item}
                location={products}
              />
            );
          })}
      </SimpleGrid>
    </Box>
  );
};

export default ShoesProducts;
