import {
	createUser,
	deleteUser,
	getAllUsers,
	getUserById,
	updateUser,
} from '../controllers/user.controller.js';

import express from 'express';

const router = express.Router();

router.post('/users', createUser);

// lẩy ra tất cả users
router.get('/users', getAllUsers);

// lấy ra 1 user theo id
router.get('/users/:id', getUserById);

// xoá 1 user theo id
router.delete(`/users/:id`, deleteUser);

// cập nhật 1 user theo id
router.put('/users/:id', updateUser);

export default router;
