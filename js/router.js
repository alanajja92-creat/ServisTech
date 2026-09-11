// ==========================================================
// ROUTER INTI
// File ini hanya berisi mesin routing (render halaman + guard
// login/role). Konten & logika tiap halaman sudah dipindah ke
// modul masing-masing di folder js/pages/.
// ==========================================================
import { jalankanLogikaInteraktif } from './interactive.js';

import { routeLogin, attachAuthEvents } from './pages/login.js';
import {
    routeDashboardSiswa,
    routeDashboardGuru,
    muatDataServisSiswa,
    ambilDataServisGuru,
} from './pages/dashboard.js';
import { routeTambahServis, isiUsernameOtomatis, attachServisFormEvents } from './pages/servis-form.js';
import { routeServis, attachServisListEvents } from './pages/servis-list.js';
import { routePoin, attachPoinGlobals } from './pages/poin.js';
import { routePengaturan, isiProfilPengaturan, attachLogoutEvent } from './pages/pengaturan.js';
import { routeDetailServis, renderDetailServis, attachDetailServisGlobals } from './pages/detail-servis.js';

// Daftar ruangan (halaman) yang ada di aplikasi kita
const routes = {
    '': routeDashboardSiswa,
    'dashboard-guru': routeDashboardGuru,
    'login': routeLogin,
    'tambah-servis': routeTambahServis,
    'servis': routeServis,
    'poin': routePoin,
    'pengaturan': routePengaturan,
    'detail-servis': routeDetailServis,
};

// Fungsi utama yang akan dikirim (export) agar bisa dipakai file lain
export function initRouter() {

    // Mencari elemen <div id="app"> di dalam file index.html
    const appDiv = document.getElementById('app');

    // Fungsi untuk mengganti isi tampilan
    function render() {
        let hash = window.location.hash.substring(1);

        // 1. Ambil data user dari memori (Cek apakah sudah login)
        const sesiUser = JSON.parse(localStorage.getItem('user_servisku'));

        // ==========================================
        // 2. POLISI PENGATUR ARAH (ROUTE GUARD)
        // ==========================================
        if (sesiUser) {
            // Kita ubah role menjadi huruf kecil semua agar kebal dari salah ketik di database (Guru/guru/GURU)
            const roleUser = sesiUser.role ? sesiUser.role.toLowerCase() : '';

            // Jika GURU menekan tombol "Dashboard" utama (hash kosong)
            if (hash === '' && roleUser === 'guru') {
                window.location.hash = 'dashboard-guru';
                return;
            }
            // Jika SISWA memaksa masuk ke dashboard guru
            if (hash === 'dashboard-guru' && roleUser === 'siswa') {
                window.location.hash = '';
                return;
            }
            // Jika SUDAH LOGIN tapi ke halaman login
            if (hash === 'login') {
                window.location.hash = roleUser === 'guru' ? 'dashboard-guru' : '';
                return;
            }
        } else {
            // Jika BELUM LOGIN dan mencoba akses halaman selain login
            if (hash !== 'login') {
                window.location.hash = 'login';
                return;
            }
        }

        // ==========================================
        // 3. MENENTUKAN KONTEN HALAMAN (SUNTIK HTML)
        // ==========================================
        let content = routes[hash];
        if (!content) {
            // Jika halaman tidak ditemukan di sistem
            if (sesiUser && sesiUser.role.toLowerCase() === 'guru') {
                content = routes['dashboard-guru'];
                hash = 'dashboard-guru';
            } else {
                content = routes[''];
                hash = '';
            }
        }

        // MASUKKAN HTML KE LAYAR (Wajib dilakukan sebelum merender data ke dalamnya)
        appDiv.innerHTML = content;

        // PERBAIKAN: sembunyikan menu navigasi bawah di halaman Login,
        // karena sebelumnya nav tetap tampil walau user belum masuk
        // (mengklik menu apa pun saat itu hanya akan dilempar balik ke #login).
        const bottomNav = document.getElementById('bottomNav');
        if (bottomNav) {
            bottomNav.style.display = (hash === 'login') ? 'none' : '';
        }

        // ==========================================
        // 4. MENGATUR WARNA MENU NAVIGASI
        // ==========================================
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => item.classList.remove('active'));

        let targetMenu = hash === 'dashboard-guru' ? '' : hash;
        const activeNav = document.querySelector(`.nav-item[data-target="${targetMenu}"]`);
        if (activeNav) {
            activeNav.classList.add('active');
        }

        // ==========================================
        // 5. PEMANGGILAN DATA DINAMIS SETELAH HTML SIAP
        // ==========================================
        if (sesiUser) {
            const roleUser = sesiUser.role.toLowerCase();

            // A. Update nama user & poin di header secara otomatis
            const elWelcome = document.getElementById('welcomeName');
            const elPoin = document.getElementById('userPoin');
            if (elWelcome) elWelcome.innerText = "Halo, " + (sesiUser.nama_lengkap || sesiUser.username) + "!";
            if (elPoin) elPoin.innerText = sesiUser.poin || 0;

            // B. Panggil data SPESIFIK sesuai halaman yang sedang aktif
            if (roleUser === 'guru') {
                if (hash === 'dashboard-guru') {
                    // Khusus Guru di Dashboard
                    if (typeof ambilDataServisGuru === 'function') ambilDataServisGuru('dashboard');
                } else if (hash === 'servis') {
                    // Khusus Guru di Halaman Daftar Servis
                    if (typeof ambilDataServisGuru === 'function') ambilDataServisGuru('semua');
                }
            } else if (roleUser === 'siswa') {
                if (hash === '' || hash === 'servis') {
                    // Khusus Siswa di Dashboard / Servis
                    if (typeof muatDataServisSiswa === 'function') muatDataServisSiswa(sesiUser.username);
                } else if (hash === 'poin') {
                    // Khusus Siswa di Halaman Poin
                    if (typeof renderHalamanPoin === 'function') renderHalamanPoin();
                }
            }

            if (hash === 'detail-servis') {
                // Khusus saat membuka Detail Servis (Baik Guru maupun Siswa)
                if (typeof renderDetailServis === 'function') renderDetailServis();
            }
        }

        // ==========================================
        // 6. LOGIKA TAMBAHAN (FORM & INTERAKTIF)
        // ==========================================
        // Mengisi Username Otomatis di Form Tambah Servis
        if (hash === 'tambah-servis' && sesiUser) {
            isiUsernameOtomatis(sesiUser);
        }

        // Mengisi Kartu Profil di Halaman Pengaturan
        if (hash === 'pengaturan' && sesiUser) {
            isiProfilPengaturan(sesiUser);
        }

        // Jalankan kembali tombol-tombol interaktif (jika ada)
        if (typeof jalankanLogikaInteraktif === 'function') {
            jalankanLogikaInteraktif();
        }
    }


    // Menempelkan fungsi-fungsi global (window.*) milik tiap halaman
    attachPoinGlobals();
    attachDetailServisGlobals();

    // Menempelkan event klik tiap halaman (Login, Register, Logout,
    // Kirim Servis, Lihat Detail). Pada kode asli, semuanya berada dalam
    // SATU listener klik global; di sini dipecah per modul halaman namun
    // berperilaku identik karena setiap blok memeriksa e.target sendiri.
    attachAuthEvents();
    attachLogoutEvent();
    attachServisFormEvents();
    attachServisListEvents();

    // Memerintahkan browser untuk memantau jika URL berubah
    window.addEventListener('hashchange', render);

    // Menjalankan fungsi render saat aplikasi pertama kali dibuka
    render();
}
