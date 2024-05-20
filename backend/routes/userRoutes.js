import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUsersbyID,
  updateUserbyID,
} from '../controllers/userController.js';

const router = express.Router();

router.route('/').post(registerUser).get(getUsers);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router.route('/profile').put(updateUserProfile).get(getUserProfile);
router.route('/:id').put(updateUserbyID).get(getUsersbyID).delete(deleteUser);

export default router;
