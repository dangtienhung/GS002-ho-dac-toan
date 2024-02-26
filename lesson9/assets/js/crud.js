import { data } from './data.js';

const container = document.querySelector('.container');
const btnAddProduct = document.querySelector('.wrapper .btn-add-product');

function rederData(data) {
	const total = data.reduce(function (acc, item) {
		return acc + item.price;
	}, 0);
	console.log('🚀 ~ total ~ total:', total);

	const html = data.map(function (item, index) {
		return `
    <div class="product-item">
      <a href="./info-product.html?id=${item.id}" class="product-title">
        ${item.title} ${item.id}
      </a>
      <div class="product-body">
        <p class="product-desc">${item.body}</p>
        <p class="product-price">$${item.price}</p>
        <button class="btn-add-to-cart">Add to cart</button>
        <button data-id=${item.id} class="btn-delete-to-cart">Delete to cart</button>
      </div>
    </div>
  `;
	});

	container.innerHTML = html.join('');

	/* delete itme */
	const btnDeletes = document.querySelectorAll('.btn-delete-to-cart');
	btnDeletes.forEach((btn) => {
		btn.addEventListener('click', function () {
			const id = btn.dataset.id;
			let result = data.filter(function (item) {
				return item.id !== Number(id);
			});
			console.log('🚀 ~ result ~ result:', result);
			rederData(result);
		});
	});
}

rederData(data);

// add product
btnAddProduct.onclick = function () {
	const dataFake = {
		id: Math.random(),
		price: Math.ceil(Math.random() * 1250),
		title: 'nesciunt quas odio',
		body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
	};

	// push new data to data array
	data.push(dataFake);

	rederData(data);
};
