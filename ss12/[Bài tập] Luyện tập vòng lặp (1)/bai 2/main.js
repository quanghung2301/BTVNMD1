nhietDo = parseFloat(prompt("Nhập nhiệt độ hiện tại:"));

if (nhietDo > 100) {
  alert("Nhiệt độ quá cao! Vui lòng giảm nhiệt độ.");
} else if (nhietDo < 20) {
  alert("Nhiệt độ quá thấp! Vui lòng tăng nhiệt độ.");
} else {
  alert(`Nhiệt độ ${nhietDo} độ C là phù hợp.`);
}
