// let users = [{
//     id: 1,
//     username: "Thanh Nha",
//     email: "nha@gmail.com",
//     password: 123456,
//     status: true,
// }]
let users = JSON.parse(localStorage.getItem("users")) || [];

// Lay thong tin dang ky nguoi dung
// B1: Truy van the form va gan su kien
let form = document.getElementById("main-form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Ngan reload lai trang
  // B2: Truy van cac the input
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  // console.log(email, username, password);
  //B3: Truy van cac the thong bao loi
  let emailError = document.getElementById("emailError");
  let usernameError = document.getElementById("usernameError");
  let passwordError = document.getElementById("passwordError");

  // Regex
  // regex.test(string) - test() la phuong thu mac dinh cua Regex trong Javascript
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const usernameRegex = /^[a-zA-Z0-9_]{4,16}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  // console.log(emailRegex.test(email)); - true/false
  // B4: Reset lai thong bao loi
  emailError.innerText = "";
  usernameError.innerText = "";
  passwordError.innerText = "";
  // B5: Validate du lieu
  let isValid = true;
  if (!emailRegex.test(email)) {
    emailError.innerText = "Email khong hop le";
    isValid = false;
  }
  if (!usernameRegex.test(username)) {
    usernameError.innerText = "UserName khong hop le";
    isValid = false;
  }
  if (!passwordRegex.test(password)) {
    passwordError.innerText = "Password khong hop le";
    isValid = false;
  }
  if (isValid) {
    // Kiểm tra email đã tồn tại chưa (không phân biệt hoa thường)
    const emailExists = users.some(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (emailExists) {
      emailError.innerText = "Email này đã được đăng ký";
      isValid = false;
    }
  }

  if (isValid) {
    // alert("Dang ky thanh cong")
    // - Khoi tao doi tuong moi tu thong tin nguoi dung nhap
    let newUser = {
      // id: Date.now(), // tinh tu diem khoi - 1/1/1970 => ms
      id: Date.now(),
      // Lay id cua phan tu cuoi cung + 1 => lieu co loi khong
      username: username,
      email: email,
      password: password,
      status: true,
    };
    // - Them doi tuong moi vao trong mang users
    users.push(newUser);
    // - Cap nhat mang user len localStorage
    localStorage.setItem("users", JSON.stringify(users));
    // - Chuyen sang trang dang ky
    window.location.href = "http://127.0.0.1:5500/page/singin.html";
  }
});
