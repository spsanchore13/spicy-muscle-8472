import { Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortProductsApi } from "../../Redux/Product/action";

const Filter = (props) => {
  const dispatch = useDispatch();

  const productsData = useSelector((state) => state.ProductReducer.products);
  // console.log(productsData);

  const filteredProducts = useSelector(
    (state) => state.ProductReducer.filteredItems
  );
  // console.log(filteredProducts);

  // const size = useSelector((state) => state.products.size);
  // console.log(size);

  const sort = useSelector((state) => state.ProductReducer.sort);
  console.log(sort);

  const handleSort = (e) => {
    dispatch(sortProductsApi(productsData, e.target.value));
  };

  // const handleFilter = (e) => {
  //   dispatch(filterProductsApi(products, e.target.value));
  // };

  return !filteredProducts ? (
    <div>Loading....</div>
  ) : (
    <Flex>
      <div>
        Sort By Price
        <select value={props.sort} onChange={handleSort}>
          <option value="latest">latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      {/* <div className={styles.filter_size}>
        Filter Size
        <select value={props.size} onChange={handleFilter}>
          <option value="">ALL</option>
          <option value="X">X</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div> */}
    </Flex>
  );
};

export default Filter;
