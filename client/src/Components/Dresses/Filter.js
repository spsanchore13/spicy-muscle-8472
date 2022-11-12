import { Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortProductsApi } from "../../Redux/Product/action";
import Spinner from "../Spinner/Spinner";

const Filter = (props) => {
  const dispatch = useDispatch();

  const productsData = useSelector((state) => state.ProductReducer.products);
  console.log(productsData);

  const filteredProducts = useSelector(
    (state) => state.ProductReducer.filteredItems
  );
  console.log(filteredProducts);

  // const size = useSelector((state) => state.products.size);
  // console.log(size);

  const sort = useSelector((state) => state.ProductReducer.sort);
  // console.log(sort);

  const handleSort = (e) => {
    dispatch(sortProductsApi(filteredProducts, e.target.value));
  };

  return !filteredProducts ? (
    <Spinner/>
  ) : (
    <Flex>
      <div>
        Sort By
        <select value={props.sort} onChange={handleSort}>
          <option value="latest">Latest Products</option>
          <option value="lowest">Price: Low to high</option>
          <option value="highest">Price: Hight to Low</option>
          <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
        </select>
      </div>
    </Flex>
  );
};

export default Filter;
