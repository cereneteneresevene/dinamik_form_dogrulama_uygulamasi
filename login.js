function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const storedData = localStorage.getItem(email);

    if (storedData) {
        const UserData = JSON.parse(storedData);
        if (UserData.password === password) {
            alert('Giriş başarılı!');
        } else {
            alert('Yanlış şifre. Lütfen tekrar deneyiniz.');
        }
    } else {
        alert('Böyle bir kullanıcı bulunamadı. Lütfen kayıt olunuz.');
    }

    if (!validateEmail(email)) {
        alert('Geçerli bir e-posta adresi giriniz.');
        return;
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}