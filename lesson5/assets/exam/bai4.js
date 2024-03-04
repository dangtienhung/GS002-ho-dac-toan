// bài 3: Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả
// Ví dụ:
// Cho: str_input = "program"; in ra: "margorp"
// Cho: str_input = "data"; in ra: "atad"
// Đầu vào: str_input Đầu ra: đảo ngược chuỗi và in ra kết quảGợi ý
// Nhớ lại việc sử dụng vòng lặp for cho chuỗi

function daoNguocChuoi(str_input) {
	let reversed_str = '';
	for (let i = str_input.length - 1; i >= 0; i--) {
		reversed_str += str_input[i];
	}
	return reversed_str;
}

let str_input = 'program';
let ket_qua = daoNguocChuoi(str_input);
console.log('Chuỗi đảo ngược là:', ket_qua);

str_input = 'data';
ket_qua = daoNguocChuoi(str_input);
console.log('Chuỗi đảo ngược là:', ket_qua);
