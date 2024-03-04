const container = document.querySelector('.container');
const container4 = document.querySelector('.container4');
const container1 = document.querySelector('.children.container1');

container.innerText = '<div class="red">AHIHIHII</div>';
container4.innerHTML = '<div class="red">AHIHIHII</div>';

container1.innerHTML = '<div class="container1">Ho Dac Toan</div>';

container1.addEventListener('click', function () {
	container1.classList.toggle('active');
	// container1.classList.add('active');
	// container1.classList.remove('active');
	// if (container1.classList.contains('active') === true) {
	// 	container1.classList.remove('active');
	// } else {
	// 	container1.classList.add('active');
	// }
});

// container.innerHTML = 'dang tien hung';

// const container = document.querySelector('#hello-container');

// const container = document.getElementById('hello-container'); // sử dụng với id
// const container = document.getElementsByClassName('hello-container'); // sử dụng với class

// const demoList = document.querySelectorAll('.demo');
// console.log('🚀 ~ demoList:', demoList);

// demoList.forEach((demoItem, index) => {
// 	console.log('🚀 ~ demoList.forEach ~ index:', index);
// 	console.log('🚀 ~ demoList.forEach ~ demoItem:', demoItem);
// 	if (index === 1) {
// 		demoItem.style.color = 'red';
// 		demoItem.style.fontSize = '32px';
// 	}
// });
