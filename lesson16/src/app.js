import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/product.routes.js';
import userRoutes from './routes/user.routes.js';

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

// api users
app.use('/api/v1', userRoutes);
app.use('/products', productRoutes);

const port = 8080;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

// products
// crud
// name, price, description, image
// react router dom => reactjs
