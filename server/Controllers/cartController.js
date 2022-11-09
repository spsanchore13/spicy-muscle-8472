const CartModel = require('../Models/cart.model');
const ProductModel = require('../Models/product.model');

const get_cart_items = async (req, res) => {
    const userId = req.params.id;
    try {
        let cart = await CartModel.findOne({ userId });
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
    const { productId, quantity } = req.body;

    try {
        let cart = await CartModel.findOne({ userId });
        let item = await ProductModel.findOne({ _id: productId });
        if (!item) {
            res.status(404).send('Item not found!')
        }
        const price = item.price;
        const name = item.title;

        if (cart) {
            // if cart exists for the user
            let itemIndex = cart.items.findIndex(p => p.productId == productId);

            // Check if product exists or not
            if (itemIndex > -1) {
                let productItem = cart.items[itemIndex];
                productItem.quantity += quantity;
                cart.items[itemIndex] = productItem;
            }
            else {
                cart.items.push({ productId, name, quantity, price });
            }
            cart.bill += quantity * price;
            cart = await cart.save();
            return res.status(201).send(cart);
        }
        else {
            // no cart exists, create one
            const newCart = await CartModel.create({
                userId,
                items: [{ productId, name, quantity, price }],
                bill: quantity * price
            });
            return res.status(201).send(newCart);
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