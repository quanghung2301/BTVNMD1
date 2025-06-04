// Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
let a = Number(prompt(`nhap so thu 1`));
let b = Number(prompt(`nhap so thu 2`));
let c = Number(prompt(`nhap so thu 3`));
if (a > b) {
  if (a > c) {
    alert(`so lon nhat la: ${a}`);
  } else {
    alert(`so lon nhat la: ${c}`);
  }
} else {
  if (b > c) {
    alert(`so lon nhat la: ${b}`);
  } else {
    alert(`so lon nhat la: ${c}`);
  }
}
