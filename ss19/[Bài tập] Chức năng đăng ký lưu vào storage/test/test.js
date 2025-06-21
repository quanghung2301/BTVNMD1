document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Lấy giá trị từ form
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();

    // Reset thông báo lỗi
    document.getElementById("emailError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";
    document.getElementById("confirmPasswordError").style.display = "none";

    // Kiểm tra hợp lệ
    let isValid = true;

    // Kiểm tra email
    if (!email) {
      document.getElementById("emailError").textContent = "Vui lòng nhập email";
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    } else if (!validateEmail(email)) {
      document.getElementById("emailError").textContent = "Email không hợp lệ";
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    } else if (isEmailRegistered(email)) {
      document.getElementById("emailError").textContent =
        "Email đã được đăng ký";
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    }

    // Kiểm tra mật khẩu
    if (!password) {
      document.getElementById("passwordError").textContent =
        "Vui lòng nhập mật khẩu";
      document.getElementById("passwordError").style.display = "block";
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById("passwordError").textContent =
        "Mật khẩu phải có ít nhất 6 ký tự";
      document.getElementById("passwordError").style.display = "block";
      isValid = false;
    }

    // Kiểm tra xác nhận mật khẩu
    if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").textContent =
        "Mật khẩu không khớp";
      document.getElementById("confirmPasswordError").style.display = "block";
      isValid = false;
    }

    // Nếu hợp lệ thì đăng ký
    if (isValid) {
      registerAccount(email, password);
      alert("Đăng ký thành công!");
      document.getElementById("registerForm").reset();
    }
  });

// Hàm kiểm tra định dạng email
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  return re.test(email);
}

// Hàm kiểm tra email đã đăng ký chưa
function isEmailRegistered(email) {
  const accounts = getRegisteredAccounts();
  return accounts.some((account) => account.email === email);
}

// Hàm lấy danh sách tài khoản từ Local Storage
function getRegisteredAccounts() {
  const accounts = localStorage.getItem("registeredAccounts");
  return accounts ? JSON.parse(accounts) : [];
}

// Hàm đăng ký tài khoản mới
function registerAccount(email, password) {
  const accounts = getRegisteredAccounts();
  accounts.push({ email, password });
  localStorage.setItem("registeredAccounts", JSON.stringify(accounts));
}
