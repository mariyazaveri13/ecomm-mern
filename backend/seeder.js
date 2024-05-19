import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/UserModel.js';
import Order from './models/OrderModel.js';
import Product from './models/ProductModel.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((prod) => {
      return { ...prod, user: adminUser };
    });

    await Product.insertMany(sampleProducts);
    console.log('Data inserted'.green.inverse);
    process.exit(); //don't kill entirely
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1); // kill process entirely
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed'.red.inverse);
    process.exit(); //don't kill entirely
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1); // kill process entirely
  }
};

if (process.argv[2] == '-d') {
  destroyData();
} else {
  importData();
}
