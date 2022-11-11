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
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/DressesInfo.module.css";

const DressesInfo = ({item}) => {
  const navigate = useNavigate();
  const [img, setImg] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleHover = () => {
    setImg(!img);
  };
  const handleOut = () => {
    setImg(!img);
  };

  return (
    <div>
      <div style={{ cursor: "pointer" }}>
        {/* {console.log(item._id)} */}
        <div
          className={styles.image}
          key={item.id}
          style={{
            position: "relative",
            // border:"1px solid red"
          }}
        >
          <Link to={`/products/${item._id}`}>
            <img
              onMouseOver={handleHover}
              onMouseOut={handleOut}
              style={{
                height: "350px",
                width: "80%",
                // border:" 1px solid red"
              }}
              src={img ? item.images[0].image : item.images[1].image}
              alt="image"
            />
          </Link>
          <p style={{ margin: "auto", alignItems: "center" }}>{item.name} </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <p>${item.price}</p>
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
                  <Img height="280px" src={item.images[0].image} />
                  <Box display="flex" flexDirection="column" gap="10px">
                    <Heading as="h5" size="sm">
                      {item.name}
                    </Heading>
                    <Text>{item.brand}</Text>
                    <Text>${item.price}</Text>
                    <Text>{item.type}</Text>
                    <Text>{item.rating}</Text>
                  </Box>
                </Flex>
              </Text>
              {/* <Lorem count={2} /> */}
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Add to Basket
              </Button>
              <Button variant="ghost">View full details</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default DressesInfo;
