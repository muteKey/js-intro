// let id1 = Symbol("id");
// let id2 = Symbol("id");

// alert(id1 == id2);

// let id = Symbol("id");

// let user = {
// 	name: "John",
// 	age: 12,
// 	[id]: 123,
// };

// console.log(user)

// for (let key in user) alert(key);

// let clone = Object.assign({}, user);

// alert(clone[id])

let id = Symbol.for("id"); 
let idAgain = Symbol.for("id");

alert(id == idAgain)

alert(Symbol.keyFor(id))