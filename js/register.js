const formRegister = document.querySelector("#register-form");
const inputUsername = formRegister.querySelector("#username");
const inputEmail = formRegister.querySelector("#email");
const inputPassword = formRegister.querySelector("#password");

formRegister.addEventListener("submit", handleRegisterSubmit);

function handleRegisterSubmit(event) {
    event.preventDefault(); 
    let checkData = true;

    const username = inputUsername.value.trim();
    const email = inputEmail.value.trim();
    const password = inputPassword.value.trim();


    if (username.length < 5) {
        showError(inputUsername, "Username phải có ít nhất 5 ký tự.");
        checkData = false;
    }

    if (email.length < 7) {
        showError(inputEmail, "Email phải có ít nhất 7 ký tự.");
        checkData = false;
    }

    if (password.length < 5) {
        showError(inputPassword, "Password phải có ít nhất 5 ký tự.");
        checkData = false;
    }

    if (!checkData) {
        console.log("Dữ liệu có lỗi!");
        return;
    }

    const user = { username, email, password };
    let listUser = JSON.parse(localStorage.getItem("list-user")) || [];

    const isDuplicate = listUser.some(u => u.username === username);
    if (isDuplicate) {
        alert("Tên đăng nhập đã tồn tại!");
        return;
    }

    listUser.push(user);
    localStorage.setItem("list-user", JSON.stringify(listUser));
    formRegister.reset();

    alert("Đăng ký thành công!");
    window.location.href = "login.html";
}
// tạo một chử show lổi
function showError(inputEl, message) {
    const error = document.createElement("div");
    error.className = "text-danger mt-1 error-message";
    error.innerText = message;
    inputEl.parentElement.appendChild(error);
}
