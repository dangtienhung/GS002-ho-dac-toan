// var  hoaQua = [
// 	{ten:”Xoài”,sx:”China”,sl:”100”},
// 	{ten:”Xoài”,sx:”VietNam”,sl:”130”},
// 	{ten:”Xoài”,sx:”ThaiLan”,sl:”100”},
// 	{ten:”Cam”,sx:”China”,sl:”200”},
// {ten:”Cam”,sx:”ThaiLan”,sl:”150”},
// {ten:”Nho”,sx:”VietNam”,sl:”120”},
// {ten:”Xoài”,sx:”ThaiLan”,sl:”100”},
// ]

let hoaQua = [
    { ten: "Xoài", sx: "China", sl: "100" },
    { ten: "Xoài", sx: "VietNam", sl: "130" },
    { ten: "Xoài", sx: "ThaiLan", sl: "100" },
    { ten: "Cam", sx: "China", sl: "200" },
    { ten: "Cam", sx: "ThaiLan", sl: "150" },
    { ten: "Nho", sx: "VietNam", sl: "120" },
    { ten: "Xoài", sx: "ThaiLan", sl: "100" }
]

// console.log("🚀 ~ hoaQua:", hoaQua);

// Áp dụng filter lọc các trái cây có nơi sản xuất tại VietNam .
// console.log("🚀 ~ Trái cây sản xuất tại Việt Nam:", hoaQua.filter(fruits => fruits.sx === "VietNam"));

// Áp dụng  filter lọc các trái cây có số lượng (sl) > = 150 .
// console.log("🚀 ~ Trái cây có số lượng >= 150:", hoaQua.filter(fruits => fruits.sl >= 150));

// Viết function lọc sản phẩm hoa quả  theo tên  .
function locHoaQuaTheoTen(arr, tenSanPham) {
    return arr.filter(fruits => fruits.ten.toLowerCase() === tenSanPham.toLowerCase());
}
// Sử dụng hàm để lọc sản phẩm có tên là "xoài"
const sanPhamLocTheoTen = locHoaQuaTheoTen(hoaQua, "xoài");

console.log("🚀 ~ sanPhamLocTheoTen:", sanPhamLocTheoTen);

// Viết function lọc sản phẩm hoa quả  theo Nước .
function locHoaQuaTheoNuoc(arr, nuocSanXuat) {
    return arr.filter(fruits => fruits.sx.toLowerCase() === nuocSanXuat.toLowerCase());
}
// Sử dụng hàm để lọc sản phẩm có nơi sản xuất là "VietNam"
const sanPhamLocTheoNuoc = locHoaQuaTheoNuoc(hoaQua, "VietNam");

console.log("🚀 ~ sanPhamLocTheoNuoc:", sanPhamLocTheoNuoc);

