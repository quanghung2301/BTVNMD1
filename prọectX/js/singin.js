// Nhap username + pass
// He thong so sanh username + pass  voi username + pass  da dang ky
// Neu dung thi dang nhap thanh cong
// Neu sai thi nhap lai

//B1: Lay thong tin users tu he thong (Lay thong tin tu Local)
let users = JSON.parse(localStorage.getItem("users")) || [];

//B2: Lay thong tin nguoi dung nhap vao
let form = document.getElementById("main-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  console.log("signin", email, password);
  //B3: So sanh thong tin nguoi dung voi thong tin he thong
  let result = users.some(
    (element) => element.email == email && element.password == password
  );
  console.log(result);
  // neu muon luu ca thong tin nguoi dung vua dang nhap thi co cach nao khong? => Signout
  // - Neu sai thi thong bao loi
  if (!result) {
    alert("Email hoặc Mật khẩu không chính xác!! Đăng nhập thất bại");
  } else {
    // - Neu dung thi dang nhap thanh cong va chuyen sang trang chu
    alert("Đăng Nhập thành công");
    window.location.href = "http://127.0.0.1:5500/dashboard.html";
  }
});
