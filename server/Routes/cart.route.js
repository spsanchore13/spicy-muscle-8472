const { Router } = require('express');
const cartController = require('../Controllers/cartController');
const CartRouter = Router();

CartRouter.get('/:id', cartController.get_cart_items);
CartRouter.post('/:id', cartController.add_cart_item);
CartRouter.delete('/:userId/:itemId', cartController.delete_cart_item);

module.exports = CartRouter;