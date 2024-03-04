// Cho array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,7,5,2,4,13];
const array1 = [1, 5, 2, 6, 2, 8, 9, 4, 6, 2, 3, 5, 7, 9, 3, 2, 75, 6, 4, 3, 7, 5, 2, 4, 13];

// Hãy in ra vị trí đẩu tiên xuất hiện số 7
// console.log("🚀 ~ firstIndexOfSeven:", array1.indexOf(7));
// console.log("🚀 ~ firstIndexOfSeven:", array1.findIndex(number => number === 7));

// Hãy in ra vị trí cuối cùng xuất hiện số 7
// let lastIndexOfSeven = -1;

// for (let i = array1.length - 1; i >= 0; i--) {
//     if (array1[i] === 7) {
//         lastIndexOfSeven = i;
//         break;
//     }
// }
// console.log("🚀 ~ lastIndexOfSeven:", lastIndexOfSeven);

// Hãy sắp xếp array1 theo thứ tự tăng dần và giảm dần
// console.log("🚀 ~ array1:", array1.sort((a, b) => a - b));

// console.log("🚀 ~ array1:", array1.sort((a, b) => b - a));

// Sử dụng hàm filter để tạo ra array2 từ array1 chứa các phần tử có giá trị lớn hơn 5
// const array2 = array1.filter(number => number > 5);
// console.log("🚀 ~ array2:", array2);

//  Sử dụng hàm filter để tạo ra 1 array3 chứa các giá trị thỏa mãn các điều kiện sau: là lớn hơn 5 và phần tử đó cộng 2 chia hết cho 3
const array3 = array1.filter(num => num > 5 && (num + 2) % 3 === 0);
console.log("🚀 ~ array3:", array3);

