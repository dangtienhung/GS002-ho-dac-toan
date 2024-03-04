/*
Array methods - p2
1. foreach
2. map
3. filter
5. some
6. every
7. find
8. findIndex

4. reduce
*/

// javascript module

import { users } from './data.js';

// 1. foreach: dùng để duyệt qua từng phần tử của mảng, không trả về mảng mới
// for (let i = 0; i < users.length; i++) {
// 	console.log('🚀 ~ i:', i);
// 	console.log(users[i]);
// }

// users.forEach(function (user, index) {
// 	console.log('🚀 ~ index:', index);
// 	console.log(user);
// });

// 2. map: tạo ra mảng mới từ mảng cũ (thay đổi giá trị của mảng cũ)
// const newUsers = users.map(function (user, index) {
// 	return user.name;
// });
// console.log('🚀 ~ newUsers ~ newUsers:', newUsers);

// 3. filter: (lọc ra các phần tử thỏa mãn điều kiện)
// const newUsers = users.filter(function (user, index) {
// 	return user.age > 23 && user.age < 29;
// });
// console.log('🚀 ~ newUsers ~ newUsers:', newUsers);

// 5. some: kiểm tra xem có phần tử nào thỏa mãn điều kiện không
// const hasUser = users.some(function (user, index) {
// 	return user.isDie === false;
// });
// console.log('🚀 ~ hasUser ~ hasUser:', hasUser);

// 6. every: kiểm tra xem tất cả phần tử ở trong mảng có thỏa mãn điều kiện cho trước không
// const isDie = users.every(function (user, index) {
// 	return user.isDie === false;
// });
// console.log('🚀 ~ hasUser ~ hasUser:', isDie);

// 7. find: tìm kiếm phần tử đầu tiên thỏa mãn điều kiện
// const hasUser = users.find(function (user, index) {
// 	return user.isDie === true;
// });
// console.log('🚀 ~ hasUser ~ hasUser:', hasUser);

// 8. findIndex: tìm kiếm vị trí (index) của phần tử đầu tiên thỏa mãn điều kiện
// const hasUser = users.findIndex(function (user, index) {
// 	return user.isDie === true;
// });
// console.log('🚀 ~ hasUser ~ hasUser:', hasUser);

// 4. reduce: tính toán giá trị dựa trên các phần tử của mảng
// const totalAge = users.reduce(function (
// 	accumulator, // giá trị tích lũy
// 	currentValue, // giá trị hiện tại
// 	index // vị trí của phần tử hiện tại
// ) {
// 	console.table(`🚀 ~ currentValue ~ currentValue:`, currentValue);
// 	console.table(`🚀 ~ accumulator ~ accumulator:`, accumulator);
// 	console.table(`🚀 ~ index ~ index:`, index);
// 	return accumulator + currentValue.age;
// }, 0);
// console.table('🚀 ~ totalAge ~ totalAge:', totalAge);
// const totalAge = 0;
// for (let i = 0; i < users.length; i++) {
// 	totalAge += users[i].age;
// }
