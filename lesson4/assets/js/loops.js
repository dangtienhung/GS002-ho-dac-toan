// for
// for (let i = 0; i < 5; i++) {
// 	console.log('so thu tu', i);
// }

// for in
const object = {
	name: 'dang tien hung',
	age: 30,
};

const userInfo = {
	name: 'đặng tiến hưng',
	email: 'hung1@gmail.com',
	date_of_birth: '2023-08-01T13:40:38.964Z',
	password: 'f4f389e028449a97e616b1a750112edf00ed88b6857f78956e6789b27c25afa8',
	created_at: '2023-12-28T16:35:08.062Z',
	email_verify_token: '',
	forgot_password_token: '',
	bio: '',
	location: '',
	website: '',
	username: 'hung1',
	avatar: '',
	cover_photo: '',
};

const password = userInfo.password;

// for (let key in userInfo) { // chỉ dùng với object không dùng với array
// 	// muốn lấy ra password
// 	if (key === 'password') {
// 		console.log('password', userInfo[key]);
// 	}
// }

// for of: chỉ dùng với array, không dùng với object
// const arr = [1, '2', { name: 'hung', age: 30 }, 4, 5];
// for (let item of arr) {
// 	console.log('item', item);
// }

// while
let i = 0;
// while (i < 5) {
// 	console.log('so thu tu', i);
// 	i++;
// }

// do while
let j = 0;
// do {
// 	console.log('so thu tu', j);
// 	j++;
// } while (j < 5);

// conditional
// if (i === 0) {
// 	console.log('i = 0');
// } else if (i === 1) {
// 	console.log('i = 1');
// } else {
// 	console.log('i = 2');
// }

// switch
// switch (i) {
// 	case 0:
// 		console.log('i = 0');
// 		break;
// 	case 1:
// 		console.log('i = 1');
// 		break;
// 	default:
// 		console.log('i = 2');
// }

// sự khác nhau if-else và switch
// if-else: dùng để kiểm tra điều kiện
// switch: dùng để kiểm tra giá trị của biến

// break: dùng để kết thúc vòng lặp
// continue: dùng để bỏ qua 1 vòng lặp
// return: dùng để kết thúc hàm

// ex:
// for (let i = 0; i < 5; i++) {
// 	if (i === 3) {
// 		break;
// 		// continue;
// 		// return;
// 	}
// 	console.log('so thu tu', i);
// }

// console.log('end');

// throw statement: dùng để ném ra 1 lỗi
// ex
// throw new Error('loi roi');

// try...catch: dùng để bắt lỗi
// ex
try {
	console.log('success');
} catch (error) {
	console.log('error');
} finally {
	console.log('first finally block');
}
