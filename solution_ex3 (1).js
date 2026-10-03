let record = "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302";

let parts = record.split("-");

let rawDoctor = parts[0];
let rawDept = parts[1];
let examTime = parts[2];
let rawRoom = parts[3];

// 1. Chuan hoa ten bac si: bo BS., tach cac tu roi viet hoa chu cai dau
let nameWithoutPrefix = rawDoctor.slice(3);
let nameWords = nameWithoutPrefix.split("_");
let cleanDoctorName = "";

for (let i = 0; i < nameWords.length; i++) {
  let word = nameWords[i].toLowerCase();
  let capitalizedWord = word[0].toUpperCase() + word.slice(1);

  if (i === 0) {
    cleanDoctorName = capitalizedWord;
  } else {
    cleanDoctorName = cleanDoctorName + " " + capitalizedWord;
  }
}

// 2. Chuan hoa chuyen khoa: doi gach duoi thanh dau cach va format chu
let cleanDept = rawDept.replaceAll("_", " ");
let deptWords = cleanDept.split(" ");
let formattedDept = "";

for (let i = 0; i < deptWords.length; i++) {
  let word = deptWords[i].toLowerCase();
  let capitalizedWord = word[0].toUpperCase() + word.slice(1);

  if (i === 0) {
    formattedDept = capitalizedWord;
  } else {
    formattedDept = formattedDept + " " + capitalizedWord;
  }
}

// 3. Chuan hoa phong kham: doi PHONG_ sang Phong 
let cleanRoom = rawRoom.replace("PHONG_", "Phòng ");

// In thong tin phan cong ca truc
console.log(`THÔNG TIN PHÂN CÔNG CA TRỰC`);
console.log(`Bác sĩ phụ trách: Bác sĩ ${cleanDoctorName}`);
console.log(`Chuyên khoa: ${formattedDept}`);
console.log(`Thời gian khám: ${examTime}`);
console.log(`Địa điểm: ${cleanRoom}`);