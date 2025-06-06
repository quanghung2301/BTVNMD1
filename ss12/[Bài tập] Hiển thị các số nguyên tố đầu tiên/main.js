let count = 0;
let num = 2;

console.log("20 số nguyên tố đầu tiên là:");

while (count < 20) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    count++;
    console.log(count + ". " + num);
  }

  num++;
}
