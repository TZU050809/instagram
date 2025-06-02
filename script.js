const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');

function validateInputs() {
    loginBtn.disabled = !(username.value.trim() && password.value.trim());
}

username.addEventListener('input', validateInputs);
password.addEventListener('input', validateInputs);

loginBtn.addEventListener('click', () => {
    alert('⚠️ 這是一個模擬 Instagram 登入頁面，請勿輸入真實帳號密碼！');
});
