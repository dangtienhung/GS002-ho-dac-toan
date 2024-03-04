// cho  array = [1,5,7,8,9,15] sử dụng map hoặc filter
const array = [1, 5, 7, 8, 9, 15];
//  in ra các số chẵn trong mảng
// filter
// console.log("🚀 ~ evenNumbers:", array.filter(number => number % 2 === 0));

// map
// const evenArr = array.map(number => {
//   if (number % 2 === 0) {
//     return number;
//   }
// });
// console.log("Các số chẵn trong mảng:", evenArr.filter(number => number !== undefined));


//  in ra các số lẻ trong mảng
// console.log("🚀 ~ oddNumbers:", array.filter(number => number % 2 !== 0));

// in ra các số lớn hơn hoặc bằng 5 trong mảng
// console.log("🚀 ~ numberArr:", array.filter(number => number >= 5));


// in ra các số chia hết cho 5 trong mảng
// console.log("🚀 ~ divisibleBy5:", array.filter(number => number % 5 === 0));


//  Tìm các số > 5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị
// const newArr = array.map(number => {
//     if (number > 5) {
//         return number + 1;
//     } else {
//         return number;
//     }
// });

// console.log("🚀 ~ newArr ~ newArr:", newArr);


// dùng slice để copy mảng từ phần tử số 3 đến phần tử cuối cùng
// console.log("🚀 ~ arr2:", array.slice(2));

// .splice để xóa 1 phần tử trong mảng
// console.log("🚀 ~ array:", array.splice(0, 1));
// console.log("🚀 ~ array:", array);


// .push thêm 1 phần tử vào cuối mảng
// console.log("🚀 ~ array:", array.push(20));
// console.log("🚀 ~ array:", array);

// dùng vòng for tăng kết quả của các phần tử array lên 2 lần,
//kết quả sẽ là mảng sau [2,10,14,16,18,30]
// const newArr = [];
// for (let i = 0; i < array.length; i++) {
//     newArr.push(array[i] * 2);
// }
// console.log("🚀 ~ array:", newArr);

