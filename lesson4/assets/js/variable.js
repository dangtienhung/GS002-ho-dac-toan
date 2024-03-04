// variable: let, const, var

var a = 10;
var b = 'dang tien hung';

// es6

const d = 30;

// var/let: có thể gán lại giá trị
b = 'dang tien hung 2';

// const: không thể gán lại giá trị

// hoisting: var, let, const khai báo biến trước khi sử dụng

// variable scope
let c = 20;
function test() {
	console.log('🚀 ~ test ~ c:', c);
}

test();
console.log('🚀 ~ test ~ c:', c);
