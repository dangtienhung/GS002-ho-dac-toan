// const express = require('express')// es5 => commonjs

import axios from 'axios';
import express from 'express'; // es6 => esm

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World');
});

// lấy ra tất cả dữ liệu bài biết
// app.get('/posts', async (req, res) => {
// 	try {
// 		const result = await axios.get(`http://localhost:4200/posts`);
// 		console.log('🚀 ~ app.get ~ result:', result);
// 		const data = result.data;

// 		if (!data) {
// 			return res.json({
// 				message: 'Không có dữ liệu',
// 			});
// 		}

// 		return res.json({
// 			message: 'Lấy dữ liệu thành công',
// 			data,
// 		});
// 	} catch (error) {
// 		return res.json({
// 			message: 'Lỗi lấy dữ liệu',
// 		});
// 	}
// });

// .then().catch()

app.get('/posts', (req, res) => {
	axios
		.get(`http://localhost:4200/posts`)
		.then((result) => {
			const data = result.data;
			if (!data) {
				return res.json({
					message: 'Không có dữ liệu',
				});
			}
			return res.json({
				message: 'Lấy dữ liệu thành công',
				data,
			});
		})
		.catch((error) => {
			return res.json({
				message: 'Lỗi lấy dữ liệu',
			});
		});
});

// thêm dữ liệu bài viết
app.post('/add-post', async (req, res) => {
	try {
		const body = req.body;
		const result = await axios.post(`http://localhost:4200/posts`, body);

		const data = result.data;

		if (!data) {
			return res.json({
				message: 'Không nhập được dữ liệu',
			});
		}

		return res.json({
			message: 'Thêm dữ liệu thành công',
			data,
		});
	} catch (error) {
		return res.json({
			message: 'Lỗi thêm dữ liệu',
		});
	}
});

// xoá 1 dữ liệu bài viết
app.delete('/delete-post/:id', async (req, res) => {
	try {
		const id = req.params.id;

		const result = await axios.delete(`http://localhost:4200/posts/${id}`);

		if (!result) {
			return res.json({
				message: 'Không xoá được dữ liệu',
			});
		}

		return res.json({
			message: 'Xoá dữ liệu thành công',
		});
	} catch (error) {
		return res.json({
			message: 'Lỗi xoá dữ liệu',
		});
	}
});

const port = 8080;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

// post => req.body
// get one/ delete => req.params
// put/patch => req.body, req.params
