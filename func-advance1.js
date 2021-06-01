function sum(a, b) {
	return a + b;
}

function sumAll(...args) {
	let sum = 0;
	for (let arg of args) sum += arg;
	return sum;
}

// alert(sum(1,2,3,4,5));
// alert(sumAll(1,2,3,4,5,6));
// alert(sumAll(1,2,3,4));

let arr = [3, 5, 1, 1, -1, 0];
let arr2 = [0, -1, 31]
alert( Math.max(...arr, ...arr2) );

let str = "Hello";
let chars = [...str];
console.log(chars);