const express = require("express");
const connection = require("./Config/db");
const cors = require("cors");
const PORT = process.env.PORT || 8000;
require("dotenv").config();
const { routeUser } = require("./Route/User.route");

app.use(express.json())
app.use(cors())


app.use("/auth", routeUser)

const { productRouter } = require("./Route/Products.route");


const app = express();
app.use(express.json());
app.use(cors());

app.use("/products", productRouter);

app.use("/auth", routeUser);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected To Database Successfully");
  } catch (e) {
    console.log(e);
  }
  console.log(`Listining on port ${PORT}`);
});
