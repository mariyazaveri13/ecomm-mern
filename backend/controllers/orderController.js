import asyncHandler from '../middleware/asyncHandler.js';
import Order from '../models/OrderModel.js';
import OrderModel from '../models/OrderModel.js';

//@desc Create new order
//@route POST /api/orders
//@Access Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length == 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const order = new Order({
      orderItems: orderItems.map((x) => ({
        ...x,
        product: x._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(204).json(createdOrder);
  }
});

//@desc Get logged in users orders
//@route GET /api/orders/mine
//@Access Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.status(200).json(orders);
});

//@desc Get order by id
//@route GET /api/orders/:id
//@Access Private
const getOrderByID = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );
  if (order) res.json(order);
  else {
    res.status(404);
    throw new Error('order not found');
  }
});

//@desc Update order to paid
//@route GET /api/orders/:id/pay
//@Access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send('update order to paid');
});

//@desc Update order to delivered
//@route GET /api/orders/:id/deliver
//@Access Private/admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send('update order to delivered');
});

//@desc get all orders
//@route GET /api/orders
//@Access Private/admin
const getOrders = asyncHandler(async (req, res) => {
  res.send('Get all orders');
});

export {
  addOrderItems,
  getMyOrders,
  getOrderByID,
  updateOrderToDelivered,
  updateOrderToPaid,
  getOrders,
};
