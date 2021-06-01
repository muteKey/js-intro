// let a = {};
// let b = {};

// alert( a == b );


let user = {name: "Ivan"};
let permissions1 = { canEdit: false };
let permissions2 = { canView: true };

Object.assign(user, permissions1, permissions2)

console.log(user)
