const persons = [
    { firstname: "Đào", lastname: "Văn Anh" },
    { firstname: "Trần", lastname: "Huy" },
    { firstname: "Lê", lastname: "Hoàng" }
];

// a) Tạo ra một array persons mới (newPersons)
//   const newPersons = [...persons];
const newPersons = persons.map(person => {
    return { ...person }; // Tạo một bản sao của mỗi object person trong mảng persons
});


// b) Thêm mới 1 object {firstname : "Đào", lastname: "Văn Anh"} vào newPersons
newPersons.push({ firstname: "Đào", lastname: "Văn Anh" });

// c) Đổi {firstname : "Trần", lastname: "Huy"} thành {firstname : "Nguyễn", lastname: "Hoàng"}
const updatedPersons = newPersons.map(person => {
    if (person.firstname === "Trần" && person.lastname === "Huy") {
        return { firstname: "Nguyễn", lastname: "Hoàng" };
    }
    return person;
});

// d) Áp dụng map thêm key address:"Hà Nội" vào mỗi value của array persons
const personsWithAddress = persons.map(person => {
    return { ...person, address: "Hà Nội" };
});

console.log("New Persons:", newPersons);
console.log("Updated Persons:", updatedPersons);
console.log("Persons with Address:", personsWithAddress);
