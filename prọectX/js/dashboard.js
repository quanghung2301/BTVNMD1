const sampleuserData = [
  {
    id: 1,
    username: "Leanne Graham",
    email: "Sincere@april.biz",
    password: "123456789",
    role: "ADMIN",
    status: true,
    birthday: "31/01/1995",
  },
  {
    id: 2,
    username: "Ervin Howell",
    email: "Shanna@melissa.tv",
    password: "123456789",
    role: "USER",
    status: false,
    birthday: "25/10/1985",
  },
  {
    id: 3,
    username: "Clementine Bauch",
    email: "Julianne@kory.org",
    password: "123456789",
    role: "USER",
    status: false,
    birthday: "29/10/1995",
  },
  {
    id: 4,
    username: "Patricia Lebsack",
    email: "Lucio@annie.ca",
    password: "123456789",
    role: "USER",
    status: false,
    birthday: "15/07/1995",
  },
  {
    id: 5,
    username: "Kurtis Weissnat",
    email: "Telly.Hger@billy.biz",
    password: "123456789",
    role: "ADMIN",
    status: true,
    birthday: "14/09/1999",
  },
];

let alluserData = [];

function loaduserData() {
  const storeduserData = localStorage.getItem("userData");

  if (storeduserData && storeduserData !== "undefined") {
    alluserData = JSON.parse(storeduserData);
  } else {
    // Lưu dữ liệu mẫu nếu không có dữ liệu
    alluserData = [...sampleuserData];
    localStorage.setItem("userData", JSON.stringify(alluserData));
  }
}

function renderUserTable() {
  const tbody = document.getElementById("userTableBody");
  tbody.innerHTML = ""; //  // Xóa nội dung cũ trước khi render

  alluserData.forEach((user) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>TR${user.id.toString().padStart(4, "0")}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.role}</td>
      <td>${user.birthday}</td>
      <td>
        <span class="status-badge ${
          user.status ? "status-active" : "status-deactivate"
        }">
          ${user.status ? "● Active" : "● Deactivate"}
        </span>
      </td>
      <td>
        <div class="actions">
          <button class="action-btn delete-btn" data-id="${
            user.id
          }"><img src="../assets/icons/Button.png" alt="" /></button>
          <button class="action-btn edit-btn" data-id="${
            user.id
          }"> <img src="../assets/icons/_Button base.png" alt="" /></button>
        </div>
      </td>
    `;
    tbody.appendChild(tr); // Sửa thành 'tbody' thay vì 'tableBody'
  });
  attachDeleteEvents(); // Gắn  lại sau mỗi lần render
  attachEditEvents();
}
//xóa người dùng
function attachDeleteEvents() {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const userId = parseInt(btn.getAttribute("data-id"));
      deleteUser(userId);
    });
  });
}
function deleteUser(id) {
  const confirmed = confirm("Bạn có chắc chắn muốn xoá người dùng này?");
  if (!confirmed) return;

  alluserData = alluserData.filter((user) => user.id !== id);
  localStorage.setItem("userData", JSON.stringify(alluserData));
  renderUserTable();
  attachDeleteEvents(); // Cần gắn lại sự kiện sau khi render mới
}
//điều hướng chuyển qua edituser
function attachEditEvents() {
  const editButtons = document.querySelectorAll(".edit-btn");
  editButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const userId = parseInt(btn.getAttribute("data-id"));
      localStorage.setItem("editUserId", userId);
      window.location.href = "http://127.0.0.1:5500/page/edit.html";
    });
  });
}

// function editUser() {
//   window.location.href = "http://127.0.0.1:5500/page/edit.html";
// }
// Khởi chạy
loaduserData();
renderUserTable();
// Tạo hàm tìm kiếm người dùng
function searchUsersByName(searchTerm) {
  const normalizedSearch = searchTerm.toLowerCase().trim();

  if (normalizedSearch === "") {
    return alluserData; // Trả về tất cả nếu ô tìm kiếm trống
  }

  // Lọc người dùng có tên chứa từ khóa tìm kiếm
  return alluserData.filter((user) =>
    user.username.toLowerCase().includes(normalizedSearch)
  );
}

// Thêm sự kiện tìm kiếm
document.getElementById("search-input").addEventListener("input", function () {
  const searchTerm = this.value;
  const filteredUsers = searchUsersByName(searchTerm);
  renderFilteredUserTable(filteredUsers);
});

// Cập nhật hàm render để hỗ trợ dữ liệu đã lọc
function renderFilteredUserTable(userDataArray) {
  const tbody = document.getElementById("userTableBody");
  tbody.innerHTML = "";

  userDataArray.forEach((user) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>TR${user.id.toString().padStart(4, "0")}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.role}</td>
      <td>${user.birthday}</td>
      <td>
        <span class="status-badge ${
          user.status ? "status-active" : "status-deactivate"
        }">
          ${user.status ? "● Active" : "● Deactivate"}
        </span>
      </td>
      <td>
        <div class="actions">
          <button class="action-btn delete-btn" data-id="${
            user.id
          }"><img src="../assets/icons/Button.png" alt="" /></button>
          <button class="action-btn edit-btn" data-id="${
            user.id
          }"> <img src="../assets/icons/_Button base.png" alt="" /></button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  attachDeleteEvents();
  attachEditEvents();
}
