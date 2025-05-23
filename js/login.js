// Chức năng đăng nhập
const loginForm = document.querySelector("#login-form");
const inputEmail = loginForm.querySelector("#username");
const inputPassword = loginForm.querySelector("#password");
const errorBox = document.getElementById("login-error-box"); // vùng hiển thị lỗi

loginForm.addEventListener("submit", checkEmailAndPassword);

function checkEmailAndPassword(event) {
    event.preventDefault(); 
    clearErrorMessages();

    const email = inputEmail.value.trim();
    const password = inputPassword.value.trim();

    if (email === "") {
        showError("Vui lòng nhập email.");
        return;
    }

    if (password === "") {
        showError("Vui lòng nhập mật khẩu.");
        return;
    }

    const listUser = JSON.parse(localStorage.getItem("list-user")) || [];

    if (listUser.length === 0) {
        showError("Không có người dùng nào trong hệ thống.");
        return;
    }

    const matchedUser = listUser.find(
        user => user.email === email && user.password === password
    );

    if (matchedUser) {
        const userLogin = {
            email: matchedUser.email,
            username: matchedUser.username
        };
        localStorage.setItem("user-login", JSON.stringify(userLogin));
        location.href = "index.html";
    } else {
        showError("Email hoặc mật khẩu không đúng.");
    }
}

// Hiển thị lỗi 
function showError(message) {
    const error = document.createElement("div");
    error.className = "text-danger mt-2 error-message";
    error.innerText = message;
    errorBox.appendChild(error);
}
// xoá code báo lỗi
function clearErrorMessages() {
    document.querySelectorAll(".error-message").forEach(el => el.remove());
}