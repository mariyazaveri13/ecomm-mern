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
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router
  .route('/profile')
  .put(protect, updateUserProfile)
  .get(protect, getUserProfile);
router
  .route('/:id')
  .put(protect, admin, updateUserbyID)
  .get(protect, admin, getUsersbyID)
  .delete(protect, admin, deleteUser);

export default router;
