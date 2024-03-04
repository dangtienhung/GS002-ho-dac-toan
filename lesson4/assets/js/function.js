// có tất cả 4 function

// 1. declare function
function sayHello() {
	return 'Hello';
}
sayHello();

// 2. expression function
const sayHello2 = function sayHello() {
	console.log('Hello');
};

// 3. arrow function (ES6)
const sayHello3 = () => {
	return 'Hello';
};

// 4. IIFE (Immediately Invoked Function Expression)
(function () {
	console.log('IIFE', 'Hello');
})();
