let tuoi = parseInt(prompt("Nhập tuổi cần kiểm tra:"));

if (isNaN(tuoi)) {
  alert("Vui lòng nhập một số hợp lệ");
} else if (tuoi > 0 && tuoi < 120) {
  alert(`${tuoi} là tuổi hợp lệ của một người`);
} else {
  alert(`${tuoi} không phải là tuổi hợp lệ của một người`);
}
