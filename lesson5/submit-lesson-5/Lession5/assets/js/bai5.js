function sumOfArrays(list1, list2) {
    // Nối hai mảng
    let combinedList = list1.concat(list2);
    // Sắp xếp mảng kết hợp
    combinedList.sort(function(a, b) {
      return a - b;
    });
    // Tính tổng của tất cả các phần tử
    let sum = combinedList.reduce(function(total, current) {
      return total + current;
    }, 0);
    return sum;
  }

  let list1 = [3, 6, 7, 9, 5];
  let list2 = [3, 5, 7, 8, 6, 6, 7];

  console.log("Tổng của tất cả các phần tử trong hai mảng là:", sumOfArrays(list1, list2));
