const data = [
	{
		id: 1,
		price: 100,
		title:
			'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
		body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
	},
	{
		id: 2,
		price: 200,
		title: 'qui est esse',
		body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
	},
	{
		price: 800,
		id: 3,
		title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
		body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
	},
	{
		id: 4,
		price: 5639,
		title: 'eum et est occaecati',
		body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
	},
	{
		id: 5,
		price: 1250,
		title: 'nesciunt quas odio',
		body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
	},
];

const container = document.querySelector('.container');
const btnAddProduct = document.querySelector('.wrapper .btn-add-product');

const html = data.map(function (item, index) {
	return `
    <div class="product-item">
      <h3 class="product-title">${item.title}</h3>
      <div class="product-body">
        <p class="product-desc">${item.body}</p>
        <p class="product-price">$${item.price}</p>
        <button class="btn-add-to-cart">Add to cart</button>
      </div>
    </div>
  `;
});

container.innerHTML = html.join('');

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

	const html = data.map(function (item, index) {
		return `
    <div class="product-item">
      <h3 class="product-title">${item.title}</h3>
      <div class="product-body">
        <p class="product-desc">${item.body}</p>
        <p class="product-price">$${item.price}</p>
        <button class="btn-add-to-cart">Add to cart</button>
      </div>
    </div>
  `;
	});

	container.innerHTML = html.join('');
};
