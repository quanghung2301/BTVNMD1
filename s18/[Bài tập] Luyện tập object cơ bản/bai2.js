const student = {
  id: 1,
  name: "Nguyễn Văn A",
  gender: "nam",
  age: 20,
  mark: 8,
};
const newStudent = {
  id: 2,
  name: "Nguyễn Thị B",
  gender: "nữ",
  age: 21,
  mark: 9,
};
const students = [student, newStudent];
console.log("ID:", students[1].id);
console.log("Tên:", students[1].name);
console.log("Giới tính:", students[1].gender);
console.log("Tuổi:", students[1].age);
console.log("Điểm:", students[1].mark);
