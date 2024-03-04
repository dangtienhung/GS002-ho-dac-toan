let arr2 = ['4', '6', 1, 2, 3, 5, 'y', 't', 5];

console.log("🚀 ~ arr2:", arr2);












let sum = 0;

for (let i = 0; i < arr2.length; i++) {
  // Kiểm tra nếu phần tử là một số
  if (typeof arr2[i] === 'number' && !isNaN(arr2[i])) {
    sum += arr2[i]; // Thêm số vào tổng
  }
}

console.log("Tổng các số trong mảng là:", sum);
