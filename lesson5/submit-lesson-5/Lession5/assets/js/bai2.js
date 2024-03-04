const data03 = ['Cam','Xoài','Mít','Bưởi','Quýt','Dưa gang'];
// a ) Copy array data03. Bằng  …
// const data03Copy = [...data03];
// console.log(data03Copy);
// b )  Sửa phần tử “Dưa gang” thành “Dưa hấu”
// console.log('data03: ', data03.splice(5, 1, 'Dưa hấu'));
// console.log('data03: ', data03);
// c ) Thêm “mận” vào giữa data03 .
// console.log('data03: ', data03.splice(2, 0, 'Mận'));
// console.log('data03: ', data03);
// d ) Thêm “Dứa” vào đầu của data03 và “Chanh”  vào cuối data03 .
console.log('data03: ', data03.unshift('Dứa'));
console.log('data03: ', data03.push('Chanh'));
console.log('data03: ', data03);
