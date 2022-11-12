const { Router } = require('express');
const orderController = require('../Controllers/orderController');
const OrderRouter = Router();

OrderRouter.get('/order/:id', orderController.get_orders);
OrderRouter.post('/order/:id', orderController.checkout);
OrderRouter.post("/order/:id/paymentverification", orderController.paymentVerification)

module.exports = OrderRouter;