import {
	handleCreateUser,
	handleDeleteUser,
	handleGetAllUsers,
	handleGetUserById,
	handleUpdateUser,
} from '../models/user.model.js';

import { isObjectIdOrHexString } from 'mongoose';

export const createUser = async (req, res) => {
	const body = req.body;

	const newUser = await handleCreateUser(body);

	if (!newUser) {
		return res.json({ message: 'Create user failed' });
	}

	return res.json({ message: 'Contact created', data: newUser });
};

export const getAllUsers = async (req, res) => {
	const result = await handleGetAllUsers();

	if (!result) {
		return res.json({ message: 'Get users failed' });
	}

	return res.json({ message: 'Get users successfully', data: result });
};

export const getUserById = async (req, res) => {
	const id = req.params.id;

	if (!isObjectIdOrHexString(id)) {
		return res.json({ message: 'Id is invalid' });
	}

	const result = await handleGetUserById(id);

	if (!result) {
		return res.json({ message: 'Get user not found' });
	}

	return res.json({ message: 'Get user successfully', data: result });
};

export const deleteUser = async (req, res) => {
	const id = req.params.id;

	if (isObjectIdOrHexString(id) === false) {
		return res.json({ message: 'id người dùng không hợp lệ!' });
	}

	const result = await handleDeleteUser(id);

	if (!result) {
		return res.json({ message: 'Xoá người dùng không thành công!' });
	}

	return res.json({ message: 'Xoá người dùng thành công!', data: result });
};

export const updateUser = async (req, res) => {
	const id = req.params.id;

	if (isObjectIdOrHexString(id) === false) {
		return res.json({ message: 'id người dùng không hợp lệ!' });
	}

	const body = req.body;

	const result = await handleUpdateUser(id, body);

	if (!result) {
		return res.json({ message: 'Update người dùng không thành công!' });
	}

	return res.json({ message: 'Update người dùng thành công!', data: result });
};
