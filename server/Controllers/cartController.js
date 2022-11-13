const CartModel = require('../Models/cart.model');
const ProductModel = require('../Models/product.model');

const get_cart_items = async (req, res) => {
    // console.log(req.params)
    const userId = req.params.id;
    try {
        let cart = await CartModel.findOne({ userId });
        // console.log(cart);

        if (cart && cart.items.length > 0) {
            res.send(cart);

        }
        else {
            res.send(null);
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}

const add_cart_item = async (req, res) => {
    const userId = req.params.id;



    // const product = req.body.items;

    const productId = req.body.productId;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const name = req.body.name;
    const image = req.body.image;

    try {
        let cart = await CartModel.findOne({ userId });
        console.log(cart)

        let item = await ProductModel.findById({ _id: productId });
        console.log(item)

        if (cart) {

            const itemIndex = cart.items.findIndex(item => item.productId == productId);

            if (itemIndex > -1) {
                let product = cart.items[itemIndex]
                product.quantity = product.quantity + quantity;
                cart.items[itemIndex] = product;
            }
            else {

                cart.items.push({ productId, name, quantity, image, price })
            }

            cart.bill += quantity * price;
            cart = await cart.save();
            res.status(201).send(cart);
        }
        else {

            const newCart = await CartModel.create({
                userId,
                items: [{ productId, name, quantity, price, image }],
                bill: quantity * price
            });
            // console.log(newCart)
            newCart.save();
            res.status(201).send(newCart);
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}

const delete_cart_item = async (req, res) => {
    const userId = req.params.userId;
    const productId = req.params.itemId;
    try {
        let cart = await CartModel.findOne({ userId });
        let itemIndex = cart.items.findIndex(p => p.productId == productId);
        if (itemIndex > -1) {
            let productItem = cart.items[itemIndex];
            cart.bill -= productItem.quantity * productItem.price;
            cart.items.splice(itemIndex, 1);
        }
        cart = await cart.save();
        return res.status(201).send(cart);
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}


module.exports = { get_cart_items, add_cart_item, delete_cart_item }