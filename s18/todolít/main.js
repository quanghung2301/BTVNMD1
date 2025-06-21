let tasks = [
  {
    id: 1,
    text: "Đi ngủ",
  },
  {
    id: 2,
    text: "Đi chơi",
  },
  {
    id: 3,
    text: "Đi da bong",
  },
];

// CRUD=> R-C-D-U
// In du lieu (Render du lieu)
function renderTodo() {
  //B1: Truy xuất the ul
  let ul = document.getElementById("task-list");
  //Tranh lap du lieu sau khi thuc hien chuc nang
  ul.innerHTML = "";
  //B2: In du lieu
  tasks.forEach((element) => {
    //B2.2: Tao the li
    let li = document.createElement("li");
    //B2.3: Sua noi dung cua the li (innerHTML)
    li.innerHTML = `
          <span>${element.text}</span>
          <div>
           <button id=${element.id} class="edit-btn">Edit</button>
           <button id=${element.id} class="delete-btn">Delete</button>
          </div>
        `;
    //B2.4: Dua the li vao trong the ul
    ul.appendChild(li);
  });
}
renderTodo();

// C Them moi cong viec
let currentEditId = null;
//B1: Truy xuat input va nut them sang JS
let addBtn = document.getElementById("add-btn");
//B2; Gan su kien click cho nut them
addBtn.addEventListener("click", function () {
  let input = document.getElementById("new-task");
  //B2.1: Lay gia tri cua o input
  let inputValue = input.value;
  if (inputValue === "") {
    alert("Khong duoc de trong cong viec");
    return;
  } else {
    if (currentEditId === null) {
      //B2.2: Tao ra newTodo =  {
      //   id: 3,
      //   text: "Đi da bong",
      // },
      let newTodo = {
        id: Math.floor(Math.random() * 1000),
        text: inputValue,
      };
      //B2.3: Them newTodo vao trong mang task
      tasks.push(newTodo);
      //B2.4: Xoa du lieu trong input
    } else {
      // Trạng thái CẬP NHẬT
      let taskItem = tasks.find((task) => task.id === currentEditId);
      taskItem.text = inputValue;
      currentEditId = null;
      addBtn.innerText = "Thêm";
    }
  }
  input.value = ""; // tai sao inputValue ='' khong duoc
  //B3: Goi lai ham renderTodo()
  renderTodo();
});

// D-U
let container = document.getElementById("container");
container.addEventListener("click", function (e) {
  if (e.target.classList.contains("edit-btn")) {
    let idEdit = Number(e.target.id);
    let taskItem = tasks.find((task) => task.id === idEdit);
    let input = document.getElementById("new-task");
    input.value = taskItem.text;
    addBtn.innerText = "Cập nhật";
    currentEditId = idEdit;
  }
  if (e.target.classList.contains("delete-btn")) {
    let idDelete = Number(e.target.id);
    tasks = tasks.filter((task) => task.id !== idDelete);
    if (currentEditId === idDelete) {
      currentEditId = null;
      inputElement.value = "";
      addBtn.innerText = "Thêm";
    }
    renderTodo();
  }
});
