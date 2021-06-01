let user = {
	name: "John",
	age: 12,
};

user.isAdmin = true;

delete user.age;

// alert(user["name"])
// alert(user.age)
// alert(user.isAdmin)

// let fruit = prompt("What fruit should we buy?", "Apple")
// let bag = {
// 	[fruit]: 5,
// }

// alert(bag.aa)

// alert("age" in user)
// alert("name" in user)
// alert("azazaz" in user)

// let obj = {
// 	"test": undefined,
// }

// alert(obj.test === undefined)
// alert("test" in obj)

for (key in user) {
	console.log(key);
	console.log(user[key]);
}