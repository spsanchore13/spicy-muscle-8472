import {
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  useMediaQuery,
} from "@chakra-ui/react";
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
      <SimpleGrid
        columns={[1, 2, 3, 3]}
        spacing={10}
        py={5}
        w={"90%"}
        m={"auto"}
      >
        {prod &&
          prod?.map((item, i) => (
            <Box key={i}>
              <Box width={"75%"}>
                <Image w={"100%"} src={item.images[0].image} alt={item.name} />
              </Box>
              <Box>Product : {item.name}</Box>
              <Box>Type : {item.type}</Box>
              <Box>Price : {item.price}</Box>
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
                        color="#c07174"
                        onClick={() => deleteProduct(item._id)}
                      />
                    </Button>
                  </Box>
                  <Box mx={"3"}>
                    <AdminUpdate
                      id={item._id}
                      products={prod}
                      dispatch={dispatch}
                      getData={getProducts}
                    />
                  </Box>
                </Flex>
              </Box>
            </Box>
          ))}
      </SimpleGrid>
    </>
  );
};

export default AdminPage;
