const userPassword = document.getElementById("user_password");
const userPasswordConfirm = document.getElementById("user_password_confirm");
const form = document.querySelector("form");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (userPasswordConfirm.value != userPassword.value) {
        console.log("Passwords do not match.");
        userPassword.setCustomValidity("Passwords do not match.");
    }

    userPassword.reportValidity();
})
