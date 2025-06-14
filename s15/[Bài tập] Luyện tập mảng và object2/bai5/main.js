let charArray = [];
let size = 6;

// Nhập từng ký tự từ bàn phím
for (let i = 0; i < size; i++) {
  let char = prompt(`Nhập ký tự thứ ${i + 1}:`);
  console.log(char.length);
  if (char.length > 1) {
    console.log("ký tự khong hop le");
    break;
  }
  charArray.push(char);
}

// Thay thế '-' bằng '_'
for (let i = 0; i < charArray.length; i++) {
  if (charArray[i] === "-") {
    charArray[i] = "_";
  }
}

console.log("Mảng sau khi thay thế:", charArray);
