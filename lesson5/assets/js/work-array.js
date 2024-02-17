/*
làm việc với array

javascript array methods

1. to string() // chuyển mảng thành chuỗi
2. join() // chuyển mảng thành chuỗi
3. pop() // xóa phần tử cuối mảng
4. push() // thêm phần tử vào cuối mảng
5. shift() // xóa phần tử đầu mảng
6. unshift() // thêm phần tử vào đầu mảng
7. splice() // xóa hoặc thêm phần tử
8. concat() // nối mảng
9. slice() // cắt mảng

1. filter
2. map
3. reduce
4. forEach
5. some
6. every
7. find
8. findIndex
9. sort

*/

const fruits = ['banana', 'apple', 'orange', 'mango', 'kiwi', 'grape'];
const fruits2 = ['cherry', 'abc', 'ahihi'];

// 9. slice() // cắt mảng // trả về mảng mới
// console.log('🚀 ~ fruits:', fruits.slice(1, 2));

// concat: nối mảng
// console.log('🚀 ~ fruits:', fruits2.concat(fruits));

// 1. to string() // chuyển mảng thành chuỗi
// console.log('🚀 ~ fruits:', fruits.toString());
// console.log('🚀 ~ fruits:', typeof fruits.toString());

// 2. join() // chuyển mảng thành chuỗi // có thể truyền vào tham số để ngăn cách các phần tử
// console.log('🚀 ~ fruits:', fruits.join());

// 3. pop() // xóa phần tử cuối mảng // trả về phần tử bị xóa
// console.log('🚀 ~ fruits:', fruits.pop());
// console.log('🚀 ~ fruits:', fruits);

// 4. push() // thêm phần tử vào cuối mảng // trả về độ dài mảng sau khi thêm
// console.log('🚀 ~ fruits:', fruits.push('cherry'));
// console.log('🚀 ~ fruits:', fruits);

// 5. shift() // xóa phần tử đầu mảng // trả về phần tử bị xóa
// console.log('🚀 ~ fruits:', fruits.shift());
// console.log('🚀 ~ fruits:', fruits);

// 6. unshift() // thêm phần tử vào đầu mảng // trả về độ dài mảng sau khi thêm
// console.log('🚀 ~ fruits:', fruits.unshift('cherry', 'abc', 'ahihi'));
// console.log('🚀 ~ fruits:', fruits);

// 7. splice() // xóa hoặc thêm phần tử // trả về mảng các phần tử bị xóa
// fruits.splice(1);
// fruits.splice(1, 2);
// fruits.splice(0, 0, 'dang', 'tien');
// console.log('🚀 ~ fruits:', fruits.splice(1, 0, 'dang', 'tien'));
// console.log('🚀 ~ fruits:', fruits);

// concat(); // nối mảng
