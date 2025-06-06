console.log("1. Tam giác vuông góc trái dưới:");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
console.log("2. Tam giác vuông góc phải dưới:");
let i = 1;
while (i <= 5) {
  let row = "";
  let j = 1;
  while (j <= 5) {
    row += j <= 5 - i ? "  " : "* ";
    j++;
  }
  console.log(row);
  i++;
}
console.log("3. Tam giác vuông góc trái trên:");
let k = 5;
do {
  let row = "";
  let l = 1;
  do {
    row += l <= k ? "* " : " ";
    l++;
  } while (l <= 5);
  console.log(row);
  k--;
} while (k >= 1);
console.log("4. Tam giác vuông góc phải trên:");
for (let m = 1; m <= 5; m++) {
  let row = "";
  for (let n = 1; n <= 5; n++) {
    row += n >= m ? "* " : "  ";
  }
  console.log(row);
}
