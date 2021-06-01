let fruits = ["apple", "banana", "orange"];
fruits.push("plum");

// alert(fruits.length);

// alert(fruits.pop())

// alert(fruits.shift())

// for (let i = 0; i < fruits.length; i++) {
// 	alert(fruits[i]);
// }

// for (let fruit of fruits) {
// 	alert(fruit)
// }

// alert(fruits.toString())

// let arr = ["a", "b"];
// arr.push(function() {
// 	alert( this );
// })

// console.log(arr[2]);

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
// 	alert(`${item} has position ${index} in ${array}`);
// });

// let users = [
//   {id: 1, name: "Вася"},
//   {id: 2, name: "Петя"},
//   {id: 3, name: "Маша"}
// ];

// let someUsers = users.filter(item => item.id < 3);

// alert(someUsers.length); // 2

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6