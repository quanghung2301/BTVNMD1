//  Tính tổng của 20 số đầu tiên trong dãy fibonacci.
let count = 20;
let firstNumber = 0;
let secondNumber = 1;
let sum = 0;
let i = 0;
while (i < count) {
  console.log(firstNumber);
  let nextNumber = firstNumber + secondNumber;
  sum += firstNumber;
  console.log(sum);
  firstNumber = secondNumber;
  secondNumber = nextNumber;
  i = i + 1;
}
