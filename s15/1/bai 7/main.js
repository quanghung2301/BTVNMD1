let arr = [];

// Nhập 10 số
for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
  arr.push(num);
}

// Sắp xếp giảm dần
arr.sort((a, b) => b - a);

console.log("Mảng sau khi sắp xếp giảm dần:");
console.log(arr);
