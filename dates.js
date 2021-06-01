let now = new Date();
console.log(now);

let jan_1970 = new Date(0);
console.log(jan_1970);

let date = new Date("2020-08-20");
console.log(date);

let constructed_date = new Date(2020, 0, 1, 0, 3, 0, 0);
console.log(constructed_date);

console.log(+date);
console.log(Date.now());