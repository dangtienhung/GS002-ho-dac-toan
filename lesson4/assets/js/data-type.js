const b = undefined; // undefined
const c = null; // null
const d = '10'; // number (integer)
const symbol = Symbol('a'); // symbol
const f = BigInt(100); // big int

const object = {
	name: 'dang tien hung',
	age: 30,
};
const object2 = {
	name: 1,
	age: 31,
};

const name = object.name;
const age = object.age;

// Built-in Objects
// map, foreach, Math
const ramdon = Math.random();

// Type Casting
const id = '1';
const result = Number(id);

// ==, ===
const number1 = 1;
const number2 = '1';

console.log(number1 == number2); // true// so sánh giá trị và không quan tâm kiểu dữ liệu
console.log(number1 === number2); // false// so sánh giá trị và kiểu dữ liệu

// Object.is (ES6)
console.log(Object.is(number1, number2)); // false
console.log(Object.is(object, object2)); // ===
