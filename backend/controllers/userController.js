import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/UserModel.js';
import jwt from 'jsonwebtoken';

//@desc Auth user & get token
//@route POST /api/users/login
//@Access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    //set JWT as http only cookie
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  }

  res.status(401);
  throw new Error('Invalid user or password');
});

//@desc Register User
//@route POST /api/users
//@Access Public
const registerUser = asyncHandler(async (req, res) => {
  res.send('Register User');
});

//@desc Logout user and clear cookie
//@route POST /api/users/logout
//@Access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send('Logout User');
});

//@desc Get user profile
//@route GET /api/users/profile
//@Access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('Get User Profile');
});

//@desc Update user profile
//@route PUT /api/users/profile
//@Access Private
//This is user functionality. Hence, we will use JWT
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('Update User Profile');
});

//@desc getUsers
//@route GET /api/users/
//@Access Private/admin
const getUsers = asyncHandler(async (req, res) => {
  res.send('get users');
});

//@desc getUsers by Id
//@route GET /api/users/:id
//@Access Private/admin
const getUsersbyID = asyncHandler(async (req, res) => {
  res.send('get users by id');
});

//@desc upadate user by Id
//@route PUT /api/users/:id
//@Access Private/admin
//this is admin functionality
const updateUserbyID = asyncHandler(async (req, res) => {
  res.send('update users by id');
});

//@desc delete users
//@route DELETE /api/users/:id
//@Access Private/admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send('delete users');
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUsersbyID,
  updateUserbyID,
};
