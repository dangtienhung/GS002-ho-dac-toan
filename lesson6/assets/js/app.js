// const userLists = document.getElementById('list-users');
// const userLists1 = document.getElementsByClassName('list-users');

import { usersData } from './data.js';

const userLists = document.querySelector('#list-users');

// sử dụng map đê hiển thị danh sách người dùng
// const html = usersData.map(function (userItem) {
// 	console.log('🚀 ~ html ~ userItem:', userItem);
// 	return `
//     <li class="flex justify-between gap-x-6 py-5">
//       <div class="flex min-w-0 gap-x-4">
//         <img class="h-12 w-12 flex-none rounded-full bg-gray-50"
//           src="${userItem.avatar}"
//           alt="">
//         <div class="min-w-0 flex-auto">
//           <p class="text-sm font-semibold leading-6 text-gray-900">${userItem.name}</p>
//           <p class="mt-1 truncate text-xs leading-5 text-gray-500">${userItem.email}</p>
//         </div>
//       </div>
//       <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
//         <p class="text-sm leading-6 text-gray-900">${userItem.phone}</p>
//         <p class="mt-1 text-xs leading-5 text-gray-500">${userItem.active}</time></p>
//       </div>
//     </li>
//   `;
// });
// userLists.innerHTML = html.join('');

// sử dụng foreach để hiển thị danh sách người dùng
let html = '';
usersData.forEach(function (userItem) {
	html += `
    <li class="flex justify-between gap-x-6 py-5">
      <div class="flex min-w-0 gap-x-4">
        <img class="h-12 w-12 flex-none rounded-full bg-gray-50"
          src="${userItem.avatar}"
          alt="">
        <div class="min-w-0 flex-auto">
          <p class="text-sm font-semibold leading-6 text-gray-900">${userItem.name}</p>
          <p class="mt-1 truncate text-xs leading-5 text-gray-500">${userItem.email}</p>
        </div>
      </div>
      <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p class="text-sm leading-6 text-gray-900">${userItem.phone}</p>
        <p class="mt-1 text-xs leading-5 text-gray-500">${userItem.active}</time></p>
      </div>
    </li>
  `;
});

userLists.innerHTML = html;
