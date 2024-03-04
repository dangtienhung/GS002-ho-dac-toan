const btnOpenModal = document.querySelector('.container .btn-active');
const dialogContainer = document.querySelector('.container .dialog-container');
const btnCloseModal = document.querySelector('.dialog-container .btn-close');

// btnOpenModal.addEventListener('click', function () {
// 	dialogContainer.classList.remove('hidden');
// });

// btnCloseModal.addEventListener('click', function () {
// 	dialogContainer.classList.add('hidden');
// });

// onclick
// btnOpenModal.onclick = function () {
// 	dialogContainer.classList.remove('hidden');
// };
// onClick
// (click)

// các dạng functionQ
// 1. function declaration
function myFunction() {
	console.log('myFunction');
}
// 2. function expression
const myFunction2 = function myFunction() {
	console.log('myFunction');
};
// 3. arrow function
const myFunction3 = () => {
	console.log('myFunction');
};
// 4. IIFE: Immediately Invoked Function Expression
(function myFunction() {
	console.log('myFunction4');
})();
