let n = Number(prompt(` Tính giai thừa của một số :`));

if (n < 0) {
  console.log("Không tính được giai thừa số âm");
} else if (n === 0 || n === 1) {
  console.log(" giai thừa =1");
} else {
  let ketQua = 1;
  for (let i = 2; i <= n; i++) {
    ketQua *= i;
  }
  console.log(" giai thừa   " + ketQua);
}
