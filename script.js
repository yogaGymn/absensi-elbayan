document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const password = document.getElementById("password").value;

      // Ganti password sesuai kebutuhan
      const correctPassword = "elbayan123";

      if (password === correctPassword) {
        window.location.href = "dashboard.html";
      } else {
        alert("Password salah!");
      }
    });
  }
});
