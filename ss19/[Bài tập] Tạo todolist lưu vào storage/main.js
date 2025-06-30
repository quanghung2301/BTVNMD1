// DOM elements
const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task");
const addBtn = document.getElementById("add-btn");
const clearAllBtn = document.getElementById("clear-all");
const pendingCount = document.getElementById("pending-count");

// Tasks array
let tasks = [];

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  renderTaskList();

  // Add task event
  addBtn.addEventListener("click", addTask);
  newTaskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });

  // Clear all tasks event
  clearAllBtn.addEventListener("click", clearAllTasks);
});

// Add a new task
function addTask() {
  const taskText = newTaskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const newTask = {
    id: Date.now().toString(),
    text: taskText,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTaskList();

  // Clear input
  newTaskInput.value = "";
  newTaskInput.focus();
}

// Toggle task completion
function toggleTask(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });

  saveTasks();
  renderTaskList();
}

// Delete a task
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  renderTaskList();
}

// Clear all tasks
function clearAllTasks() {
  if (tasks.length === 0) return;

  if (confirm("Are you sure you want to delete all tasks?")) {
    tasks = [];
    saveTasks();
    renderTaskList();
  }
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  updatePendingCount();
}

// Load tasks from localStorage
function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  }
  updatePendingCount();
}

// Update pending tasks count
function updatePendingCount() {
  const pending = tasks.filter((task) => !task.completed).length;
  pendingCount.textContent = pending;
}

// Render task list
function renderTaskList() {
  if (tasks.length === 0) {
    taskList.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-clipboard-list"></i>
                        <p>No tasks found</p>
                    </div>
                `;
    return;
  }

  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.className = `task-item ${task.completed ? "completed" : ""}`;
    taskItem.innerHTML = `
                    <div class="task-check" data-id="${task.id}"></div>
                    <div class="task-text">${task.text}</div>
                    <button class="task-delete" data-id="${task.id}">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                `;

    taskList.appendChild(taskItem);
  });

  // Add event listeners for check and delete buttons
  document.querySelectorAll(".task-check").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.getAttribute("data-id");
      toggleTask(id);
    });
  });

  document.querySelectorAll(".task-delete").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.getAttribute("data-id");
      deleteTask(id);
    });
  });

  updatePendingCount();
}
