// Kiểm tra xem 3 số thực (a,b,c) nhập vào có phải là cạnh của một tam giác
let a = Number(prompt(`Nhập độ dài cạnh a:`));
let b = Number(prompt(`Nhập độ dài cạnh b:`));
let c = Number(prompt(`Nhập độ dài cạnh c:`));
if ((a > 0) & (b > 0) & (c > 0)) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    alert(`${a}, ${b}, ${c} không tạo thành tam giác`);
  } else {
    alert(`${a}, ${b}, ${c} là độ dài 3 cạnh của một tam giác`);
  }
} else {
  alert(`${a}, ${b}, ${c} không tạo thành tam giác`);
}
