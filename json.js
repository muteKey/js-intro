let student = {
	name: "John",
	age: 25,
	isAdmin: true,
	courses: ["css", "js", "html"],
	wife: null
};

let json = JSON.stringify(student);

// console.log(typeof json);
// console.log(json);

// let user = {
// 	sayHi() {
// 		alert("Hello");
// 	},

// 	[Symbol("id")]: 123,
// 	something: undefined
// };

let obj = JSON.parse(json)

console.log(obj);

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str, function(key, value) {
	if (key == 'date') return new Date(value);
	return value;
});

console.log(meetup);