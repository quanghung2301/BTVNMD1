document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const tbody = document.getElementById("tbody");
  const LOCAL_STORAGE_KEY = "tasks";
  let isEditing = false;
  let currentEditId = null;

  // Khởi tạo dữ liệu mẫu
  if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
    const initialTasks = [
      {
        id: 1,
        content: "Learn Javascript Session 01",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Anh Bách",
      },
      {
        id: 2,
        content: "Learn Javascript Session 2",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Lâm",
      },
      {
        id: 3,
        content: "Learn CSS Session 1",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Hiếu Ci ót ót",
      },
    ];
    saveTasksToLocalStorage(initialTasks);
  }

  // Hiển thị danh sách công việc
  function renderTasks() {
    const tasks = getTasksFromLocalStorage();
    tbody.innerHTML = "";

    tasks.forEach((task) => {
      const row = document.createElement("tr");

      row.innerHTML = `
                <td>${task.id}</td>
                <td>${task.content}</td>
                <td>${task.dueDate}</td>
                <td>${task.status}</td>
                <td>${task.assignedTo}</td>
                <td>
                    <button class="btn btn-sm btn-warning edit-btn" data-id="${task.id}">Sửa</button>
                    <button class="btn btn-sm btn-danger delete-btn" data-id="${task.id}">Xóa</button>
                </td>
            `;

      tbody.appendChild(row);
    });

    // Thêm sự kiện cho các nút
    document.querySelectorAll(".edit-btn").forEach((btn) => {
      btn.addEventListener("click", handleEdit);
    });

    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", handleDelete);
    });
  }

  // submit form
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const content = form.content.value.trim();
    const dueDate = form.dueDate.value;
    const status = form.status.value;
    const assignedTo = form.assignedTo.value.trim();

    if (!content || !dueDate || status === "Choose status" || !assignedTo) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    const tasks = getTasksFromLocalStorage();

    if (isEditing) {
      // Cập nhật công việc
      const index = tasks.findIndex((task) => task.id === currentEditId);
      if (index !== -1) {
        tasks[index] = {
          id: currentEditId,
          content,
          dueDate,
          status,
          assignedTo,
        };
      }
      resetForm();
    } else {
      // Thêm công việc mới
      const newId =
        tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;
      tasks.push({
        id: newId,
        content,
        dueDate,
        status,
        assignedTo,
      });
    }

    saveTasksToLocalStorage(tasks);
    renderTasks();
  });

  // Xử lý sửa công việc
  function handleEdit(e) {
    const taskId = parseInt(e.target.dataset.id);
    const tasks = getTasksFromLocalStorage();
    const task = tasks.find((task) => task.id === taskId);

    if (task) {
      form.content.value = task.content;
      form.dueDate.value = task.dueDate;
      form.status.value = task.status;
      form.assignedTo.value = task.assignedTo;
      form.courseId.value = task.id;

      isEditing = true;
      currentEditId = taskId;
      form.querySelector('button[type="submit"]').textContent = "Cập nhật";
    }
  }

  // Xử lý xóa công việc
  function handleDelete(e) {
    if (confirm("Bạn có chắc muốn xóa công việc này?")) {
      const taskId = parseInt(e.target.dataset.id);
      let tasks = getTasksFromLocalStorage();

      tasks = tasks.filter((task) => task.id !== taskId);
      saveTasksToLocalStorage(tasks);
      renderTasks();
    }
  }

  // Reset form về trạng thái ban đầu
  function resetForm() {
    form.reset();
    form.status.value = "Choose status";
    form.querySelector('button[type="submit"]').textContent = "Submit";
    isEditing = false;
    currentEditId = null;
  }

  // Lấy danh sách công việc từ Local Storage
  function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  }

  // Lưu danh sách công việc vào Local Storage
  function saveTasksToLocalStorage(tasks) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }

  // Hiển thị danh sách ban đầu
  renderTasks();
});
