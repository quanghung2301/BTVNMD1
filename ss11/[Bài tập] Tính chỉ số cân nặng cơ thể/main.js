let height = Number(prompt("nhập chiều cao theo m "));
let weight = Number(prompt("nhập can nặng theo kg"));

let bmi = weight / (height * height);
console.log("bmi" + bmi);
if (bmi < 18.5) {
  alert(`Thân hình hơi gầy một tí đề nghị ăn bồi dưỡng thêm`);
} else if (bmi < 25) {
  alert(` Thân hình hoàn toàn bình thường dề nghị luôn luôn giữ sức khỏe`);
} else if (bmi < 30) {
  alert(` hơi bé éo một tí `);
} else if (bmi < 35) {
  alert(` bạn béo phì cấp đọ 1 `);
} else if (bmi < 40) {
  alert(` bạn béo phì cấp đọ 2 `);
} else {
  alert(` bạn béo phì cấp độ max`);
}
