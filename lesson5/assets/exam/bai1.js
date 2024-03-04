// bài 1. Viết chương trình javascript để sắp xếp 4 số (a, b, c, d). Và in ra kết quả.

// Ví dụ:
// Cho a = 3; b = 2; c= 9; d= -1; In ra "9,3,2,-1";
// Cho a = 3; b = 3; c= 8; d= -5; In ra "8,3,3,-5";
// Đầu vào: a, b, c, dĐầu ra: sắp xếp 4 số (a, b, c, d). Và in ra kết quả. Gợi ý: Cố gắng nhớ lại kiến thức if...else

// input: 4 số a, b, c, d
// output: sắp xếp 4 số (a, b, c, d). Và in ra kết quả

const compare = (number1, number2) => {
	if (number1 < number2) {
		let temp = a;
		a = b;
		b = temp;
	}
};

const sortData = (a, b, c, d) => {
	if (a < b) {
		let temp = a;
		a = b;
		b = temp;
	}

	if (a < c) {
		let temp = a;
		a = c;
		c = temp;
	}

	if (a < d) {
		let temp = a;
		a = d;
		d = temp;
	}

	if (b < c) {
		let temp = b;
		b = c;
		c = temp;
	}

	if (b < d) {
		let temp = b;
		b = d;
		d = temp;
	}

	if (c < d) {
		let temp = c;
		c = d;
		d = temp;
	}

	return `${a},${b},${c},${d}`;
};
let a = 3;
let b = 2;
let c = 9;
let d = -1;

console.log(sortData(a, b, c, d));
