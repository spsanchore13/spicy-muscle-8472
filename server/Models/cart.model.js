const mongoose = require('mongoose');


const CartSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    items: [{
        productId: {
            type: String,
        },
        name: String,
        quantity: {
            type: Number,
            required: true,
        },
        price: Number,
        image: { type: String, required: true }
    }],
    bill: {
        type: Number,
        required: true,
        default: 0
    }
});

const CartModal = mongoose.model('cart', CartSchema);

module.exports = CartModal;