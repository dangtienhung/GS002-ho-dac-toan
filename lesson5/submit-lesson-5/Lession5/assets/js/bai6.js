let data = [1, 2, 3, 1, 2, 3, 4, 5, 6, 5, 4, 6];
let duplicates = {};

for (const element of data) {
  // Kiểm tra nếu phần tử đã xuất hiện trước đó
  if (duplicates[element] === undefined) {
    // Nếu chưa xuất hiện, đánh dấu là đã xuất hiện một lần
    duplicates[element] = 1;
  } else {
    // Nếu đã xuất hiện, tăng số lần xuất hiện lên 1
    duplicates[element]++;
  }
}

// In ra các phần tử bị trùng nhau
console.log("Các phần tử bị trùng nhau trong mảng là:");
for (let key in duplicates) {
  if (duplicates[key] > 1) {
    console.log(key);
  }
}
