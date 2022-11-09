import React from "react";
import { Box } from "@chakra-ui/react";
import Productheader from "../components/Productheader";
import { useParams } from "react-router-dom";
import ShoesProducts from "../components/ShoesProducts";
import Sidebar2 from "../components/Sidebar2";
import SimpleSidebar from "../components/Sidebar";

const ProductPage = () => {
  const { products } = useParams();

  return (
    <Box>
      <Productheader />
      <Box display="flex" mt={5}>
        <Sidebar2 />

        {/* <SimpleSidebar /> */}

        <Box>
          <ShoesProducts products={products} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
