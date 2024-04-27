import { mockData } from './mock-data.js';

const productContainer = document.querySelector('.product-container');

const html = mockData.map((product) => {
	return /* html */ `
    <div class="flex flex-col bg-gray-100 rounded border shadow-md shadow-gray-500/50">
      <div class="p-2 flex flex-col">
        <img src=${product.image} alt="" class="rounded h-[120px] sm:h-[160px] w-full object-fit">
        <div class="mt-2 sm:mt-6 flex flex-col gap-4 items-start sm:items-center">
          <h1 class="font-bold text-left text-sm sm:text-[20px]">${product.title}</h1>
          <p class="text-left hidden sm:block sm:text-center text-xs">Lorem ipsum dolor, sit amet
            consectetur
            adipisicing elit.
            Odit,
            soluta.</p>
          <p class="font-semibold text-sm">$${product.price}</p>
        </div>
      </div>
      <div class="bg-red-200 py-4 text-center uppercase font-semibold text-sm">Add To Cart</div>
    </div>
  `;
});

productContainer.innerHTML = html.join('');
// jwt
// access token/ token
