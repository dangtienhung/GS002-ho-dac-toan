function calculateGradeAndAverage(physics, chemistry, biology, mathematics, computer) {
    // Tính điểm trung bình (%)
    var grade = (physics + chemistry + biology + mathematics + computer) / 5;

    // Xác định học lực
    var rank;
    if (grade >= 8 && grade <= 10) {
        rank = 'Học lực giỏi';
    } else if (grade >= 6) {
        rank = 'Học lực khá';
    } else if (grade >= 5) {
        rank = 'Học lực trung bình';
    } else if (grade >= 2) {
        rank = 'Học lực yếu';
    } else {
        rank = 'Học lực kém';
    }

    // Trả về cả điểm trung bình và học lực
    return {
        average: grade,
        grade: rank
    };
}

// Test với các điểm số của các môn học
var physicsScore = parseFloat(prompt("Nhập điểm môn Physics:"));
var chemistryScore = parseFloat(prompt("Nhập điểm môn Chemistry:"));
var biologyScore = parseFloat(prompt("Nhập điểm môn Biology:"));
var mathematicsScore = parseFloat(prompt("Nhập điểm môn Mathematics:"));
var computerScore = parseFloat(prompt("Nhập điểm môn Computer:"));

var result = calculateGradeAndAverage(physicsScore, chemistryScore, biologyScore, mathematicsScore, computerScore);
console.log("Điểm trung bình: " + result.average.toFixed(2)); // Làm tròn điểm trung bình đến 2 chữ số thập phân
console.log("Học lực: " + result.grade);

