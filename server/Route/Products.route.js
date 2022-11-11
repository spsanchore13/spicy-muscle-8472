const { Router } = require("express");
const {
  getProductsById,
  getProducts,
  shoeProducts,
  dressesProducts,
} = require("../Controller/Products.controller");

const productRouter = Router();

productRouter.get("/", getProducts);

productRouter.get("/shoes", shoeProducts);

productRouter.get("/dresses", dressesProducts);

productRouter.get("/:id", getProductsById);


module.exports = { productRouter };
