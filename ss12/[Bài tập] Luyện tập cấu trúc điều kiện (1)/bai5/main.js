// Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ (Xuất Sắc, Giỏi, Khá, Trung Bình, Yếu)
let a = Number(prompt(`điểm bài kiểm tra`));
let b = Number(prompt(` điểm thi giữa kỳ`));
let c = Number(prompt(`điểm thi cuối kỳ`));
let d = (a + b + c) / 3; //tinh trung binh
if (d < 4) {
  document.write("Yếu)");
} else if (d < 6) {
  document.write("Trung Bình");
} else if (d < 8) {
  document.write("Khá");
} else if (d < 8.5) {
  document.write("Giỏi");
} else if (d < 9.5) {
  document.write("Xuất Sắc");
}
