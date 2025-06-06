let count = 20;
let firstNumber = 0;
let secondNumber = 1;
let i = 0;
while (i < count) {
  console.log(firstNumber);
  let nextNumber = firstNumber + secondNumber;
  firstNumber = secondNumber;
  secondNumber = nextNumber;
  i = i + 1;
}
