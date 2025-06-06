let soTienBanDau = parseFloat(prompt("Nhập số tiền ban đầu (VND):"));
let soThang = parseInt(prompt("Nhập số tháng cho vay:"));
let laiSuatHangThang =
  parseFloat(prompt("Nhập lãi suất hàng tháng (%):")) / 100;
let tongTien = soTienBanDau;
for (let i = 1; i <= soThang; i++) {
  tongTien = tongTien * (1 + laiSuatHangThang);
}

const tienLai = tongTien - soTienBanDau;

alert(`
        
        Tổng tiền nhận được: ${tongTien.toLocaleString("vi-VN")} VND
        Tiền lãi: ${tienLai.toLocaleString("vi-VN")} VND`);
