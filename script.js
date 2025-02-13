document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Cek username dan password (ini hanya contoh, seharusnya dilakukan dengan backend)
    if (username === 'x4' && password === 'x4') {
        // Jika login berhasil, arahkan ke halaman berikutnya
        window.location.href = 'home.html'; // Ganti dengan halaman tujuan
    } else {
        errorMessage.textContent = 'Username atau Password salah!';
    }
});
