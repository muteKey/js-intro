let sum = (a, b) => a + b

alert(sum(2, 3));

let sayHi = () => alert("Hello");

sayHi();

let printAndSum = (a, b) => {
	let result = a + b;
	console.log(result);
	return result
}

printAndSum(1, 2);