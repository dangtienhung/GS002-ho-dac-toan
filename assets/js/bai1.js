function sortAndPrintNumbers(a, b, c, d) {
    let max, min;

    // Tìm số lớn nhất
    if (a >= b && a >= c && a >= d) {
        max = a;
    } else if (b >= a && b >= c && b >= d) {
        max = b;
    } else if (c >= a && c >= b && c >= d) {
        max = c;
    } else {
        max = d;
    }

    // Tìm số nhỏ nhất
    if (a <= b && a <= c && a <= d) {
        min = a;
    } else if (b <= a && b <= c && b <= d) {
        min = b;
    } else if (c <= a && c <= b && c <= d) {
        min = c;
    } else {
        min = d;
    }

    // Tìm số thứ hai lớn nhất và nhỏ nhất
    let secondMax, secondMin;
    if (a !== max && a !== min) {
        secondMax = a;
    } else if (b !== max && b !== min) {
        secondMax = b;
    } else if (c !== max && c !== min) {
        secondMax = c;
    } else {
        secondMax = d;
    }

    if (a !== max && a !== min && a !== secondMax) {
        secondMin = a;
    } else if (b !== max && b !== min) {
        secondMin = b;
    } else if (c !== max && c !== min) {
        secondMin = c;
    } else {
        secondMin = d;
    }

    // In ra kết quả
    console.log(max + ', ' + secondMax + ', ' + secondMin + ', ' + min);
}

// Test với các giá trị đầu vào
sortAndPrintNumbers(3, 2, 9, -1); // Kết quả: "9,3,2,-1"
sortAndPrintNumbers(3, 3, 8, -5); // Kết quả: "8,3,3,-5"
