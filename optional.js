// let user = {}
// alert(user?.address?.street)

let user1 = {
  admin() {
    alert("Я администратор");
  }
}

let user2 = {};

user1.admin?.();
user2.admin?.();