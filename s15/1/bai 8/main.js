let a = [];
let b = [];

// Nhập mảng a
// console.log("Nhập mảng a (10 phần tử):");
for (let i = 0; i < 10; i++) {
  a.push(parseInt(prompt(`Nhập phần tử a[${i}]:`)));
}

// Nhập mảng b
// console.log("Nhập mảng b (10 phần tử):");
for (let i = 0; i < 10; i++) {
  b.push(parseInt(prompt(`Nhập phần tử a[${i}]:`)));
}

// Tạo mảng c
let c = [...b, ...a];

// Hiển thị các mảng

document.write("Mảng c (nối b + a):", c);
