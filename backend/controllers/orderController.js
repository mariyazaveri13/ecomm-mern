import asyncHandler from '../middleware/asyncHandler.js';
import OrderModel from '../models/OrderModel.js';

//@desc Create new order
//@route POST /api/orders
//@Access Private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send('Add order items');
});

//@desc Get logged in users orders
//@route GET /api/orders/mine
//@Access Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send('get my order items');
});

//@desc Get order by id
//@route GET /api/orders/:id
//@Access Private
const getOrderByID = asyncHandler(async (req, res) => {
  res.send('get  order by id');
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
