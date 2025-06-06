const original = {
  name: "Bob",
  age: 30,
};

// copy object
let copy = Object.assign({}, original);

// thay đổi thuộc tính name ở đối tượng copy
copy.name = "Charlie";

// in cả 2 đối tượng
console.log(original);
console.log(copy);
