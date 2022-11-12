import {
  Box,
  Spacer,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Button,
  Center,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ShoesProductsInfo from "../Shoes/ShoesProductsInfo";
import { useDispatch, useSelector } from "react-redux";
import { getShoesProducts } from "../../Redux/Product/action";
import { useParams } from "react-router-dom";
import SearchBar from "../SearchBar";
import Filter from "../Dresses/Filter";
import Spinner from "../Spinner/Spinner"

const ShoesProducts = ({ products }) => {
  const params = useParams();
  const [shoes, setShoes] = useState([]);

  const productsData = useSelector(
    (state) => state.ProductReducer.filteredItems
  );

  const dispatch = useDispatch();

  // Getting Data
  useEffect(() => {
    dispatch(getShoesProducts());
  }, []);

  //Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentpages = productsData?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const pageCount = Math.ceil(productsData?.length / productsPerPage);

  let pageNumberArray = [];
  for (let i = 0; i < pageCount; i++) {
    pageNumberArray[i] = (
      <Box className={currentPage == i + 1 ? "page-item active" : "page-item"}>
        <Button className="page-link" onClick={() => setCurrentPage(i + 1)}>
          {i + 1}
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Center>
        <Flex marginBottom={5} mt={4} justifyContent="center" gap={4}>
          <Box
            className={currentPage == 1 ? "page-item disabled" : "page-item "}
          >
            <Button
              onClick={() => setCurrentPage(currentPage - 1)}
              backgroundColor="teal.200"
              disabled={currentPage == 1}
            >
              Prev
            </Button>
          </Box>

          <Text gap={2} display="flex">
            {pageNumberArray.map((li) => li)}
          </Text>
          <Box
            className={
              currentPage == pageCount ? "page-item disabled" : "page-item "
            }
          >
            <Button
              onClick={() => setCurrentPage(currentPage + 1)}
              backgroundColor="teal.200"
              disabled={currentPage == pageCount}
            >
              Next
            </Button>
          </Box>
        </Flex>
      </Center>
      <Flex spacing="20px" marginBottom={4} width="90%" marginLeft={37}>
        <Box direction={["column", "row"]}>
          <Heading as="h4" size="md">
            Womens's Shoes
          </Heading>
        </Box>
        <Spacer />
        {/* <Box direction={["column", "row"]}>
          <Text>{productsData?.length} Products</Text>
        </Box> */}
        <Spacer />
        {/* <Box direction={["column", "row"]}>
          <SearchBar
            value={searchInput}
            changeInput={(e) => setSearchInput(e.target.value)}
          />
        </Box> */}
        <Spacer />
        <Box direction={["column", "row"]}>
          <Filter></Filter>
        </Box>
      </Flex>
      {productsData?.length === 0 ? (
        <Spinner/>
      ) : (
        <SimpleGrid columns={[1, 1, 2, 3]} gap={5}>
          {currentpages &&
            currentpages?.map((item) => {
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
      )}
    </Box>
  );
};

export default ShoesProducts;
