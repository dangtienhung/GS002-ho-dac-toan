let array = [1, 3, 7, 8, 9, 0, 10, 3, 2];


// áp dụng array.sort  sắp xếp array trên theo thứ tự tăng dần  .
// array.sort((a, b) => a - b);
// console.log("🚀 ~ array:", array);


// áp dụng array.map  , Tạo ra một array mới với các giá trị gấp 2 array cũ .
// const newArr = array.map(number => number * 2);
// console.log("🚀 ~ newArr:", newArr);

// cho array3= [1,2,3,5,1] hãy thêm array3 vào phía trước của array và in ra kết quả .
const array3= [1,2,3,5,1];
console.log("Array: ", array3.concat(array));

// cho array3= [1,2,3,5,1] hãy thêm array3 vào vị trí số 5 của array và in ra kết quả (ÁP dụng array.splice )
// const array3= [1,2,3,5,1];
// console.log("Array: ", array.splice(5, 0, ...array3));
// console.log("Array: ", array);

// áp dụng array.filter lọc ra các phần tử lẻ , các phẩn tử chẵn .
// console.log("🚀 ~ evenNumbers:", array.filter(number => number % 2 !== 0));

// console.log("🚀 ~ oddNumbers:", array.filter(number => number % 2 === 0));

//  Thêm số 5 vào giữa array .
// Math.floor(array.length / 2) dùng để tìm chỉ mục giữa của mảng dù mảng có độ dài là số chẵn/lẻ
console.log("🚀 ~ array:", array.splice(Math.floor(array.length / 2), 0, 5));
console.log("🚀 ~ array:", array);

