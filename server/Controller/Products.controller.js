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

const deleteProducts = async (req, res) => {
  try {
    const id = req.params.id
    await ProductModel.deleteOne({ _id: id })
    res.send("deleted")
  }
  catch (err) {
    res.send({ "message": err })
  }
}

const updateProducts = async (req, res) => {
  try {
    const id = req.params.id
    await ProductModel.updateOne({ _id: id }, { $set: req.body })
    res.send({ "message": "update successfully" })
  }
  catch (err) {
    res.send({ "messege": err })
  }

}
const shoeProducts = async (req, res) => {
  // const page = Number(req.query.pageNumber) || 1;
  // const pageSize = Number(req.query.pageSize) || 10;
  // const keyword = req.query.keyword
  //   ? {
  //       name: {
  //         $regex: req.query.keyword,
  //         $options: "si",
  //       },
  //     }
  //   : {};
  // const count = await ProductModel.countDocuments({ ...keyword });

  const shoes = await ProductModel.find({ type: "shoes" });
  // console.log({ shoes, page, pages: Math.ceil(count / pageSize) });
  res.json(shoes);
};

const dressesProducts = async (req, res) => {
  const dresses = await ProductModel.find({ type: "dresses" });
  // console.log(dresses);
  res.send(dresses);
};

//get all by subcategory
const searchNameApi = async (req, res) => {
  try {
    const name = req.params.name;
    const data = await ProductModel.find(
      { name: { $regex: new RegExp(name), $options: "is" }, isActive: true },
      { name: 1, images: 1, price: 1, _id: 0 }
    );

    if (data.length < 0) {
      return res.status(404).json({
        message: "No product found.",
      });
    }
    res.status(200).json({
      products: data,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

module.exports = {
  getProducts,
  getProductsById,
  shoeProducts,
  dressesProducts,
  searchNameApi,
  deleteProducts,
  updateProducts
};
