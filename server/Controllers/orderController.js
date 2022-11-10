const Order = require('../Models/order.model');
const CartModal = require('../Models/cart.model');
const PaymentModel = require('../Models/payment.model')
const Razorpay = require('razorpay');

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
    req.body.userId = userId;

    try {
        const options = {
            amount: Number(req.body.amount * 100),
            currency: "INR",
        };
        const order = await instance.orders.create(options)

    }
    catch (err) {
        res.status(200).send({
            success: true,
            order,
        });
    }
}

const paymentVerification = async (req, res) => {

    console.log(req.body)
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
            .update(body.toString())
            .digest("hex");

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            // Database comes here

            await Payment.create({
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
            });

            res.redirect(
                `http://localhost:8080/paymentsuccess?reference=${razorpay_payment_id}`
            );
        }

    }
    catch (err) {
        res.status(400).json({
            success: false,
        });
    }
};


module.exports = { get_orders, checkout, paymentVerification }