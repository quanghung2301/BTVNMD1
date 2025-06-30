let products = [
  { id: 1, name: "Milk", count: 100 },
  { id: 2, name: "Orange", count: 100 },
  { id: 3, name: "Butter", count: 100 },
  { id: 4, name: "Butter", count: 100 },
];

// 1. Thêm đối tượng mới
const newProduct = { id: 4, name: "Bread", count: 50 };
products.push(newProduct);

// 2. Xóa đối tượng có id = 2
products = products.filter((product) => product.id !== 2);

// 3. Cập nhật đối tượng có id = 3
const productToUpdate = products.find((product) => product.id === 3);
if (productToUpdate) {
  productToUpdate.count = 0;
}

// 4. Tìm kiếm theo từ khóa "Butter"
const keyword = "Butter";
const foundProduct = products.find((product) => product.name === keyword);
console.log(foundProduct);
if (foundProduct) {
  console.log("Thông tin sản phẩm:");
  console.log("ID:", foundProduct.id);
  console.log("Tên:", foundProduct.name);
  console.log("Số lượng:", foundProduct.count);
} else {
  console.log("Không có dữ liệu bạn tìm kiếm");
}
