// Cho array3 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5,4,3,8,9];
const array3 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5,4,3,8,9];
// Tạo newArray chứa các giá trị chẵn của array3 (Áp dụng filter )
const newArray = array3.filter(number => number % 2 === 0);
console.log("🚀 ~ newArray:", newArray);


// Tạo newArray2 chứa các giá trị lẻ của array3 và có giá trị lớn hơn 3.
const newArray2 = array3.filter(number => number % 2 !== 0 && number > 3);
console.log("🚀 ~ newArray2:", newArray2);

