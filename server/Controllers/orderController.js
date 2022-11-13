
const OrderModel = require('../Models/order.model');
const CartModal = require('../Models/cart.model');
const PaymentModel = require('../Models/payment.model')
const Razorpay = require('razorpay');
const crypto = require('crypto')
require('dotenv').config()

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
});

const get_orders = async (req, res) => {
    const userId = req.params.id;
    const orders = await Order.find({ userId }).sort({ date: -1 })
    res.send(orders);
}

const checkout = async (req, res) => {

    const userId = req.params.id;
    // console.log(userId)
    // req.body.userId = userId;


    const options = {
        amount: Number(req.body.amount * 100),
        currency: "INR",
    };
    const order = await instance.orders.create(options)

    res.status(200).send({
        success: true,
        order,
    });

}

const paymentVerification = async (req, res) => {

    const userId = req.params.id;

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        req.body;



    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY)
        .update(body.toString())
        .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
        // Database comes here
        const order = await CartModal.find({ userId: userId })

        const [{ items, bill }] = order

        await OrderModel.create({
            userId,
            items: items,
            bill,
            order_id: razorpay_order_id
        })

        await CartModal.deleteOne({ userId })

        await PaymentModel.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        });

        res.redirect(
            `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
        );
    }
    else {
        res.status(400).json({
            success: false,
        });
    }




};


module.exports = { get_orders, checkout, paymentVerification }