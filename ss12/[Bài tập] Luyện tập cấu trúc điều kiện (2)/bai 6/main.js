//  Giải phương trình bậc 1.
let a = Number(prompt(`giải phương trình bậc 1 : ax + b = 0,nhap so a`));
let b = Number(prompt(`nhap so B`));
if (a === 0) {
  if (b === 0) {
    document.write("Phương trình có vô số nghiệm");
  } else {
    document.write("Phương trình vô nghiệm");
  }
} else {
  let x = -b / a; // Tính nghiệm khi a != 0
  document.write(`Phương trình có nghiệm duy nhất x = ${x}`);
}
