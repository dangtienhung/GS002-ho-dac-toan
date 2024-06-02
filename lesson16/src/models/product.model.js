import Products from '../schemas/product.schema.js';

export const handleGetProductById = async (id) => {
	return await Products.findById({ _id: id });
};
