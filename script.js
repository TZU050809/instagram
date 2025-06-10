document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginBtn = document.getElementById("login-btn");

    function updateButtonState() {
        loginBtn.disabled = !(usernameInput.value && passwordInput.value);
    }

    usernameInput.addEventListener("input", updateButtonState);
    passwordInput.addEventListener("input", updateButtonState);

    loginBtn.addEventListener("click", function () {
        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        // 模擬帳密驗證（可換成真實API驗證）
        if (username === "test" && password === "1234") {
            document.body.innerHTML = `
        <div class="welcome-screen">
          <h1>歡迎登入成功！</h1>
          <p>您好，<strong>${username}</strong>！</p>
        </div>
      `;
            document.body.style.justifyContent = "center";
        } else {
            alert("帳號或密碼錯誤！");
        }
    });
});
