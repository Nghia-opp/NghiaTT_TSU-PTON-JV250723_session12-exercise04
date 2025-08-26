let temperature =prompt("Nhập thông tin nhiệt độ hiện tại của phòng bạn");

while(true) {
    if (temperature > 100) {
        alert("yêu cầu người dùng giảm nhiệt độ");
    }else if (temperature < 20) {
        alert("yêu cầu người dùng tăng nhiệt độ");
    }else {
        alert("Hoạt động bình thường")
    }
    break;
}