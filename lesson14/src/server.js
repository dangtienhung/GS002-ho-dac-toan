// es5
// es6
const express = require('express');

const app = express();

const data = [
	{
		name: 'Product 1 updated',
		price: 1000,
		image: 'https://via.placeholder.com/150',
		id: '6',
	},
	{
		name: 'Product 1 updated',
		price: 1000,
		image: 'https://via.placeholder.com/150',
		id: '7',
	},
	{
		name: 'Product 57 updated',
		price: 868,
		image: 'https://via.placeholder.com/150',
		id: '8',
	},
];

// api be cung cấp cho client khi call => method get
app.get('/products', function (request, response) {
	// 1. request: yêu cầu từ client
	// 2. response: trả về cho client
	// patch, put: => cật nhật dữ liệu
	response.send('Hello world!');
});

app.get('/', function (request, response) {
	response.send('Xin chào các bạn!');
});

app.get('/users', function (request, response) {
	response.send('Danh sách người dùng');
});

app.post('/products', function (req, res) {
	res.send('Create product');
});

app.put('/products', function (req, res) {
	res.send('Update product');
});

app.get('/api/products', function (req, res) {
	res.json(data);
});

app.get('/api/products/:id', function (req, res) {
	var id = req.params.id;

	// find product by id
	// const product = data.find(function (item) {
	// 	return item.id === id;
	// });
	var product = null;

	for (var i = 0; i < data.length; i++) {
		if (data[i].id === id) {
			product = data[i];
			break;
		}
	}

	if (!product) {
		return res.status(404).json('Product not found');
	}

	return res.json({
		message: 'Product found',
		data: product,
	});
});

app.delete('/api/products/:id', function (req, res) {
	var id = req.params.id;

	// find product by id
	const products = data.filter(function (item) {
		return item.id !== id;
	});
	console.log('🚀 ~ products ~ products:', products);

	if (products.length === data.length) {
		return res.status(404).json('Product not found');
	}

	return res.json({
		message: 'Product deleted',
	});
});

// hàm trong hàm => callback

// call api => method post
// app.put('/products', function (request, response) {
// {
//   username: String,
//   password: String;
//   phone: String
// }
// patch:

app.listen(8080, function () {
	console.log('Server is running on port 8080');
});
