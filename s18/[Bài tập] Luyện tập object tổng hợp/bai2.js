// Khởi tạo dữ liệu ban đầu
let courses = [
  { name: "HTML", complete: false },
  { name: "CSS", complete: false },
  { name: "Basic of javascript", complete: false },
  { name: "Node package Manager (npm)", complete: false },
  { name: "Git", complete: false },
];

// Hàm hiển thị danh sách khóa học
function displayCourses() {
  console.log("\nDanh sách khóa học:");
  courses.forEach((course, index) => {
    console.log(`${index + 1}. ${course.name}`);
    console.log(`Complete: ${course.complete}\n`);
  });
}

// Chương trình chính
while (true) {
  const command = prompt("Nhập lệnh (C/R/U/D/E): ").toUpperCase();

  if (command === "E") {
    console.log("Cảm ơn bạn đã đến với Rikkei Academy");
    break;
  }

  switch (command) {
    case "C": // Thêm khóa học mới
      const newName = prompt("Nhập tên khóa học mới: ");
      const newStatus = confirm(
        "Khóa học đã hoàn thành? (OK = Có, Cancel = Không)"
      );
      courses.push({ name: newName, complete: newStatus });
      displayCourses();
      break;

    case "R": // Hiển thị tất cả khóa học
      displayCourses();
      break;

    case "U": // Cập nhật khóa học
      const position =
        parseInt(prompt("Nhập vị trí khóa học cần cập nhật: ")) - 1;
      if (position >= 0 && position < courses.length) {
        const updatedName = prompt("Nhập tên mới (để trống nếu không đổi): ");
        const updatedStatus = confirm(
          "Cập nhật trạng thái? (OK = Hoàn thành, Cancel = Chưa hoàn thành)"
        );

        if (updatedName) courses[position].name = updatedName;
        courses[position].complete = updatedStatus;
        displayCourses();
      } else {
        console.log("Vị trí không hợp lệ!");
      }
      break;

    case "D": // Xóa khóa học
      const deletePos = parseInt(prompt("Nhập vị trí khóa học cần xóa: ")) - 1;
      if (deletePos >= 0 && deletePos < courses.length) {
        courses.splice(deletePos, 1);
        displayCourses();
      } else {
        console.log("Vị trí không hợp lệ!");
      }
      break;

    default:
      console.log("Lệnh không hợp lệ! Vui lòng nhập C, R, U, D hoặc E");
  }
}
