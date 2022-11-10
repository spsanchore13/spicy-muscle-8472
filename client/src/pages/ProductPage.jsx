import React from "react";
import { Box } from "@chakra-ui/react";
import SimpleSidebar from "../components/Sidebar";
import Productheader from "../components/Shoes/Productheader";
import Sidebar2 from "../components/Shoes/Sidebar2";
import ShoesProducts from "../components/Shoes/ShoesProducts";

const ProductPage = () => {
  return (
    <Box>
      <Productheader />
      <Box display="flex" mt={5}>
        <Sidebar2 />

        {/* <SimpleSidebar /> */}

        <Box>
          <ShoesProducts />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
