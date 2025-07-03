const form = document.getElementById("add-user-form");
const userCodeInput = document.getElementById("usercode");
userCodeInput.value = Date.now();
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const userCode = Number(userCodeInput.value.trim());
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;
  const birthday = document.getElementById("birthday").value;
  const status = document.querySelector('input[name="status"]:checked').value;
  const description = document.getElementById("description").value.trim();

  // Error flags
  let isValid = true;

  // Username validation
  const usernameError = document.getElementById("username-error");
  if (username === "") {
    usernameError.style.display = "block";
    isValid = false;
  } else {
    usernameError.style.display = "none";
  }

  // Email validation
  const emailError = document.getElementById("email-error");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "" || !emailPattern.test(email)) {
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  // Password validation
  const passwordError = document.getElementById("password-error");
  if (password.length < 8) {
    passwordError.style.display = "block";
    isValid = false;
  } else {
    passwordError.style.display = "none";
  }

  // Final check
  if (!isValid) return;

  // Add user to localStorage
  const newUser = {
    id: userCode,
    username,
    email,
    password,
    role,
    birthday,
    status,
    description,
  };
  console.log(newUser);
  let userData = JSON.parse(localStorage.getItem("userData")) || [];
  userData.push(newUser);
  localStorage.setItem("userData", JSON.stringify(userData));

  alert("Người dùng đã được thêm thành công");
  window.location.href = "http://127.0.0.1:5500/dashboard.html"; // giả sử trang này là quản lý user
});

// Handle back button
document
  .getElementById("back-from-add")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "http://127.0.0.1:5500/dashboard.html"; // trang quay lại
  });
