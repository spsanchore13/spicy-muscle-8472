const ProductModel = require("../Models/product.model");

const getProducts = async (req, res) => {
  const products = await ProductModel.find({});
  // console.log(products)
  res.send(products);
};

const getProductsById = async (req, res) => {
  const product = await ProductModel.find({ _id: req.params.id });
  // console.log(product);
  res.send(product);
};

const shoeProducts = async (req, res) => {
  const page = Number(req.query.pageNumber) || 1;
  const pageSize = Number(req.query.pageSize) || 10;
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "si",
        },
      }
    : {};
    const count = await ProductModel.countDocuments({ ...keyword });

  const shoes = await ProductModel.find({ type: "shoes", ...keyword });
  console.log({shoes, page, pages: Math.ceil(count/pageSize)});
  res.json({shoes, page, pages: Math.ceil(count/pageSize)});
};

const dressesProducts = async (req, res) => {
  const dresses = await ProductModel.find({ type: "dresses" });
  console.log(dresses);
  res.send(dresses);
};

module.exports = {
  getProducts,
  getProductsById,
  shoeProducts,
  dressesProducts,
};
