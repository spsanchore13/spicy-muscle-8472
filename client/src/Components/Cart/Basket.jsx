import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  HStack,
  IconButton,
  Image,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import {
  getCartItems,
  postCartItems,
  removeCartItem,
} from "../../Redux/Cart/action";

const Basket = ({ name, productId, price, image, quantity }) => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId") || "636ccf3ff2b55f7b5ac1f105";
  const toast = useToast();
  const handleQuantity = (item) => {
    dispatch(postCartItems(item, userId))
      .then(() => dispatch(getCartItems(userId)))
      .catch((err) => console.log(err));
  };

  const handleRemove = (userId, productId, toast) => {
    dispatch(removeCartItem(userId, productId, toast)).then(() =>
      dispatch(getCartItems(userId))
    );
  };

  return (
    <>
      <HStack justify="space-evenly">
        <Box>
          <Image src={image} boxSize="150px" />
        </Box>
        <Box w="150px">{name}</Box>
        <Box>$ {price}</Box>
        <Box>
          <HStack>
            <IconButton
              onClick={() =>
                handleQuantity({
                  productId: productId,
                  name: name,
                  price: price,
                  quantity: 1,
                  image: image,
                })
              }
              disabled={quantity == 5}
              borderRadius="100%"
              area-label="inc"
              icon={<AddIcon w="10px" h="10px" />}
            />
            <Button disabled="disabled">{quantity}</Button>
            <IconButton
              onClick={() =>
                handleQuantity({
                  productId: productId,
                  name: name,
                  price: price,
                  quantity: -1,
                  image: image,
                })
              }
              disabled={quantity == 1}
              borderRadius="100%"
              area-label="dec"
              icon={<MinusIcon w="20px" h="10px" />}
            />
          </HStack>
        </Box>
        <Box>$ {quantity * price}</Box>
      </HStack>
      <HStack w="100%" justify="right">
        <Button
          variant="link"
          color="#4A5766"
          onClick={() => handleRemove(userId, productId, toast)}
        >
          Remove
        </Button>
        <Divider orientation="vertical" />
        <Button variant="link" color="#4A5766">
          Wishlist
        </Button>
      </HStack>
      <Divider />
    </>
  );
};

export default Basket;
