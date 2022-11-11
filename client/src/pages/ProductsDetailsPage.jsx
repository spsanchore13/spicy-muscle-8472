import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeSelectedProducts, selectedProducts } from "../Redux/Product/action";

const ProductsDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);
//   console.log(product);

  const fetchProductsDetail = async () => {
    const res = await axios
      .get(`http://localhost:8080/products/${productId}`)
      .catch((err) => {
        console.log(err);
      });
    console.log(res);
    dispatch(selectedProducts(res.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductsDetail();
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);
  return <div>ProductsDetailsPage</div>;
};

export default ProductsDetails;
