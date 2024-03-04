// 3. Cho 1 số từ 0 đến 6. Viết chương trình để in ra thứ trong tuần
// number: 0 =>

// Ví dụ
// Đầu vào: 1 số từ 0 đến 6
// Đầu ra: In ra thứ trong tuần
// Gợi ý
// Đọc phần lý thuyết sau để hiểu về swich case trong JS

let n = parseInt(prompt('Mời bạn chọn 1 số (1 -> 6): '));
switch (n) {
	case 0:
		console.log('Thứ 2');
		break;
	case 1:
		console.log('Thứ 3');
		break;
	case 2:
		console.log('Thứ 4');
		break;
	case 3:
		console.log('Thứ 5');
		break;
	case 4:
		console.log('Thứ 6');
		break;
	case 5:
		console.log('Thứ 7');
		break;
	case 6:
		console.log('Chủ Nhật');
		break;
	default:
		console.log('Bạn nhập sai!');
		break;
}
