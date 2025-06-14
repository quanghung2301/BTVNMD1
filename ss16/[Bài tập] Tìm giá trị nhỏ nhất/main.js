function minArray(arr) {
  if (Array.isArray(arr) === false) {
    alert("Dữ liệu không hợp lệ");
    return;
  }
  if (arr.length === 0) {
    alert("Mảng không có phần tử");
    return;
  }
  const min = arr.reduce((acc, cur) => Math.min(acc, cur));
  return min;
}
const arr1 = [3, 5, 1, 8, -3, 7, 8];
let min1 = minArray(arr1);
console.log(`min của mảng arr1 là: ${min1}`);
const arr2 = [7, 12, 6, 9, 20, 56, 89];
let min2 = minArray(arr2);
console.log(`min của mảng arr2 là: ${min2}`);

const arr3 = [];
let min3 = minArray(arr3);
console.log(`min của mảng arr3 là: ${min3}`);

const arr4 = [0, 0, 0, 0, 0, 0];
let min4 = minArray(arr4);
console.log(`min của mảng arr4 là: ${min4}`);
