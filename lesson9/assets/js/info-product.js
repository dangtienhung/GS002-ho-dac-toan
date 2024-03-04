import { data } from './data.js';

const id = new URLSearchParams(window.location.search).get('id');

const productInfo = data.filter((item) => item.id === Number(id));
console.log('🚀 ~ productInfo:', productInfo);

const container = document.querySelector('.container');

const html = /* html  */ `
  <div class="">
    <h1>${productInfo[0].title}</h1>
    <p>${productInfo[0].body}</p>
    <p>${productInfo[0].price}</p>
  </div>
`;

container.innerHTML = html;
