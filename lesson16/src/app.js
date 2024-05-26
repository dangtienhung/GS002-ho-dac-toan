import mongoose, { isObjectIdOrHexString } from 'mongoose';

import express from 'express';

const app = express();

// middleware
app.use(express.json());

// connect mongoose
mongoose
	.connect('mongodb://127.0.0.1:27017/ho-dac-toan-lesson16')
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch((error) => {
		console.error('Connect to MongoDB failed', error);
	});

// tạo ra 1 table có tên là users
// schemas
const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
		},
		email: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);
const users = mongoose.model('users', userSchema);

// api users
app.post('/api/v1/users', async (req, res) => {
	const body = req.body;
	console.log('🚀 ~ app.post ~ body:', body);

	const newUser = await users.create(body);

	if (!newUser) {
		return res.json({ message: 'Create user failed' });
	}

	return res.json({ message: 'Contact created', data: newUser });
});

// lẩy ra tất cả users
app.get('/api/v1/users', async (req, res) => {
	const result = await users.find();

	if (!result) {
		return res.json({ message: 'Get users failed' });
	}

	return res.json({ message: 'Get users successfully', data: result });
});

// lấy ra 1 user theo id
app.get('/api/v1/users/:id', async (req, res) => {
	const id = req.params.id;

	if (!isObjectIdOrHexString(id)) {
		return res.json({ message: 'Id is invalid' });
	}

	const result = await users.findById({ _id: id });

	if (!result) {
		return res.json({ message: 'Get user not found' });
	}

	return res.json({ message: 'Get user successfully', data: result });
});

// xoá 1 user theo id
app.delete(`/api/v1/users/:id`, async (req, res) => {
	const id = req.params.id;

	if (isObjectIdOrHexString(id) === false) {
		return res.json({ message: 'id người dùng không hợp lệ!' });
	}

	const result = await users.findByIdAndDelete({ _id: id });

	if (!result) {
		return res.json({ message: 'Xoá người dùng không thành công!' });
	}

	return res.json({ message: 'Xoá người dùng thành công!', data: result });
});

// cập nhật 1 user theo id
app.put('/api/v1/users/:id', async (req, res) => {
	const id = req.params.id;

	if (isObjectIdOrHexString(id) === false) {
		return res.json({ message: 'id người dùng không hợp lệ!' });
	}

	const body = req.body;

	const result = await users.findByIdAndUpdate({ _id: id }, body, {
		new: true,
	});

	if (!result) {
		return res.json({ message: 'Update người dùng không thành công!' });
	}

	return res.json({ message: 'Update người dùng thành công!', data: result });
});

const port = 8080;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

// products
// crud
// name, price, description, image
// react router dom => reactjs
