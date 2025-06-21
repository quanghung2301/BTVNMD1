document.addEventListener("DOMContentLoaded", function () {
  const output = document.getElementById("output");
  const keyboard = document.getElementById("keyboard");

  // Tạo mảng các ký tự cho bàn phím
  const keys = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "Xóa",
  ];

  // Tạo các phím bấm
  keys.forEach((key) => {
    const keyElement = document.createElement("div");
    keyElement.className = "key";
    keyElement.textContent = key;

    if (key === "Xóa") {
      keyElement.classList.add("delete");
    }

    keyElement.addEventListener("click", function () {
      if (key === "Xóa") {
        // Xóa ký tự cuối cùng
        output.value = output.value.slice(0, -1);
      } else {
        // Thêm ký tự vào textarea
        output.value += key;
      }
    });

    keyboard.appendChild(keyElement);
  });
});
