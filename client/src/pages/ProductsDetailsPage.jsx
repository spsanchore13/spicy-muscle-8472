import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MdLocalShipping } from "react-icons/md";
import {
  removeSelectedProducts,
  selectedProducts,
} from "../Redux/Product/action";
import { postCartItems } from "../Redux/Cart/action";
import Spinner from "../components/Spinner/Spinner";

const ProductsDetails = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const product = useSelector((state) => state.product);
  // console.log(product);

  const item = {
    productId: product[0]?._id,
    name: product[0]?.name,
    price: product[0]?.price,
    quantity: 1,
    image: product[0]?.images[0]?.image,
  };

  const userId = localStorage.getItem("userId");

  const { productId } = useParams();

  const addProducts = (item, userId) => {
    // console.log(item);
    dispatch(postCartItems(item, userId))
      .then((res) => {
        // console.log(res);
        alert("Item Added To Cart");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchProductsDetail = async () => {
    const res = await axios
      .get(`https://talented-cyan-piglet.cyclic.app//products/${productId}`)
      .catch((err) => {
        console.log(err);
      });
    // console.log(res);
    dispatch(selectedProducts(res.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductsDetail();
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);

  const { name, price, images } = product;

  return (
    <Box>
      {Object.keys(product).length === 0 ? (
        <Spinner />
      ) : (
        <Container maxW={"5xl"}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 7, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Box direction={["column", "row"]}>
              <Image
                rounded={"md"}
                boxSize={["sm", "md"]}
                alt={"product image"}
                src={product[0].images[0].image}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={{ base: "100px", sm: "400px", lg: "500px" }}
              />
              <Box>
                <HStack
                  margin={10}
                  direction={["column", "row"]}
                  spacing="24px"
                >
                  <Box w="200px" h="200px">
                    <Image src={product[0].images[1].image} />
                  </Box>
                  <Box w="200px" h="200px">
                    <Image src={product[0].images[2].image} />
                  </Box>
                </HStack>
                <HStack
                  margin={10}
                  direction={["column", "row"]}
                  spacing="24px"
                >
                  <Box w="200px" h="200px">
                    <Image src={product[0].images[3].image} />
                  </Box>
                  <Box w="200px" h="200px">
                    <Image src={product[0]?.images[4]?.image} />
                  </Box>
                </HStack>
              </Box>
            </Box>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
                >
                  {product[0].name}
                </Heading>
                <Heading
                  lineHeight={1.1}
                  fontWeight={400}
                  fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
                >
                  {product[0].brand}
                </Heading>
                <Text color="grey.900" fontWeight={300} fontSize={"2xl"}>
                  {product[0].type}
                </Text>
                <Text color="grey.900" fontWeight={300} fontSize={"2xl"}>
                  ${product[0].price}
                </Text>
              </Box>

              <Stack spacing={{ base: 4, sm: 6 }} direction={"column"}>
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={("teal.500", "teal.300")}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Product Details
                  </Text>
                  {product[0].description}

                  <List spacing={3}>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Color :
                      </Text>
                      {product[0].colors[0].color}
                    </ListItem>
                    {/* <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Product Ratings Count:
                      </Text>{" "}
                      {}
                    </ListItem> */}
                    <ListItem>
                      <Text spacing={4} as={"span"} fontWeight={"bold"}>
                        Product Rating
                      </Text>
                      <Text marginLeft={4} as={"span"} fontWeight={"bold"}>
                        4.5
                      </Text>
                    </ListItem>
                    {/* <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Product Discount Price:
                      </Text>{" "}
                      {}
                    </ListItem> */}
                  </List>
                </Box>
              </Stack>

              <Button
                rounded={"none"}
                w={"full"}
                mt={8}
                size={"lg"}
                py={"7"}
                onClick={() => addProducts(item, userId)}
                bg="black"
                color="whiteAlpha.900"
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
              >
                Add to cart
              </Button>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
              >
                <MdLocalShipping />
                <Text>2-3 business days delivery</Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      )}
    </Box>
  );
};

export default ProductsDetails;
