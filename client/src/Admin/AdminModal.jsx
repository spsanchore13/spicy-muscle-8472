import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { EditIcon, Icon } from "@chakra-ui/icons";
import { getProducts, updateProducts } from "../Redux/Product/action";

export function AdminUpdate({ id, products, dispatch, getData }) {
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName && productType && productPrice) {
      const payload = {
        name: productName,
        type: productType,
        price: productPrice,
      };
      dispatch(updateProducts(id, payload)).then(() => {
        dispatch(getProducts());
      });
    }
    setProductType("");
    setProductName("");
    setProductPrice("");
  };

  useEffect(() => {
    if (id) {
      const currentProducts = products.find((item) => item.id === id);
      if (currentProducts) {
        setProductName(currentProducts.name);
        setProductType(currentProducts.type);
        setProductPrice(currentProducts.price);
      }
    }
  }, [id, products]);
  return (
    <>
      <Button onClick={onOpen}>
        <Icon color={"#c07174"} as={EditIcon} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Anthropology</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Name"
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
              />
              <FormLabel>Type</FormLabel>
              <Input
                placeholder="Type"
                onChange={(e) => setProductType(e.target.value)}
                value={productType}
              />
              <FormLabel>Price</FormLabel>
              <Input
                placeholder="Price"
                onChange={(e) => setProductPrice(e.target.value)}
                value={productPrice}
              />

              <ModalFooter>
                <Button bg={"#c07174"} color={"white"} mr={3} type="submit">
                  Update
                </Button>
                <Button bg={"#c07174"} color={"white"} mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
