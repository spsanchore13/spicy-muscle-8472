const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({
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
            min: [1, 'Quantity Can Not Be Less Then 1.']
        },
        price: Number,
        image: { type: String, required: true }
    }],
    bill: {
        type: Number,
        required: true
    },
    order_id: { type: String, required: true },
    date_added: {
        type: Date,
        default: Date.now
    }
})

const OrderModel = mongoose.model('order', OrderSchema);

module.exports = OrderModel;