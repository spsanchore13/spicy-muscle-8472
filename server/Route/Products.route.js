const { Router } = require("express");
const {
  getProductsById,
  getProducts,
  shoeProducts,
  dressesProducts,
  subCategory,
  searchNameApi,
  deleteProducts,
  updateProducts,
} = require("../Controller/Products.controller");

const productRouter = Router();

productRouter.get("/", getProducts);

productRouter.get("/shoes", shoeProducts);

productRouter.get("/dresses", dressesProducts);

productRouter.get("/search:name", searchNameApi)

productRouter.get("/:id", getProductsById);

productRouter.delete("/:id", deleteProducts)
productRouter.patch("/:id", updateProducts)


module.exports = { productRouter };
