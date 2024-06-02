import { isObjectIdOrHexString } from 'mongoose';
import { handleGetProductById } from '../models/product.model.js';
import Products from '../schemas/product.schema.js';

export const createProduct = async (req, res) => {
	const body = req.body;

	const newProduct = await Products.create(body);

	if (!newProduct) {
		return res.json({ message: 'Create product failed' });
	}

	return res.json({ message: 'Product created', data: newProduct });
};

export const getProducts = async (req, res) => {
	const result = await Products.find();

	if (!result) {
		return res.json({ message: 'Get products failed' });
	}

	return res.json({ message: 'Get products successfully', data: result });
};

export const getProductById = async (req, res) => {
	const id = req.params.id;

	if (!isObjectIdOrHexString(id)) {
		return res.json({ message: 'Id is invalid' });
	}

	const result = await handleGetProductById(id);

	if (!result) {
		return res.json({ message: 'Get product not found' });
	}

	return res.json({ message: 'Get product successfully', data: result });
};
