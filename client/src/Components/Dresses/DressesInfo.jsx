import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Img,
  Box,
  Heading,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { postCartItems } from "../../Redux/Cart/action";
import styles from "../styles/DressesInfo.module.css";

const DressesInfo = ({ val }) => {
  const navigate = useNavigate();
  const [img, setImg] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleHover = () => {
    setImg(!img);
  };
  const handleOut = () => {
    setImg(!img);
  };

  const dispatch = useDispatch();

  const product = useSelector((state) => state.ProductReducer.products);
  console.log(product);
  // const data = product.map((data) => {
  //   var item = {
  //     productId: data?._id,
  //     name: data?.name,
  //     price: data?.price,
  //     quantity: 1,
  //     image: data?.images[0]?.image,
  //   };
  // });

  // const userId = "636ccf3ff2b55f7b5ac1f105";

  // const { productId } = useParams();

  // const addProducts = (data, userId) => {
  //   console.log(data);
  //   dispatch(postCartItems(data, userId))
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div>
      <div style={{ cursor: "pointer" }}>
        {/* {console.log(item._id)} */}
        <div
          className={styles.image}
          key={val.id}
          style={{
            position: "relative",
            // border:"1px solid red"
          }}
        >
          <Link to={`/products/${val._id}`}>
            <img
              onMouseOver={handleHover}
              onMouseOut={handleOut}
              style={{
                height: "350px",
                width: "80%",
                // border:" 1px solid red"
              }}
              src={img ? val.images[0].image : val.images[1].image}
              alt="image"
            />

            <p style={{ margin: "auto", alignItems: "center" }}>{val.name} </p>
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <p>${val.price}</p>
            <div
              onClick={onOpen}
              className={styles.quick}
              style={{ color: "red" }}
            >
              Quick Shop
            </div>
          </div>
        </div>

        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight="bold" mb="1rem">
                <Flex gap={4}>
                  <Img height="280px" src={val.images[0].image} />
                  <Box display="flex" flexDirection="column" gap="10px">
                    <Heading as="h5" size="sm">
                      {val.name}
                    </Heading>
                    <Text>{val.brand}</Text>
                    <Text>${val.price}</Text>
                    <Text>{val.type}</Text>
                    <Text>{val.rating}</Text>
                  </Box>
                </Flex>
              </Text>
              {/* <Lorem count={2} /> */}
            </ModalBody>

            <ModalFooter>
              {/* <Button
                colorScheme="blue"
                mr={3}
                onClick={() => addProducts(data, userId)}
              >
                Add to Basket
              </Button> */}
              <Link to={`/products/${val._id}`}>
                <Button variant="ghost">View full details</Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default DressesInfo;
