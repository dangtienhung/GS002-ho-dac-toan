function daoNguocChuoi(str_input) {
    let reversed_str = "";
    for (let i = str_input.length - 1; i >= 0; i--) {
        reversed_str += str_input[i];
    }
    return reversed_str;
}

let str_input = "program";
let ket_qua = daoNguocChuoi(str_input);
console.log("Chuỗi đảo ngược là:", ket_qua);

str_input = "data";
ket_qua = daoNguocChuoi(str_input);
console.log("Chuỗi đảo ngược là:", ket_qua);
