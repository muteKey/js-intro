"use strict"

let user = {
	name: "John",
	age: 12,
};

let admin = { name: "Test" }

function sayHi() {
	alert(this.name)
}

user.func = sayHi
admin.func = sayHi

let hi = user.func

console.log(hi)

