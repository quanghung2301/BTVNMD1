let modal = document.getElementById("myModal");
let btn = document.getElementById("openModal");
let span = document.querySelector(".close");

// Mở modal khi click
btn.onclick = function () {
  modal.style.display = "block";
};

// Đóng modal khi click  x
span.onclick = function () {
  modal.style.display = "none";
};

// Đóng modal khi click ra ngoài modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
