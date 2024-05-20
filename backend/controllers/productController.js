import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/ProductModel.js';

//@desc Fetch all products
//@route GET /api/products
//@Access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@desc Fetch product by ID
//@route GET /api/products/:id
//@Access Public

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) return res.json(product);

  res.status(404);
  throw new Error('Product not found');
});

export { getProductById, getProducts };