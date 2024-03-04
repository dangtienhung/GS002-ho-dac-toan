import { dataProducts } from './data.js';

const cardItem = document.querySelector('.list-card-item');
const listCards = document.querySelector('.list-card-container');
const btnAddProduct = document.querySelector('.add-product');

const renderCard = (listCards) => {
	const html = dataProducts.map((product) => {
		return /* html */ `
      <li class="list-card-item">
        <div class="img-card iCard-style1">
          <div class="card-content">
            <div class="card-image">
              <span class="card-title">${product.name}</span>
              <img src=${product.image} />
            </div>

            <div class="card-text">
              <p>
                ${product.name}
              </p>
            </div>

          </div>

          <div class="card-link">
            <a href="#" title="Read Full"><span>${product.price}</span></a>
          </div>
        </div>
      </li>
    `;
	});

	listCards.innerHTML = html.join('');
};

renderCard(listCards);

btnAddProduct.addEventListener('click', () => {
	dataProducts.push({
		id: Math.random(),
		name: `Product ${dataProducts.length + 1}`,
		price: 100 * (dataProducts.length + 1),
		image: 'https://via.placeholder.com/150',
	});

	renderCard(listCards);
});
