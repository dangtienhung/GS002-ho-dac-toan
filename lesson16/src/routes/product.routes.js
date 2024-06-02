import {
	createProduct,
	getProductById,
	getProducts,
} from '../controllers/product.controller.js';

import express from 'express';

const router = express.Router();

router.post('/products', createProduct);
router.get('/products', getProducts);
router.get('/product/:id', getProductById);

// làm nốt phần update và delete
// crud category: name, description, image

export default router;
