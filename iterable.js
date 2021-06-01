let range = {
	from: 1,
	to: 5
};

range[Symbol.iterator] = function() {
	return {
		current: this.from,
		last: this.to,

		next() {
			if (this.current <= this.last) {
				return { done: false, value: this.current++ };
			} else {
				return { done: true };
			}
		}
	};
}

// for(let num of range) {
// 	alert(num);
// }

// let str = '𝒳😂';
// for (let char of str) {
// 	alert(char);
// }

// let arrayLike = {
// 	0: "hello",
// 	1: "world",
// 	length: 2
// }

// for (let item of arrayLike) {}

let arr = Array.from(range);
alert(arr);