// cho arr [1,8,5,2,7,6,9,2,6]
const arr = [1, 8, 5, 2, 7, 6, 9, 2, 6];
// dùng .sort để sắp xếp mảng tăng dần và giảm dần
// sắp xếp arr tăng dần

console.log("🚀 ~ arrAscending:", arr.sort((a, b) => a - b));

// sắp xếp arr giảm dần
console.log("🚀 ~ arrDescending:", arr.sort((a, b) => b - a));

