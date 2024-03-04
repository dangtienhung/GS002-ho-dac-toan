const data2 = [1, 1, 3, 4, 4, 5, 6, 7, 9];
console.log('data2: ', data2);
//a. Thêm số 8 vào cuối array data2 .
console.log(data2.push(8));
console.log(data2);
// b.  Thêm số 10 vào cuối array data2
console.log(data2.push(10));
console.log(data2);
// c. Thêm số 5 vào đầu  array data2 .
console.log(data2.unshift(5));
console.log(data2);
// d. Đổi phần tử có vị trí là 5 thành số  11 .
console.log(data2.splice(5, 1, 11));
console.log(data2);
// e. Xóa phần tử vị trí  thứ 4 và thêm hai số 5 và 7 vào data2 .
console.log('data2: ', data2.splice(4, 1, 5, 7));
console.log('data2: ', data2)
