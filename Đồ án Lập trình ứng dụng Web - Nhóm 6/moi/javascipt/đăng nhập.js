document.addEventListener('DOMContentLoaded', function() {
   // Xử lý sự kiện khi người dùng nhấn nút "Quay về trang chủ"
   document.getElementById('homeButton').onclick = function() {
       window.location.href = 'index.html'; // Chuyển hướng người dùng về trang chủ
   };

   // Hàm xử lý hiển thị/masquer mật khẩu
   const showHiddenPass = (loginPass, loginEye) => {
       const input = document.getElementById(loginPass),
           iconEye = document.getElementById(loginEye);

       iconEye.addEventListener('click', () => {
           // Đổi mật khẩu thành văn bản
           if (input.type === 'password') {
               // Chuyển sang văn bản
               input.type = 'text';

               // Thay đổi biểu tượng
               iconEye.classList.add('ri-eye-line');
               iconEye.classList.remove('ri-eye-off-line');
           } else {
               // Chuyển về mật khẩu
               input.type = 'password';

               // Thay đổi biểu tượng
               iconEye.classList.remove('ri-eye-line');
               iconEye.classList.add('ri-eye-off-line');
           }
       });
   };

   document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('loginButton').onclick = function() {
          var username = document.getElementById('login-email').value;
          var password = document.getElementById('login-pass').value;
  
          if (username === "admin" && password === "admin") {
              document.getElementById('loginSuccessMessage').style.display = 'block'; // Hiển thị thông báo
          }
      };
   });
});
