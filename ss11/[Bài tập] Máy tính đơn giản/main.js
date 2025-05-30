let a = Number(prompt("so a"));
let b = Number(prompt("so b"));
let c = String(prompt("nhập phép tính"));
if (c == "+") {
  alert("kết quả là: " + (a + b));
} else if (c == "-") {
  alert("kết quả là: " + (a - b));
} else if (c == "/") {
  alert("kết quả là: " + a / b);
} else if (c == "*") {
  alert("kết quả là: " + a * b);
} else {
  alert("phép tính không tồn tại");
}
