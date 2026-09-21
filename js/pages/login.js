// ==========================================================
// HALAMAN LOGIN & DAFTAR
// ==========================================================
import { API_URL } from '../config.js';

export const routeLogin = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 80vh; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h2 class="app-brand" style="font-size: 32px; margin: 0;">ServisKu</h2>
                <p style="color: #a0a4b8; margin-top: 5px;">Sistem Bengkel TAV</p>
            </div>

            <!-- FORM LOGIN -->
            <div id="formLogin" style="width: 100%; max-width: 320px; background-color: #16192b; padding: 25px; border-radius: 14px; border: 1px solid #22263e;">
                <h3 style="color: white; margin-top: 0; margin-bottom: 20px; text-align: center;">Masuk Akun</h3>
                <input type="text" id="loginUsername" placeholder="Username (NIS/NIP)" class="input-modern" style="margin-bottom: 15px; width: 100%; box-sizing: border-box;">
                <input type="password" id="loginPassword" placeholder="Kata Sandi" class="input-modern" style="margin-bottom: 20px; width: 100%; box-sizing: border-box;">
                <button id="btnLogin" style="width: 100%; padding: 12px; background-color: #3b82f6; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; margin-bottom: 15px;">Masuk</button>
                <p style="text-align: center; color: #a0a4b8; font-size: 13px; margin: 0;">Peserta baru? <span id="btnToRegister" style="color: #8bb4f7; cursor: pointer; font-weight: bold;">Daftar di sini</span></p>
            </div>

            <!-- FORM DAFTAR (Disembunyikan di awal) -->
            <div id="formRegister" style="width: 100%; max-width: 320px; background-color: #16192b; padding: 25px; border-radius: 14px; border: 1px solid #22263e; display: none;">
                <h3 style="color: white; margin-top: 0; margin-bottom: 20px; text-align: center;">Pendaftaran Peserta</h3>
                <input type="text" id="regNama" placeholder="Nama Lengkap" class="input-modern" style="margin-bottom: 15px; width: 100%; box-sizing: border-box;">
                <input type="text" id="regUsername" placeholder="Username (NIS/NIP)" class="input-modern" style="margin-bottom: 15px; width: 100%; box-sizing: border-box;">
                <input type="password" id="regPassword" placeholder="Kata Sandi" class="input-modern" style="margin-bottom: 15px; width: 100%; box-sizing: border-box;">
                <select id="regRole" class="input-modern" style="margin-bottom: 20px; width: 100%; box-sizing: border-box;">
                    <option value="siswa">Siswa TAV</option>
                    <option value="guru">Guru / Admin</option>
                </select>
                <button id="btnRegister" style="width: 100%; padding: 12px; background-color: #10b981; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; margin-bottom: 15px;">Daftar Akun</button>
                <p style="text-align: center; color: #a0a4b8; font-size: 13px; margin: 0;">Sudah punya akun? <span id="btnToLogin" style="color: #8bb4f7; cursor: pointer; font-weight: bold;">Masuk</span></p>
            </div>
            
            <!-- Teks Notifikasi -->
            <div id="authMessage" style="margin-top: 15px; color: #f59e0b; font-size: 14px; text-align: center; height: 20px; font-weight: bold;"></div>
        </div>
    `;

// Menempelkan semua interaksi klik untuk form Login & Daftar
// (toggle form, submit register, submit login). Dipanggil sekali
// saat aplikasi diinisialisasi, sama seperti listener klik global aslinya.
export function attachAuthEvents() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('#btnToRegister')) {
            const formLogin = document.getElementById('formLogin');
            const formRegister = document.getElementById('formRegister');
            if (formLogin && formRegister) {
                formLogin.style.display = 'none';
                formRegister.style.display = 'block';
                document.getElementById('authMessage').innerText = '';
            }
        }

        if (e.target.closest('#btnToLogin')) {
            const formLogin = document.getElementById('formLogin');
            const formRegister = document.getElementById('formRegister');
            if (formLogin && formRegister) {
                formRegister.style.display = 'none';
                formLogin.style.display = 'block';
                document.getElementById('authMessage').innerText = '';
            }
        }

        if (e.target.id === 'btnRegister') {
            const nama = document.getElementById('regNama').value;
            const username = document.getElementById('regUsername').value;
            const password = document.getElementById('regPassword').value;
            const role = document.getElementById('regRole').value;
            const msgBox = document.getElementById('authMessage');

            if (!nama || !username || !password) {
                msgBox.innerText = "Harap isi semua data!";
                msgBox.style.color = "#ef4444";
                return;
            }

            e.target.innerText = "Mendaftarkan...";
            e.target.disabled = true;
            msgBox.innerText = "Menghubungi database...";
            msgBox.style.color = "#f59e0b";

            fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify({
                    action: "register",
                    nama_lengkap: nama,
                    username: username,
                    password: password,
                    role: role
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    msgBox.innerText = "Pendaftaran Berhasil! Silakan Masuk.";
                    msgBox.style.color = "#10b981";
                    document.getElementById('regNama').value = '';
                    document.getElementById('regUsername').value = '';
                    document.getElementById('regPassword').value = '';

                    setTimeout(() => {
                        document.getElementById('formRegister').style.display = 'none';
                        document.getElementById('formLogin').style.display = 'block';
                        msgBox.innerText = '';
                    }, 1500);
                } else {
                    msgBox.innerText = data.message || "Gagal mendaftarkan akun.";
                    msgBox.style.color = "#ef4444";
                }
            })
            .catch(error => {
                msgBox.innerText = "Gagal terhubung ke server!";
                msgBox.style.color = "#ef4444";
            })
            .finally(() => {
                e.target.innerText = "Daftar Akun";
                e.target.disabled = false;
            });
        }

        if (e.target.id === 'btnLogin') {
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            const msgBox = document.getElementById('authMessage');

            if (!username || !password) {
                msgBox.innerText = "Harap isi username dan password!";
                msgBox.style.color = "#ef4444";
                return;
            }

            e.target.innerText = "Memeriksa...";
            e.target.disabled = true;
            msgBox.innerText = "Menghubungkan ke database...";
            msgBox.style.color = "#f59e0b";

            fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify({
                    action: "login",
                    username: username,
                    password: password
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    msgBox.innerText = "Login Berhasil! Mengalihkan...";
                    msgBox.style.color = "#10b981";

                    localStorage.setItem('user_servisku', JSON.stringify(data.user));

                    setTimeout(() => {
                        if (data.user.role === 'guru') {
                            window.location.hash = '#dashboard-guru';
                        } else {
                            window.location.hash = '';
                        }
                    }, 1000);
                } else {
                    msgBox.innerText = data.message || "Username atau Password salah!";
                    msgBox.style.color = "#ef4444";
                }
            })
            .catch(error => {
                msgBox.innerText = "Gagal terhubung ke server!";
                msgBox.style.color = "#ef4444";
            })
            .finally(() => {
                e.target.innerText = "Masuk";
                e.target.disabled = false;
            });
        }
    });
}
