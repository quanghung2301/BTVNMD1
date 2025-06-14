//lấy phần tử từ DOM

let loginBtn = document.getElementById(`loginBtn`);
let usernameInput = document.getElementById(`username`);
let passwordInput = document.getElementById(`password`);
// Tạo tài khoản ADM
const ADMUsername = `huanrose@gmail.com`;
const ADMPassword = `123456`;
//Click Đăng nhập
loginBtn.addEventListener(`click`, function () {
  let username = usernameInput.value;
  let password = passwordInput.value;
  // Kiểm tra
  if (username === ADMUsername && password === ADMPassword) {
    alert(`${username} Cảm ơn bạn đã đăng nhập`);
  } else {
    alert(
      `Đăng nhập thất bại! Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.`
    );
  }
});
