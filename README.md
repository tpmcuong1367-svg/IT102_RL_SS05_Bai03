Phân tích bài toán & Giải pháp kỹ thuật Phân tách chuỗi bản ghi (Parsing):** Bản ghi gồm 4 thành phần cách nhau bởi dấu gạch ngang -, sử dụng record.split("-") để bóc tách thành mảng các chuỗi con tương ứng: Bác sĩ, Chuyên khoa, Giờ khám và Phòng khám. Chuẩn hóa họ tên bác sĩ:**
Dùng .slice(3) để loại bỏ tiền tố "BS.".
Tách các từ trong tên bằng .split("_").
Dùng vòng lặp duyệt qua từng từ, chuyển về chữ thường bằng .toLowerCase() và viết hoa chữ cái đầu tiên word[0].toUpperCase() + word.slice(1) (Title Case). Chuẩn hóa chuyên khoa:** Thay toàn bộ dấu gạch dưới thành dấu cách bằng .replaceAll("_", " "), sau đó áp dụng Title Case cho từng từ để ra định dạng chuẩn (ví dụ: "Khoa Tim Mạch"). Chuẩn hóa phòng khám:** Dùng .replace("PHONG_", "Phòng ") để đưa về dạng văn bản thân thiện hiển thị tại cửa phòng khám.
Bảng kiểm thử đối chứng (Test Cases)
STT	Chuỗi dữ liệu đầu vào	Kết quả bóc tách & Chuẩn hóa mong đợi
TC1	"BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302"	- Bác sĩ phụ trách: Bác sĩ Nguyễn Văn Hải
- Chuyên khoa: Khoa Tim Mạch
- Thời gian khám: 08:30
- Địa điểm: Phòng 302
TC	"BS.tran_thi_mai-KHOA_NHI-14:00-PHONG_105"	- Bác sĩ phụ trách: Bác sĩ Trần Thị Mai
- Chuyên khoa: Khoa Nhi
- Thời gian khám: 14:00
- Địa điểm: Phòng 105
TC3	"BS.le_hoang_nam-KHOA_TAI_MUI_HONG-09:15-PHONG_201"	- Bác sĩ phụ trách: Bác sĩ Lê Hoàng Nam
- Chuyên khoa: Khoa Tai Mui Hong
- Thời gian khám: 09:15
- Địa điểm: Phòng 201
