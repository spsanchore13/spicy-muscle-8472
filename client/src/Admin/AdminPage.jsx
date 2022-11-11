import { Box, Button, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminUpdate } from "./AdminModal";
import AdminNavbar from "./AdminNavbar";
import { DeleteIcon, Icon } from "@chakra-ui/icons";
import { deleteProducts, getProducts } from "../Redux/Product/action";

const AdminPage = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 468px)");
  const dispatch = useDispatch();
  const prod = useSelector((state) => state?.ProductReducer?.products);
  console.log(prod);
  //  const loading = useSelector((store) => store.dataReducer.isLoading);
  const deleteProduct = (id) => {
    dispatch(deleteProducts(id)).then(() => {
      dispatch(getProducts());
    });
  };
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <AdminNavbar />
      <br />
      <Box
        // m="auto"
        w={"95%"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        p={"1rem"}
      >
        {prod &&
          prod?.map((item) => (
            <Flex
              alignItems={"center"}
              textAlign={"left"}
              justifyContent={"space-between"}
              my={"5"}
              fontSize={["7px", "10px", "12px", "15px"]}
            >
              <Box width={"55px"} mx={"2"}>
                <Image
                  width={"100%"}
                  src={item.images[0].image}
                  alt={item.name}
                />
              </Box>
              {isLargerThan ? <Box w="15%">{item.name}</Box> : null}
              <Box w="15%">{item.gender}</Box>
              <Box w="15%">{item.category}</Box>
              <Box w="15%">{item.final_price}</Box>
              <Box>
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  w="10%"
                >
                  <Box mx={"3"}>
                    <Button>
                      <Icon
                        as={DeleteIcon}
                        color="red"
                        onClick={() => deleteProduct(item._id)}
                      />
                    </Button>
                  </Box>
                  <Box mx={"3"}>
                    <AdminUpdate
                      id={item.id}
                      products={prod}
                      dispatch={dispatch}
                      getData={getProducts}
                    />
                  </Box>
                </Flex>
              </Box>
            </Flex>
          ))}
      </Box>
    </>
  );
};

export default AdminPage;
