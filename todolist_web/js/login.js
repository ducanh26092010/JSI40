// =========================================================
// login



// ==============================================================
// signup
const signupForm = document.getElementById("signup-form");
function validateSingupForm(email, username, password, confirmPassword) {
    // username >= 6 + no space
    if (username.length < 6) {
        alert("Ten ng dung phai co 6 ki tu tro len")
        return false;
    }
    if (username.includes(" ")) {
        alert("Ten ng dung ko dc dung dau cach");
        return false;
    }
    // pass >= 6
    if (password < 6) {
        alert("Mat kha phai co 6 ki tu tro len");
        return false;
    }
    // pass == confirmpass
    if (passwor !== confirmPassword) {
        alert("Mat khau ko trung khop vs truong nhap lai");
        return false;
    }
    return true;
}

signupForm.addEventListener("submit", () => {
    // ---------------------------------------------------
    // validate form
    const username = signupForm.getElementById("signupUsername");
    const email = signupForm.getElementById("signupEmail");
    const password = signupForm.getElementById("signupPassword");
    const confirmPassword = signupForm.getElementById("signupConfirmPassword");
    if (
        validateSignupForm(
            username.value,
            email.value,
            password.value,
            confirmPassword.value
        )
    ) {
        // -------------------------------------------------
        // ktra ko dc trung email + username cu

        // ----------------------------------------------------
        // create account with firebase
    }
});

    // -----------------
    // --------------------------------
    // validate form 
    // -----------------------------------------------------
    // create account with firebase
