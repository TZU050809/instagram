const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');

function validateInputs() {
    loginBtn.disabled = !(username.value.trim() && password.value.trim());
}

username.addEventListener('input', validateInputs);
password.addEventListener('input', validateInputs);

// 當按下登入按鈕時，顯示警告
loginBtn.addEventListener('click', () => {
    alert('⚠️ 這是釣魚網站，請勿輸入真實帳號密碼！');
});
