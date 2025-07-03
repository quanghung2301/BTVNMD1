const form = document.getElementById("add-user-form");
const isEditMode = !!localStorage.getItem("editUserId");
const alluserData = JSON.parse(localStorage.getItem("userData")) || [];
document.querySelector(".form-header h2").innerText = "Edit user";
const userId = parseInt(localStorage.getItem("editUserId"));
const user = alluserData.find((u) => u.id === userId);
if (user) populateForm(user);
window.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = getUserFromForm();
    if (!validateUser(user)) return;
    const userId = parseInt(localStorage.getItem("editUserId"));
    const index = alluserData.findIndex((u) => u.id === userId);
    user.id = userId;
    alluserData[index] = user;
    localStorage.removeItem("editUserId");

    localStorage.setItem("userData", JSON.stringify(alluserData));
    window.location.href = "http://127.0.0.1:5500/dashboard.html";
  });

  document.getElementById("back-from-add").addEventListener("click", () => {
    localStorage.removeItem("editUserId");
    window.location.href = "http://127.0.0.1:5500/dashboard.html";
  });
});

// Gán dữ liệu vào form khi edit
function populateForm(user) {
  document.getElementById("Usercode").value = `TR${user.id}`;
  document.getElementById("Usercode").readOnly = true;
  document.getElementById("username").value = user.username;
  document.getElementById("email").value = user.email;
  document.getElementById("email").readOnly = true;
  document.getElementById("password").value = user.password;
  document.getElementById("role").value = user.role;
  document.getElementById("birthday").value = formatToInputDate(user.birthday);
  document.getElementById("description").value = user.description || "";
}

function getUserFromForm() {
  return {
    username: document.getElementById("username").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value,
    role: document.getElementById("role").value,
    birthday: document.getElementById("birthday").value,
    description: document.getElementById("description").value,
    status: document.getElementById("status-active").checked,
  };
}

function validateUser(user) {
  let isValid = true;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const showError = (id, condition) => {
    document.getElementById(id).style.display = condition ? "block" : "none";
    if (condition) isValid = false;
  };

  showError("username-error", user.username === "");
  showError("email-error", user.email === "" || !emailRegex.test(user.email));
  showError("password-error", user.password.length < 8);

  return isValid;
}

function generateUserCode(userData) {
  const maxId = userData.reduce((max, user) => Math.max(max, user.id || 0), 0);
  return `TR${(maxId + 1).toString().padStart(4, "0")}`;
}

function formatToInputDate(dateStr) {
  const parts = dateStr.split("/");
  if (parts.length === 3) {
    return `${parts[2]}-${parts[1].padStart(2, "0")}-${parts[0].padStart(
      2,
      "0"
    )}`;
  }
  return dateStr;
}
