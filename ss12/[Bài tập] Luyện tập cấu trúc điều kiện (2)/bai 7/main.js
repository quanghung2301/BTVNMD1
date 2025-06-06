// : Giải phương trình bậc 2.
let a = Number(
  prompt(`giải phương trình bậc 2 có dạng: ax^2+ bx + c = 0,nhap so a`)
);
let b = Number(prompt(`nhap so b`));
let c = Number(prompt(`nhap so c`));
if (a === 0) {
  if (b === 0) {
    if (c === 0) {
      document.write("Phương trình có vô số nghiệm");
    } else {
      document.write("Phương trình vô nghiệm");
    }
  } else {
    let x = -c / b;
    document.write("Phương trình có nghiệm duy nhất x = ${x}`");
  }
} else {
  let delta = b * b - 4 * a * c;
  if (delta < 0) {
    document.write("Phương trình vô nghiệm");
  } else if (delta === 0) {
    let x = -b / (2 * a);
    document.write(`Phương trình có nghiệm kép x = ${x}`);
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.write(
      `Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`
    );
  }
}
