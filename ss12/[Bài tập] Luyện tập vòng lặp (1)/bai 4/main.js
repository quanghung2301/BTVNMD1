// Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
let count = 20;
let firstNumber = 0;
let secondNumber = 1;
let i = 0;
while (i < count) {
  // console.log(firstNumber);
  let nextNumber = firstNumber + secondNumber;
  firstNumber = secondNumber;
  secondNumber = nextNumber;
  if (firstNumber % 5 === 0) {
    console.log(`Số Fibonacci đầu tiên chia hết cho 5 là: ${firstNumber}`);
    break;
  }
  i = i + 1;
}
