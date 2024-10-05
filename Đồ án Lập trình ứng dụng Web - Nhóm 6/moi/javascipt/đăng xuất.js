document.addEventListener('DOMContentLoaded', function() {
    // Hiển thị thông báo đăng xuất thành công
    var notification = document.getElementById("logoutNotification");
    notification.style.display = "block"; // Hiển thị thông báo

    // Đặt thời gian ẩn thông báo và chuyển hướng người dùng sau 3 giây
    setTimeout(function(){
        notification.style.display = "none"; // Ẩn thông báo
        window.location.href = 'index.html'; // Chuyển hướng người dùng về trang chủ
    }, 1000); // 1 seconds
});
