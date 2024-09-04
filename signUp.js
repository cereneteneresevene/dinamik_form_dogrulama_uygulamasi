function signUp() {
    const name = document.getElementById('signUpName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    if (!validateEmail(email)) {
        alert('Geçerli bir e-posta adresi giriniz.');
        return;
    }

    if (!validatePassword(password)) {
        alert('Şifreniz en az 6 karakter uzunluğunda olmalı, bir harf, bir noktalama işareti ve bir sayı içermelidir.');
        return;
    }

    if (localStorage.getItem(email)) {
        alert('Bu e-posta adresiyle zaten bir hesap var. Lütfen giriş yapın veya başka bir e-posta kullanın.');
        return;
    }

    if (name && email && password) {
        const UserData = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem(email, JSON.stringify(UserData));
        alert('Kayıt başarılı. Şimdi giriş yapabilirsin');
    } else {
        alert('Lütfen boşlukları doldurunuz.');
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 6;

    return hasLetter && hasNumber && hasSpecialChar && isLongEnough;
}
