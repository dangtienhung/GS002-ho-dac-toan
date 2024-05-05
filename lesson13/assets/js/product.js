const api = 'http://localhost:3000/products';

let products = [];

const getAllProducts = async () => {
	fetch(api)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			products = data;
			const productContainer = document.querySelector('.product-container');

			const html = data.map((product) => {
				return /* html */ `
			    <div class="flex flex-col bg-gray-100 rounded border shadow-md shadow-gray-500/50">
			      <div class="p-2 flex flex-col">
			        <img src=${product.image} alt="" class="rounded h-[120px] sm:h-[160px] w-full object-fit">
			        <div class="mt-2 sm:mt-6 flex flex-col gap-4 items-start sm:items-center">
			          <h1 class="font-bold text-left text-sm sm:text-[20px]">${product.name}</h1>
			          <p class="text-left hidden sm:block sm:text-center text-xs">Lorem ipsum dolor, sit amet
			            consectetur
			            adipisicing elit.
			            Odit,
			            soluta.</p>
			          <p class="font-semibold text-sm">$${product.price}</p>
			        </div>
			      </div>
			      <div data-id-product=${product.id} class="bg-red-200 py-4 text-center uppercase font-semibold text-sm delete-product">Delete Product</div>
			      <div data-id-product=${product.id} class="bg-red-200 py-4 text-center uppercase font-semibold text-sm update-product">Update Product</div>
			    </div>
			  `;
			});

			productContainer.innerHTML = html.join('');

			handleDeleteProduct();

			handleUpdateProduct();
		})
		.catch((error) => {
			console.error('🚀 ~ .catch ~ error', error);
		});
};

getAllProducts();

const addProduct = async () => {
	const product = {
		name: `Product ${Math.floor(Math.random() * 100)}`,
		price: Math.floor(Math.random() * 1000),
		image: 'https://via.placeholder.com/150',
	};
	const addProduct = document.querySelector('.btn-add-product');

	addProduct.addEventListener('click', () => {
		fetch(api, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(product),
		});
	});
};

addProduct();

//JSON.stringify() => convert object to string
// JSON.parse() => convert string to object
//

const handleDeleteProduct = () => {
	const deleteBtns = document.querySelectorAll('.delete-product');

	deleteBtns.forEach((btn) => {
		btn.addEventListener('click', async () => {
			const id = btn.getAttribute('data-id-product');
			console.log('🚀 ~ btn.addEventListener ~ id:', id);
			fetch(`http://localhost:3000/products/${id}`, {
				method: 'DELETE',
			})
				.then(() => getAllProducts())
				.catch((error) => console.error('🚀 ~ .catch ~ error', error));
		});
	});
};

const handleUpdateProduct = () => {
	const updateBtns = document.querySelectorAll('.update-product');
	console.log('🚀 ~ handleUpdateProduct ~ updateBtns:', updateBtns);

	updateBtns.forEach((btn) => {
		btn.addEventListener('click', async () => {
			const id = btn.getAttribute('data-id-product');
			console.log('🚀 ~ btn.addEventListener ~ id:', id);
			console.log('🚀 ~ btn.addEventListener ~ products:', products);
			const product = products.find((product) => product.id == id);

			product.name = 'Product 1 updated';
			product.price = 1000;
			product.image = 'https://via.placeholder.com/150';

			fetch(`http://localhost:3000/products/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(product),
			})
				.then(() => getAllProducts())
				.catch((error) => console.error('🚀 ~ .catch ~ error', error));
		});
	});
};
