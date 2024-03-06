/* bất đồng
1. setTimeout
2. Promise
3. async/await
4. Event Loop: Call Stack - Web API - Callback Queue - Event Loop
5. setInterval
*/

// callback

// console.log('first');

// console.log('second');

// setTimeout(() => {
// 	console.log('third');
// }, 0);

// console.log('four');

// ex: callback: hàm ở trong hàm
// function myFunction(ahihi) {
// 	function myCallback(value) {
// 		console.log(value);
// 	}
// 	myCallback(ahihi);
// }

// myFunction('ahihi');

// function myFunction(callback) {
// 	callback('ahihi');
// }

// function myFunction2(value) {
// 	console.log(value);
// }

// myFunction(myFunction2);

// const demo = [1, 2, 3, 4];
// const test = demo.forEach((item) => {
// 	console.log(item);
// });

// promise
// có 3 trạng thái: pending, fulfilled, rejected
/*

1. pending: trạng thái ban đầu, chưa thực thi
2. fulfilled: thành công
3. rejected: thất bại

 */

// const promise = new Promise(function (resolve, reject) {
// 	// resolve: thành công
// 	// reject: thất bại
// 	console.log('🚀 ~ promise ~ number1:', number1);
// 	console.log('🚀 ~ promise ~ number2:', number2);
// 	if (number1 > number2) {
// 		resolve('Thành công');
// 	} else {
// 		reject('Thất bại');
// 	}
// });

// promise
// 	.then((data) => {
// 		console.log(data);
// 		return data;
// 	})
// 	.then((data) => {
// 		console.log(data);
// 		return data;
// 	})
// 	.then((data) => {
// 		console.log(data);
// 		return data;
// 	})
// 	.then((data) => {
// 		console.log(data);
// 		return data;
// 	})
// 	.then((data) => {
// 		console.log(data);
// 		return data;
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});
// promise hell

// async/await
const number1 = Math.ceil(Math.random() * 100);
const number2 = Math.ceil(Math.random() * 100);

const promise = new Promise(function (resolve, reject) {
	// resolve: thành công
	// reject: thất bại
	console.log('🚀 ~ promise ~ number1:', number1);
	console.log('🚀 ~ promise ~ number2:', number2);
	if (number1 > number2) {
		resolve('Thành công');
	} else {
		reject('Thất bại');
	}
});

async function myFunction() {
	try {
		const data = await promise;
		console.log('🚀 ~ myFunction ~ data:', data);
	} catch (error) {
		console.log('🚀 ~ myFunction ~ error:', error);
	}
}

const myFunction2 = async () => {
	try {
		const data = await promise;
		console.log('🚀 ~ myFunction ~ data:', data);
	} catch (error) {
		console.log('🚀 ~ myFunction ~ error:', error);
	}
};

myFunction2();
