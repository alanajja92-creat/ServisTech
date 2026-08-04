// Daftar ruangan (halaman) yang ada di aplikasi kita
// Daftar ruangan (halaman) yang ada di aplikasi kita
const routes = {
    
// HALAMAN DASHBOARD SISWA
    '': `
        <div class="dashboard-page">
            <!-- Header Sambutan Dinamis -->
            <div class="dashboard-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                <div>
                    <h3 class="app-brand" style="margin:0; font-size: 20px;" id="welcomeName">Halo, Pengguna!</h3>
                    <p style="margin: 5px 0 0 0; color: #a0a4b8; font-size: 13px;">Teknik Audio Video - ServisKu</p>
                </div>
                <!-- Poin Loyalty -->
                <div style="background-color: #16192b; padding: 8px 15px; border-radius: 10px; border: 1px solid #22263e; display: flex; align-items: center; gap: 8px;">
                    <span style="font-size: 16px;">⭐</span>
                    <div>
                        <div style="font-size: 10px; color: #a0a4b8;">Poin Anda</div>
                        <div style="font-size: 14px; font-weight: bold; color: #f59e0b;" id="userPoin">0</div>
                    </div>
                </div>
            </div>

            <!-- Konten Dashboard Lainnya (Statistik/Antrean) -->
            <div style="background-color: #16192b; padding: 20px; border-radius: 14px; border: 1px solid #22263e; text-align: center;">
                <h4 style="color: white; margin-top: 0; margin-bottom: 15px;">Status Alat Servis Anda</h4>
                
                <!-- TEMPAT DAFTAR SERVIS AKAN MUNCUL SECARA OTOMATIS -->
                <div id="dashboardServisContainer">
                    <!-- Jika belum ada servis, teks/tombol kosong akan diatur otomatis oleh JavaScript -->
                    <p style="color: #a0a4b8; font-size: 13px; margin-bottom: 15px;">Belum ada perangkat yang didaftarkan untuk diservis.</p>
                </div>

                <a href="#tambah-servis" style="display: inline-block; margin-top: 10px; padding: 10px 20px; background-color: #3b82f6; color: white; text-decoration: none; border-radius: 8px; font-size: 13px; font-weight: bold;">+ Daftarkan Servis Baru</a>
            </div>
            
        </div>
    `,


// HALAMAN DASHBOARD GURU / ADMIN
    'dashboard-guru': `
        <div class="dashboard-page">
            <!-- Header Sambutan Dinamis -->
            <div class="dashboard-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                <div>
                    <h3 class="app-brand" style="margin:0; font-size: 20px;" id="welcomeName">Halo, Guru!</h3>
                    <p style="margin: 5px 0 0 0; color: #a0a4b8; font-size: 13px;">Panel Admin - Teknik Audio Video</p>
                </div>
            </div>

            <!-- Ringkasan Bengkel -->
            <div style="background-color: #16192b; padding: 20px; border-radius: 14px; border: 1px solid #22263e; text-align: center; margin-bottom: 20px;">
                <h4 style="color: white; margin-top: 0;">Ringkasan Bengkel</h4>
                <p style="color: #a0a4b8; font-size: 13px; margin: 0;">Data statistik & antrean servis masuk dari seluruh siswa.</p>
            </div>

            <!-- Kartu Statistik Global (Ditambahi ID untuk inject angka otomatis) -->
            <div class="stats-grid">
                <div class="stat-card card-blue">
                    <span class="stat-title">TOTAL MASUK</span>
                    <h2 class="stat-value" id="guruStatTotal">0</h2>
                </div>
                <div class="stat-card card-yellow">
                    <span class="stat-title">PERLU VALIDASI</span>
                    <h2 class="stat-value" id="guruStatMenunggu">0</h2>
                </div>
                <div class="stat-card card-purple-1">
                    <span class="stat-title">DIPROSES SISWA</span>
                    <h2 class="stat-value" id="guruStatProses">0</h2>
                </div>
                <div class="stat-card card-purple-2">
                    <span class="stat-title">SELESAI TOTAL</span>
                    <h2 class="stat-value" id="guruStatSelesai">0</h2>
                </div>
            </div>

            <!-- Daftar Perangkat Terbaru -->
            <div class="section-title-small" style="margin-top: 25px; margin-bottom: 12px;">Antrean Masuk Terbaru</div>
            
            <!-- Kontainer Tempat Render Data Asli -->
            <div id="guruServisContainer" class="servis-list" style="display: flex; flex-direction: column; gap: 12px;">
                <div style="text-align: center; padding: 30px; color: #a0a4b8;">
                    <span>⏳ Memuat data servis dari server...</span>
                </div>
            </div>
        </div>
    `,


    'tambah-servis': '<h2>Form Tambah Servis</h2><p>Catat kerusakan TV atau Amplifier di sini.</p>',

    // Menggunakan backtick (`) agar bisa menulis HTML berbaris-baris
// HALAMAN LOGIN & DAFTAR
    'login': `
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
    `,

    //HALAMAN TAMBAH SERVIS
    'tambah-servis': `
        <div class="tambah-servis-page">
            <div class="page-header">
                <a href="#" class="back-link" onclick="window.history.back(); return false;">←</a>
                <h2>Tambah Servis Baru</h2>
            </div>
            <p class="page-subtitle">Lengkapi data untuk memulai perbaikan</p>

            <form id="tambahServisForm">
                <!-- CARD 1: DATA PELANGGAN & TEKNISI -->
                <div class="form-card">
                    <div class="card-section-title"><span>👤 Data Pelanggan & Teknisi</span></div>
                    
                    <!-- [PERBAIKAN]: Kolom Username ditambahkan di sini -->
                    <div class="form-group">
                        <label>Username Teknisi (Otomatis)</label>
                        <input type="text" id="tsUsername" class="input-modern" placeholder="Memuat username..." readonly>
                    </div>

                    <div class="form-group">
                        <label>Nama Pelanggan *</label>
                        <input type="text" id="tsNamaPelanggan" placeholder="Masukkan nama lengkap pelanggan" required class="input-modern">
                    </div>
                    <div class="form-group">
                        <label>Alamat</label>
                        <textarea id="tsAlamat" placeholder="Masukkan alamat lengkap" rows="2" class="input-modern"></textarea>
                    </div>
                </div>

                <!-- CARD 2: DATA PERANGKAT -->
                <div class="form-card">
                    <div class="card-section-title"><span>📦 Data Perangkat</span></div>
                    <div class="form-group">
                        <label>Jenis Perangkat</label>
                        <select id="tsJenis" class="input-modern form-select" required>
                            <option value="smartphone">Smartphone</option>
                            <option value="laptop">Laptop / Komputer</option>
                            <option value="audio">Audio / Sound System</option>
                            <option value="tv">Televisi</option>
                            <option value="lainnya">Elektronik Lainnya</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Merk / Model *</label>
                        <input type="text" id="tsMerk" placeholder="Contoh: MacBook Pro 2021" required class="input-modern">
                    </div>
                    <div class="form-group">
                        <label>Keluhan *</label>
                        <textarea id="tsKeluhan" placeholder="Deskripsikan masalah perangkat..." rows="3" required class="input-modern"></textarea>
                    </div>
                </div>

                <!-- CARD 3: DATA SERVIS -->
                <div class="form-card">
                    <div class="card-section-title"><span>📋 Data Servis</span></div>
                    <div class="form-group">
                        <label>Analisa Teknis</label>
                        <textarea id="tsAnalisa" placeholder="Hasil diagnosa awal..." rows="2" class="input-modern"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Hasil Pengukuran</label>
                        <textarea id="tsPengukuran" placeholder="Input tegangan, arus, atau parameter lainnya..." rows="2" class="input-modern"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Komponen Diganti</label>
                        <div class="component-row">
                            <input type="text" placeholder="Nama Komponen" class="input-modern">
                            <button type="button" class="btn-delete-item">🗑️</button>
                        </div>
                        <button type="button" class="btn-add-item">+ Tambah Komponen</button>
                    </div>
                </div>

                <!-- TEMPAT PESAN ERROR/SUKSES -->
                <p id="servisMessage" style="text-align: center; font-weight: bold; margin-bottom: 15px;"></p>

                <!-- TOMBOL SIMPAN -->
                <button type="submit" id="btnKirimServis" class="btn-simpan-servis">
                    💾 SIMPAN
                </button>
            </form>
        </div>
    `,


// HALAMAN DAFTAR SERVIS
    'servis': `
        <div class="daftar-servis-page">
            <div class="page-header">
                <h2>Daftar Servis</h2>
            </div>
            
            <!-- Kolom Pencarian -->
            <div class="search-bar">
                <span class="icon-search">🔍</span>
                <input type="text" placeholder="Cari nama pelanggan atau ID..." class="input-modern">
            </div>

            <!-- Tab Filter Status -->
            <div class="filter-tabs">
                <button class="tab-btn active">Semua</button>
                <button class="tab-btn">Menunggu</button>
                <button class="tab-btn">Proses</button>
                <button class="tab-btn">Selesai</button>
            </div>

            <!-- KONTINER LIST SERVIS (Data dari Google Sheets akan masuk ke sini) -->
            <div id="listServisContainer" class="servis-list">
                <!-- Tampilan Loading -->
                <div style="text-align: center; padding: 40px 20px;">
                    <span style="font-size: 30px;">⏳</span>
                    <p style="color: #a0a4b8; font-size: 14px; margin-top: 10px;">Mengambil data servis-mu...</p>
                </div>
            </div>
            
            <!-- Tombol Mengambang (FAB) untuk Tambah Servis -->
            <a href="#tambah-servis" class="fab-add">+</a>
        </div>
    `,


    // HALAMAN POIN
    'poin': `
        <div class="poin-page">
            <div class="page-header">
                <h2>Loyalty Poin</h2>
            </div>
            
            <!-- Kartu Total Poin -->
            <div class="poin-card-main">
                <div class="poin-info">
                    <span class="poin-label">Total Poin Anda</span>
                    <h1 class="poin-amount"><span id="angkaPoinSiswa">0</span> <span class="poin-star">⭐</span></h1>
                    <p class="poin-desc">Kumpulkan poin dari setiap servis perangkat untuk ditukar dengan diskon menarik!</p>
                </div>
            </div>

            <!-- Tab Navigasi Dalam Halaman Poin -->
            <div class="filter-tabs" style="margin-top: 20px;">
                <button class="tab-btn active">Tukar Poin</button>
                <button class="tab-btn">Riwayat</button>
            </div>

            <div class="section-title-small">Daftar Reward</div>

            <!-- Daftar Voucher / Hadiah -->
            <div class="reward-list">
                
                <!-- Voucher 1 -->
                <div class="reward-card">
                    <div class="reward-icon">🏷️</div>
                    <div class="reward-details">
                        <h3 class="reward-title">Diskon Servis 10%</h3>
                        <p class="reward-req">Berlaku untuk semua jenis perangkat elektronik.</p>
                        <span class="reward-cost">500 ⭐</span>
                    </div>
                    <button class="btn-tukar">Tukar</button>
                </div>

                <!-- Voucher 2 -->
                <div class="reward-card">
                    <div class="reward-icon">🔍</div>
                    <div class="reward-details">
                        <h3 class="reward-title">Gratis Cek Perangkat</h3>
                        <p class="reward-req">Bebas biaya pengecekan awal kerusakan.</p>
                        <span class="reward-cost">250 ⭐</span>
                    </div>
                    <button class="btn-tukar">Tukar</button>
                </div>

                <!-- Voucher 3 -->
                <div class="reward-card">
                    <div class="reward-icon">🚚</div>
                    <div class="reward-details">
                        <h3 class="reward-title">Gratis Antar Jemput</h3>
                        <p class="reward-req">Maksimal jarak 5KM dari lokasi toko.</p>
                        <span class="reward-cost">800 ⭐</span>
                    </div>
                    <button class="btn-tukar">Tukar</button>
                </div>

            </div>
        </div>
    `,

// HALAMAN PENGATURAN (UMUM UNTUK SISWA & GURU)
    'pengaturan': `
        <div class="dashboard-page">
            <!-- Header Pengaturan -->
            <div class="dashboard-header" style="margin-bottom: 25px;">
                <h3 class="app-brand" style="margin:0;">Pengaturan</h3>
            </div>

            <!-- Kartu Profil Singkat (Data akan dinamis saat login) -->
            <div class="profile-section" style="display: flex; align-items: center; gap: 15px; background-color: #16192b; padding: 20px; border-radius: 14px; border: 1px solid #22263e; margin-bottom: 25px;">
                <div class="profile-avatar" style="width: 60px; height: 60px; font-size: 24px; display: flex; justify-content: center; align-items: center; background: linear-gradient(135deg, #3b82f6, #8bb4f7); color: white; border-radius: 50%; font-weight: bold;">US</div>
                <div>
                    <h3 style="margin: 0; color: white; font-size: 18px;">Nama Pengguna</h3>
                    <p style="margin: 5px 0 0 0; color: #a0a4b8; font-size: 13px;">Pengguna - Teknik Audio Video</p>
                </div>
            </div>

            <!-- Daftar Menu Pengaturan -->
            <div class="settings-menu" style="display: flex; flex-direction: column; gap: 12px;">
                
                <div class="section-title-small" style="margin-bottom: 5px;">Preferensi Aplikasi</div>
                
                <!-- Opsi Notifikasi dengan Toggle -->
                <div class="setting-item" style="display: flex; justify-content: space-between; align-items: center; background-color: #16192b; padding: 15px; border-radius: 12px; border: 1px solid #22263e;">
                    <div style="display: flex; align-items: center; gap: 12px; color: white; font-size: 14px;">
                        <span style="font-size: 18px;">🔔</span> Notifikasi Pembaruan
                    </div>
                    <!-- Class 'active' membuat toggle menyala (biru) dari awal -->
                    <div class="toggle-switch active"></div>
                </div>

                <!-- Opsi Mode Gelap dengan Toggle -->
                <div class="setting-item" style="display: flex; justify-content: space-between; align-items: center; background-color: #16192b; padding: 15px; border-radius: 12px; border: 1px solid #22263e;">
                    <div style="display: flex; align-items: center; gap: 12px; color: white; font-size: 14px;">
                        <span style="font-size: 18px;">🌙</span> Mode Gelap (Dark Mode)
                    </div>
                    <div class="toggle-switch active"></div>
                </div>

                <div class="section-title-small" style="margin-top: 15px; margin-bottom: 5px;">Akun & Bantuan</div>

                <!-- Opsi Edit Profil -->
                <a href="#" class="setting-item" style="display: flex; align-items: center; gap: 12px; background-color: #16192b; padding: 15px; border-radius: 12px; border: 1px solid #22263e; text-decoration: none; color: white; font-size: 14px;">
                    <span style="font-size: 18px;">👤</span> Edit Profil
                </a>
                
                <!-- Opsi Panduan -->
                <a href="#" class="setting-item" style="display: flex; align-items: center; gap: 12px; background-color: #16192b; padding: 15px; border-radius: 12px; border: 1px solid #22263e; text-decoration: none; color: white; font-size: 14px;">
                    <span style="font-size: 18px;">📖</span> Panduan Aplikasi
                </a>

                
                <button id="btnLogout" >Keluar (Log Out)</button>
            </div>
        </div>
    `,    
// HALAMAN DETAIL SERVIS
    'detail-servis': `
        <div id="detailServisContainer" class="detail-servis-page">
            <!-- Tampilan Loading awal sebelum data detail dirender oleh JS -->
            <div style="text-align: center; padding: 40px 20px;">
                <span style="font-size: 30px;">⏳</span>
                <p style="color: #a0a4b8; font-size: 14px; margin-top: 10px;">Memuat detail servis...</p>
            </div>
        </div>
    `,
};


// Ganti teks di dalam tanda kutip dengan URL yang baru saja kamu dapatkan!
const API_URL = "https://script.google.com/macros/s/AKfycbxk53ooG4jSwxzWJfavK6K8XmByCh9x5OivfcjWtHfnVUwvy8fPRvaGeJIi_N7tI5xOuA/exec";
// ... (kode export function initRouter() di bawahnya biarkan tetap sama)

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
            if (hash === 'dashboard-guru' && roleUser === 'guru') {
                // Khusus Guru di Dashboard
                if (typeof muatDataServisGuru === 'function') muatDataServisGuru();

            } else if ((hash === '' || hash === 'servis') && roleUser === 'siswa') {
                // Khusus Siswa di Dashboard / Servis
                if (typeof muatDataServisSiswa === 'function') muatDataServisSiswa(sesiUser.username);

            } else if (hash === 'detail-servis') {
                // Khusus saat membuka Detail Servis (Baik Guru maupun Siswa)
                if (typeof renderDetailServis === 'function') renderDetailServis();
            }
        }

        // ==========================================
        // 6. LOGIKA TAMBAHAN (FORM & INTERAKTIF)
        // ==========================================
        // Mengisi Username Otomatis di Form Tambah Servis
        if (hash === 'tambah-servis' && sesiUser) {
            const elInputUser = document.getElementById('tsUsername');
            if (elInputUser) {
                elInputUser.value = sesiUser.username; 
                elInputUser.readOnly = true; 
                elInputUser.style.backgroundColor = "#19459e"; 
            }
        }

        // Jalankan kembali tombol-tombol interaktif (jika ada)
        if (typeof jalankanLogikaInteraktif === 'function') {
            jalankanLogikaInteraktif();
        }
    }


    // ==========================================
    // FUNGSI PENDUKUNG (DI LUAR EVENT LISTENER)
    // ==========================================
    
    // Fungsi untuk memuat data servis siswa dari Google Sheets
    function muatDataServisSiswa(username) {
        fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({
                action: "get_servis",
                username: username
            })
        })
        .then(res => res.json())
        .then(response => {
            if (response.status === "success") {
                const listServis = response.data.reverse();
                localStorage.setItem('cache_servis_siswa', JSON.stringify(listServis));
                renderDashboardSiswa(listServis);
                renderHalamanServis(listServis);
            }
        })
        .catch(err => console.error("Gagal memuat servis:", err));
    }

    // Fungsi helper untuk merender ke Dashboard
// Fungsi helper untuk merender ringkasan ke Dashboard (Maksimal 3 data terakhir)
    function renderDashboardSiswa(list) {
        const container = document.getElementById('dashboardServisContainer');
        if (!container) return;

        if (list.length === 0) {
            container.innerHTML = `
                <div class="status-card-empty">
                    <p style="color: #a0a4b8; font-size: 13px; margin-bottom: 15px;">Belum ada perangkat yang didaftarkan untuk diservis.</p>
                </div>
            `;
            return;
        }

        // Ambil hanya 3 data terbaru menggunakan .slice(0, 3)
        const dataTerbaru = list.slice(0, 3);

        let html = '';
        dataTerbaru.forEach(item => {
            html += `
                <div class="servis-card-item" style="background: #1e293b; padding: 12px; border-radius: 8px; margin-top: 10px; text-align: left;">
                    <div class="servis-header" style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span class="servis-id" style="font-weight: bold; color: #38bdf8;">#${item.id_servis}</span>
                        <span class="badge-status" style="font-size: 12px; color: #fbbf24;">⏳ ${item.status}</span>
                    </div>
                    <div class="servis-body">
                        <h4 style="margin: 0 0 4px 0; color: white;">${item.nama_pelanggan}</h4>
                        <p style="margin: 0; color: #a0a4b8; font-size: 13px;">${item.merk} - ${item.keluhan}</p>
                    </div>
                </div>
            `;
        });

        // Jika data lebih dari 3, kita tambahkan tombol kecil di bawahnya untuk mengarah ke halaman servis lengkap
        if (list.length > 3) {
            html += `
                <div style="margin-top: 12px; text-align: right;">
                    <a href="#servis" style="color: #38bdf8; font-size: 12px; text-decoration: none;">Lihat semua riwayat (${list.length} data) →</a>
                </div>
            `;
        }

        container.innerHTML = html;
    }

    // Fungsi helper untuk merender ke Halaman Servis
// Fungsi helper untuk merender ke Halaman Servis (Menggunakan desain CSS dari user)
    function renderHalamanServis(list) {
        const container = document.getElementById('listServisContainer');
        if (!container) return;

        if (list.length === 0) {
            container.innerHTML = `<p style="text-align:center; color:#94a3b8; margin-top:40px;">Belum ada riwayat servis.</p>`;
            return;
        }

        let html = '';
        list.forEach(item => {
            // Menentukan warna badge & ikon berdasarkan status
            let badgeClass = 'badge-menunggu';
            let icon = '⏸️';
            
            if (item.status && item.status.toLowerCase() === 'proses') {
                badgeClass = 'badge-proses';
                icon = '⏳';
            } else if (item.status && item.status.toLowerCase() === 'selesai') {
                badgeClass = 'badge-selesai';
                icon = '✅';
            }

            html += `
                <div class="servis-card">
                    <div class="servis-card-header">
                        <span class="servis-id">#${item.id_servis}</span>
                        <span class="badge ${badgeClass}">${icon} ${item.status || 'Menunggu'}</span>
                    </div>
                    <div class="servis-card-body">
                        <h3 class="pelanggan-nama">${item.nama_pelanggan}</h3>
                        <p class="perangkat-info">${item.merk} - ${item.keluhan}</p>
                        <p class="tanggal-masuk">📅 ${new Date(item.waktu).toLocaleDateString('id-ID', {day: 'numeric', month: 'short', year: 'numeric'})}</p>
                    </div>
                    <div class="servis-card-footer">
                        <button class="btn-detail" data-id="${item.id_servis}">Lihat Detail</button>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }

    // ==========================================================
    // FUNGSI UTAMA UNTUK MENARIK DATA SERVIS GURU
    // ==========================================================
    function ambilDataServisGuru(tujuanRender = 'dashboard') {
        console.log("Mulai mengambil data servis dari server...");

        fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({ action: "get_all_servis" })
        })
        .then(res => {
            console.log("Respon mentah dari server diterima:", res);
            return res.text(); // Ubah ke text dulu untuk mengantisipasi jika error HTML
        })
        .then(textRes => {
            console.log("Isi teks dari server:", textRes);
            
            let responseJson;
            try {
                responseJson = JSON.parse(textRes);
            } catch (e) {
                console.error("Gagal mengubah respon ke JSON. Kemungkinan besar script Google Sheets error/mengembalikan HTML.");
                return;
            }

            // === PERBAIKAN UTAMA: Ambil array aslinya dari properti .data ===
            const data = responseJson.data || responseJson;

            if (Array.isArray(data)) {
                console.log("Data berhasil diparse menjadi Array:", data);
                localStorage.setItem('cache_servis_siswa', JSON.stringify(data));

                if (tujuanRender === 'dashboard') {
                    // Filter untuk Dashboard: Buang yang statusnya 'Selesai'
                    const servisAktif = data.filter(item => {
                        const status = item.status ? item.status.toLowerCase() : '';
                        return status !== 'selesai';
                    });
                    renderDashboardGuru(servisAktif); 
                } 
                else if (tujuanRender === 'semua') {
                    // Untuk Halaman Servis: Tampilkan SEMUA
                    renderHalamanServis(data); 
                }
            } else {
                console.warn("Format data bukan Array:", responseJson);
            }
        })
        .catch(err => {
            console.error("Fetch Error Terjadi:", err);
        });
    }
    
    
    // Fungsi untuk merender Halaman Detail Servis secara dinamis
    function renderDetailServis() {
        const container = document.getElementById('detailServisContainer');
        if (!container) return;

        // ==========================================================
        // 1. MENGAMBIL DATA (KUNCI UTAMA ADA DI BARIS KETIGA INI)
        // ==========================================================
        const selectedId = localStorage.getItem('selected_servis_id');
        const cacheData = JSON.parse(localStorage.getItem('cache_servis_siswa')) || [];
        // Pastikan menarik data login dari 'user_servisku'
        const sesiUser = JSON.parse(localStorage.getItem('user_servisku')); 

        const item = cacheData.find(s => String(s.id_servis) === String(selectedId));

        if (!item) {
            container.innerHTML = `
                <div class="page-header">
                    <a href="#" onclick="kembaliKeDashboard(); return false;" class="back-link">←</a>
                    <h2>Detail Servis</h2>
                </div>
                <div style="text-align: center; padding: 30px; color: #ef4444;">
                    <p>Data detail servis tidak ditemukan.</p>
                </div>
            `;
            return;
        }

        // 2. Format Status Badge & Ikon
        let badgeClass = 'badge-menunggu';
        let icon = '⏸️';
        if (item.status && item.status.toLowerCase() === 'proses') {
            badgeClass = 'badge-proses';
            icon = '⏳';
        } else if (item.status && item.status.toLowerCase() === 'selesai') {
            badgeClass = 'badge-selesai';
            icon = '✅';
        }

        // 3. Format Daftar Komponen yang Diganti
        let komponenHtml = '';
        if (item.komponen && item.komponen !== '-' && item.komponen.trim() !== '') {
            const listK = item.komponen.split(',');
            komponenHtml = '<ul class="komponen-list">' + listK.map(k => `<li>${k.trim()}</li>`).join('') + '</ul>';
        } else {
            komponenHtml = '<div class="detail-value-box" style="color: #64748b;">Belum ada komponen yang diganti.</div>';
        }

        const tgl = item.waktu ? new Date(item.waktu).toLocaleDateString('id-ID', {day: 'numeric', month: 'short', year: 'numeric'}) : '-';

        // 4. SUSUN HTML BAWAAN (SISWA & GURU SAMA-SAMA LIHAT INI)
        let html = `
            <div class="page-header">
                <a href="#" onclick="kembaliKeDashboard(); return false;" class="back-link">←</a>
                <h2>Detail Servis</h2>
            </div>

            <div class="detail-header-card">
                <div class="detail-id-status">
                    <span class="servis-id-large">#${item.id_servis}</span>
                    <span class="badge ${badgeClass}">${icon} ${item.status || 'Menunggu'}</span>
                </div>
                <div class="detail-date">Tanggal Masuk: ${tgl}</div>
                <div class="detail-date" style="margin-top:5px; color:#38bdf8;">👨‍🔧 Dikerjakan oleh: ${item.username}</div>
            </div>

            <div class="detail-section">
                <div class="section-title-small">Informasi Pelanggan</div>
                <div class="detail-box">
                    <div class="detail-row">
                        <span class="detail-label">Nama:</span> 
                        <span class="detail-value">${item.nama_pelanggan || '-'}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Alamat / Kontak:</span> 
                        <span class="detail-value">${item.alamat || '-'}</span>
                    </div>
                </div>
            </div>

            <div class="detail-section">
                <div class="section-title-small">Data Perangkat</div>
                <div class="detail-box">
                    <div class="detail-row">
                        <span class="detail-label">Jenis:</span> 
                        <span class="detail-value">${item.jenis || '-'}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Model / Merk:</span> 
                        <span class="detail-value">${item.merk || '-'}</span>
                    </div>
                    <div class="detail-row-col">
                        <span class="detail-label">Keluhan:</span>
                        <div class="detail-value-box">${item.keluhan || '-'}</div>
                    </div>
                </div>
            </div>

            <div class="detail-section">
                <div class="section-title-small">Catatan Teknisi</div>
                <div class="detail-box">
                    <div class="detail-row-col">
                        <span class="detail-label">Analisa Teknis:</span>
                        <div class="detail-value-box">${item.analisa || 'Belum ada catatan analisa.'}</div>
                    </div>
                    <div class="detail-row-col">
                        <span class="detail-label">Hasil Pengukuran:</span>
                        <div class="detail-value-box">${item.pengukuran || 'Belum ada data pengukuran.'}</div>
                    </div>
                    <div class="detail-row-col">
                        <span class="detail-label">Komponen Diganti:</span>
                        ${komponenHtml}
                    </div>
                </div>
            </div>

            <div class="detail-actions">
                <a href="https://wa.me/?text=Halo%20${encodeURIComponent(item.nama_pelanggan)},%20mengenai%20servis%20perangkat%20${encodeURIComponent(item.merk)}%20(ID:%20${item.id_servis})" target="_blank" class="btn-secondary-action" style="text-decoration:none; text-align:center; display:block; margin-bottom: 15px;">💬 Hubungi Pelanggan via WA</a>
        `;

// ==========================================================
        // 5. BLOK VALIDASI KHUSUS GURU
        // ==========================================================
        if (sesiUser && sesiUser.role && sesiUser.role.toLowerCase() === 'guru') {
            html += `
                <div style="background-color: rgba(56, 189, 248, 0.1); padding: 15px; border-radius: 12px; border: 1px solid #38bdf8; margin-top: 20px;">
                    <label style="font-weight:bold; color: #38bdf8; display:block; margin-bottom:10px;">🛠️ Validasi & Ubah Status (Akses Guru):</label>
                    
                    <select id="pilihanStatus" style="width: 100%; padding: 12px; border-radius: 8px; background: #16192b; color: white; border: 1px solid #22263e; outline: none; margin-bottom: 15px;">
                        <option value="Menunggu Antrean" ${item.status === 'Menunggu Antrean' ? 'selected' : ''}>Menunggu Antrean</option>
                        <option value="Proses" ${item.status === 'Proses' ? 'selected' : ''}>Sedang Proses</option>
                        <option value="Selesai" ${item.status === 'Selesai' ? 'selected' : ''}>Selesai</option>
                    </select>
                    
                    <!-- Tombol ini diarahkan ke fungsi baru untuk mengecek isi dropdown dulu -->
                    <button onclick="cekKondisiStatus('${item.id_servis}', '${item.username}', this)" style="width: 100%; padding: 14px; background-color: #10b981; border: none; border-radius: 8px; color: white; font-weight: bold; cursor: pointer; font-size: 14px;">
                        Simpan Perubahan Status
                    </button>
                </div>
            `;

            // MASUKKAN KODE POP-UP DI SINI (Hanya dirender jika yang login guru)
            html += `
                <div id="modalPoinGuru" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 9999; justify-content: center; align-items: center;">
                    <div style="background: #16192b; border: 1px solid #22263e; width: 90%; max-width: 400px; border-radius: 12px; padding: 20px; color: white; font-family: sans-serif; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
                        
                        <h3 style="margin-top: 0; color: #3b82f6; text-align: center; margin-bottom: 10px;">Validasi & Beri Poin</h3>
                        <p style="font-size: 13px; color: #a0a4b8; text-align: center; margin-bottom: 20px;">Tentukan tingkat kesulitan alat yang diservis sebelum menyelesaikannya.</p>

                        <div style="margin-bottom: 15px;">
                            <label style="display: block; padding: 12px; background: #22263e; border-radius: 8px; margin-bottom: 8px; cursor: pointer; border: 1px solid transparent;">
                                <input type="radio" name="tingkat_poin" value="25" checked style="margin-right: 10px;">
                                🟢 <b style="color: white;">Ringan (+25 Poin)</b>
                                <div style="font-size: 11px; color: #a0a4b8; margin-left: 28px; margin-top: 4px;">Kabel putus, ganti steker, solder ulang.</div>
                            </label>

                            <label style="display: block; padding: 12px; background: #22263e; border-radius: 8px; margin-bottom: 8px; cursor: pointer; border: 1px solid transparent;">
                                <input type="radio" name="tingkat_poin" value="50" style="margin-right: 10px;">
                                🟡 <b style="color: white;">Sedang (+50 Poin)</b>
                                <div style="font-size: 11px; color: #a0a4b8; margin-left: 28px; margin-top: 4px;">Ganti elemen, cek multitester.</div>
                            </label>

                            <label style="display: block; padding: 12px; background: #22263e; border-radius: 8px; margin-bottom: 8px; cursor: pointer; border: 1px solid transparent;">
                                <input type="radio" name="tingkat_poin" value="100" style="margin-right: 10px;">
                                🔴 <b style="color: white;">Berat (+100 Poin)</b>
                                <div style="font-size: 11px; color: #a0a4b8; margin-left: 28px; margin-top: 4px;">Lacak jalur rumit, ganti IC/Flyback, mati total.</div>
                            </label>
                        </div>

                        <div style="margin-bottom: 25px;">
                            <label style="display: flex; align-items: center; padding: 12px; border: 1px solid #10b981; border-radius: 8px; cursor: pointer; background: rgba(16, 185, 129, 0.1);">
                                <input type="checkbox" id="bonus_laporan" value="10" style="margin-right: 12px;">
                                <div>
                                    <span style="color: #10b981; font-weight: bold;">✨ Bonus Laporan Rapi (+10)</span>
                                </div>
                            </label>
                        </div>

                        <div style="display: flex; gap: 10px;">
                            <button onclick="tutupModalPoin()" style="flex: 1; padding: 12px; background: transparent; border: 1px solid #ef4444; color: #ef4444; border-radius: 8px; cursor: pointer; font-weight: bold;">Batal</button>
                            <button onclick="hitungDanKirimPoin()" style="flex: 1; padding: 12px; background: #3b82f6; border: none; color: white; border-radius: 8px; cursor: pointer; font-weight: bold;">Kirim Poin</button>
                        </div>
                    </div>
                </div>
            `;
        }
        // ==========================================================

        html += `</div>`; // Menutup detail-actions
        
        container.innerHTML = html;
    }

    // Fungsi mengecek apakah status yang dipilih adalah "Selesai"
window.cekKondisiStatus = function(idServis, usernameSiswa, btnElement) {
    const statusDipilih = document.getElementById('pilihanStatus').value;
    
    if (statusDipilih === 'Selesai') {
        // Simpan ID Servis dan Username Siswa ke variabel global
        window.idServisAktifUntukPoin = idServis; 
        window.usernameSiswaUntukPoin = usernameSiswa;
        window.bukaModalPoin();
    } else {
        // Jika statusnya Proses/Menunggu, simpan seperti biasa
        if (typeof simpanValidasiGuru === 'function') {
            simpanValidasiGuru(idServis, btnElement);
        }
    }
}

window.hitungDanKirimPoin = function(btnPoin) {
    // 1. Hitung Poin
    const radioDipilih = document.querySelector('input[name="tingkat_poin"]:checked');
    let poinDasar = parseInt(radioDipilih.value);
    const checkboxBonus = document.getElementById('bonus_laporan');
    let poinBonus = (checkboxBonus && checkboxBonus.checked) ? parseInt(checkboxBonus.value) : 0;
    const totalPoin = poinDasar + poinBonus;

    // 2. Ambil ID dan Username
    const idServis = window.idServisAktifUntukPoin; 
    const username = window.usernameSiswaUntukPoin;

    // 3. Ubah teks tombol menjadi loading
    const tombolAsli = event.target;
    const teksAsli = tombolAsli.innerText;
    tombolAsli.innerText = 'Mengirim...';
    tombolAsli.disabled = true;

    // 4. Kirim Data ke Google Apps Script
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({
            action: "selesai_dan_poin",
            id_servis: idServis,
            username: username,
            poin: totalPoin
        })
    })
    .then(res => res.json())
    .then(data => {
        if(data.status === 'success') {
            alert(`✅ Berhasil! Status diselesaikan dan ${totalPoin} Poin ditambahkan untuk ${username}.`);
            window.tutupModalPoin();
            // Muat ulang data dashboard guru agar tabel terupdate
            if(typeof ambilDataServisGuru === 'function') {
                ambilDataServisGuru('dashboard');
                window.location.hash = '#dashboard-guru'; // Kembali ke halaman utama
            }
        } else {
            alert('Gagal menyimpan poin: ' + data.message);
        }
    })
    .catch(err => {
        console.error(err);
        alert('Terjadi kesalahan jaringan.');
    })
    .finally(() => {
        tombolAsli.innerText = teksAsli;
        tombolAsli.disabled = false;
    });
}
window.bukaModalPoin = function() {
    const modal = document.getElementById('modalPoinGuru');
    if (modal) {
        modal.style.display = 'flex';
        document.getElementById('bonus_laporan').checked = false;
        document.querySelector('input[name="tingkat_poin"][value="25"]').checked = true;
    }
}

window.tutupModalPoin = function() {
    const modal = document.getElementById('modalPoinGuru');
    if (modal) {
        modal.style.display = 'none';
    }
}


    // Fungsi menyimpan validasi ke Apps Script
// ==========================================================
    // FUNGSI MENYIMPAN VALIDASI GURU KE GOOGLE SHEETS
    // ==========================================================

    // ==========================================================
    // FUNGSI MENYIMPAN VALIDASI GURU (DIBUAT GLOBAL DENGAN WINDOW)
    // ==========================================================
    window.simpanValidasiGuru = function(idServis, btn) {
        // Mencegah error jika id dropdown tidak ditemukan
        const dropdown = document.getElementById('pilihanStatus');
        if (!dropdown) {
            alert('Dropdown status tidak ditemukan!');
            return;
        }

        const statusBaru = dropdown.value;
        
        // Ubah tampilan tombol agar ada efek loading
        btn.innerText = "⏳ Menyimpan...";
        btn.disabled = true;
        btn.style.backgroundColor = "#64748b"; 

        fetch(API_URL, { 
            method: 'POST',
            body: JSON.stringify({
                action: "validasi_servis",
                id_servis: idServis,
                status_baru: statusBaru
            })
        })
        .then(res => res.json())
        .then(response => {
            if(response.status === 'success') {
                alert('✅ Status servis berhasil diperbarui!');
                
                let cacheData = JSON.parse(localStorage.getItem('cache_servis_siswa')) || [];
                let index = cacheData.findIndex(s => String(s.id_servis) === String(idServis));
                
                if(index !== -1) {
                    cacheData[index].status = statusBaru; 
                    localStorage.setItem('cache_servis_siswa', JSON.stringify(cacheData));
                }

                kembaliKeDashboard();
                
                if (typeof muatDataServisGuru === 'function') {
                    muatDataServisGuru();
                }

            } else {
                alert('❌ Gagal: ' + response.message);
                btn.innerText = "Simpan Perubahan Status";
                btn.disabled = false;
                btn.style.backgroundColor = "#10b981"; 
            }
        })
        .catch(err => {
            console.error("Error Fetch:", err);
            alert('⚠️ Gagal terhubung ke server.');
            btn.innerText = "Simpan Perubahan Status";
            btn.disabled = false;
            btn.style.backgroundColor = "#10b981";
        });
    };


window.renderHalamanPoin = function() {
    // 1. Ambil data dari penyimpanan lokal
    const sesiUser = JSON.parse(localStorage.getItem('user_servisku'));
    
    // PELACAK 1: Menampilkan isi data user di Console
    console.log("🛠️ Data Sesi User saat ini:", sesiUser);
    
    // 2. Cari elemen HTML
    const elemenPoin = document.getElementById('angkaPoinSiswa');
    
    // PELACAK 2: Mengecek apakah tag HTML dengan ID tersebut ditemukan
    console.log("🛠️ Apakah elemen ID 'angkaPoinSiswa' ditemukan?", elemenPoin !== null);
    
    // 3. Masukkan data ke HTML
    if (sesiUser && elemenPoin) {
        // Jika poin bernilai undefined atau null, set jadi 0
        const jumlahPoin = sesiUser.poin !== undefined ? sesiUser.poin : 0;
        elemenPoin.innerText = jumlahPoin;
        console.log("✅ Poin berhasil dimasukkan ke layar:", jumlahPoin);
    } else {
        console.log("❌ Gagal! Sesi user kosong ATAU elemen HTML tidak ditemukan.");
    }
}
// Fungsi simulasi saat tombol tukar diklik
window.tukarPoin = function() {
    alert("Fitur penukaran poin sedang dalam tahap pengembangan! Terus kumpulkan poinmu!");
}

    // Fungsi navigasi back khusus agar sesuai role (Guru ke dashboard-guru, Siswa ke home/servis)
    function kembaliKeDashboard() {
        const sesiUser = JSON.parse(localStorage.getItem('user_servisku'));
        if (sesiUser) {
            window.location.hash = sesiUser.role === 'guru' ? 'dashboard-guru' : '';
        } else {
            window.location.hash = 'login';
        }
    }
// 1. FUNGSI UNTUK DASHBOARD GURU
    function muatDataServisGuru() {
        fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({
                action: "get_all_servis"
            })
        })
        .then(res => res.json())
        .then(response => {
            // Ambil array aslinya dari dalam properti .data server
            const actualData = response.data || response;

            if(Array.isArray(actualData)) {
                // Simpan SEMUA data ke cache umum
                localStorage.setItem('cache_servis_siswa', JSON.stringify(actualData));

                // Filter hanya tampilkan yang belum selesai di Dashboard
                const servisAktif = actualData.filter(item => {
                    const status = item.status ? item.status.toLowerCase() : '';
                    return status !== 'selesai'; 
                });

                // Render data 'servisAktif' ke tabel/kartu di Dashboard Guru
                if (typeof renderTabelDashboardGuru === 'function') {
                    renderTabelDashboardGuru(servisAktif);
                }
            } else {
                console.error("Format data guru bukan array:", response);
            }
        })
        .catch(err => {
            console.error("Gagal memuat data guru:", err);
            const container = document.getElementById('guruServisContainer');
            if (container) {
                container.innerHTML = `<p style="text-align:center; color:#ef4444; padding:20px;">Gagal terhubung ke database server.</p>`;
            }
        });
    }

    // 2. FUNGSI UNTUK HALAMAN DAFTAR SERVIS GURU
    function muatSemuaServisGuru() {
        const container = document.getElementById('listServisContainer'); 
        if (!container) return;

        container.innerHTML = `<p style="text-align:center; color:#a0a4b8; padding:20px;">⏳ Memuat seluruh riwayat servis...</p>`;

        fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({ action: "get_all_servis" })
        })
        .then(res => res.json())
        .then(response => {
            // Ambil array aslinya dari dalam properti .data server
            const actualData = response.data || response;

            if(Array.isArray(actualData)) {
                localStorage.setItem('cache_servis_siswa', JSON.stringify(actualData));

                let html = '';
                if (actualData.length === 0) {
                    html = `<p style="text-align:center; color:#a0a4b8; padding:20px;">Belum ada riwayat servis masuk.</p>`;
                } else {
                    actualData.forEach(item => {
                        let badgeColor = '#f59e0b'; // Menunggu
                        if(item.status === 'Proses') badgeColor = '#38bdf8';
                        if(item.status === 'Selesai') badgeColor = '#10b981';

                        html += `
                            <div style="background: #16192b; border: 1px solid #22263e; padding: 15px; border-radius: 12px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <div style="font-size: 11px; color: #8bb4f7; font-weight: bold;">#${item.id_servis}</div>
                                    <div style="font-size: 15px; color: white; font-weight: bold; margin: 4px 0;">${item.merk} (${item.jenis})</div>
                                    <div style="font-size: 12px; color: #a0a4b8;">Pelanggan: ${item.nama_pelanggan} | Teknisi: ${item.username}</div>
                                </div>
                                <div style="text-align: right;">
                                    <span style="display: inline-block; padding: 4px 10px; background: ${badgeColor}20; color: ${badgeColor}; border: 1px solid ${badgeColor}; border-radius: 6px; font-size: 12px; font-weight: bold; margin-bottom: 8px;">${item.status}</span>
                                    <div>
                                        <a href="#detail-servis" onclick="localStorage.setItem('selected_servis_id', '${item.id_servis}')" style="padding: 6px 12px; background: #3b82f6; border-radius: 6px; color: white; text-decoration:none; font-size: 12px; display:inline-block;">Detail</a>
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                }
                container.innerHTML = html;
            } else {
                container.innerHTML = `<p style="text-align:center; color:#ef4444; padding:20px;">Format data dari server tidak valid.</p>`;
            }
        })
        .catch(err => {
            console.error("Gagal:", err);
            container.innerHTML = `<p style="text-align:center; color:#ef4444; padding:20px;">Gagal memuat data dari server.</p>`;
        });
    }    
    // Fungsi untuk merender Angka Statistik dan Kartu Servis Guru
    function renderDashboardGuru(list) {
        // 1. Hitung Angka Statistik
        const total = list.length;
        const menunggu = list.filter(i => (i.status || '').toLowerCase() === 'menunggu').length;
        const proses = list.filter(i => (i.status || '').toLowerCase() === 'proses').length;
        const selesai = list.filter(i => (i.status || '').toLowerCase() === 'selesai').length;

        // 2. Inject Angka ke Kartu Statistik
        if (document.getElementById('guruStatTotal')) document.getElementById('guruStatTotal').innerText = total;
        if (document.getElementById('guruStatMenunggu')) document.getElementById('guruStatMenunggu').innerText = menunggu;
        if (document.getElementById('guruStatProses')) document.getElementById('guruStatProses').innerText = proses;
        if (document.getElementById('guruStatSelesai')) document.getElementById('guruStatSelesai').innerText = selesai;

        // 3. Render Kartu Servis Siswa
        const container = document.getElementById('guruServisContainer');
        if (!container) return;

        if (list.length === 0) {
            container.innerHTML = `<p style="text-align:center; color:#94a3b8; padding:20px;">Belum ada data servis dari siswa.</p>`;
            return;
        }

        let html = '';
        list.forEach(item => {
            let badgeText = 'Menunggu Validasi';
            let badgeStyle = 'background: rgba(245,158,11,0.15); color: #f59e0b;';

            if ((item.status || '').toLowerCase() === 'proses') {
                badgeText = '⏳ Diproses Siswa';
                badgeStyle = 'background: rgba(59,130,246,0.15); color: #3b82f6;';
            } else if ((item.status || '').toLowerCase() === 'selesai') {
                badgeText = '✅ Selesai';
                badgeStyle = 'background: rgba(16,185,129,0.15); color: #10b981;';
            }

            html += `
                <div class="servis-card" style="background-color: #16192b; border: 1px solid #22263e; border-radius: 14px; padding: 15px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <span style="font-size: 12px; font-weight: bold; color: #8bb4f7;">#${item.id_servis}</span>
                        <span class="badge" style="${badgeStyle} padding: 3px 8px; border-radius: 6px; font-size: 10px;">${badgeText}</span>
                    </div>
                    <div style="font-size: 11px; color: #38bdf8; font-weight: bold; margin-bottom: 4px;">👨‍🔧 Siswa: ${item.username || '-'}</div>
                    <div style="font-size: 14px; font-weight: bold; color: white; margin-bottom: 4px;">${item.nama_pelanggan}</div>
                    <div style="font-size: 12px; color: #a0a4b8; margin-bottom: 10px;">${item.merk} - ${item.keluhan}</div>
                    <button class="btn-detail" data-id="${item.id_servis}" style="width: 100%; padding: 8px; background-color: #3b82f6; border: none; border-radius: 8px; color: white; font-weight: bold; font-size: 11px; cursor: pointer;">Detail / Validasi</button>
                </div>
            `;
        });

        container.innerHTML = html;
    }



    // Fungsi Logika Interaktif (Tab, Toggle, Komponen Tambahan)
    function jalankanLogikaInteraktif() {
        const tabGroups = document.querySelectorAll('.filter-tabs');
        tabGroups.forEach(group => {
            const tabs = group.querySelectorAll('.tab-btn');
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    tabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                });
            });
        });

        const toggles = document.querySelectorAll('.toggle-switch');
        toggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                toggle.classList.toggle('active');
            });
        });

        const btnAdd = document.querySelector('.btn-add-item');
        if (btnAdd) {
            btnAdd.addEventListener('click', () => {
                const row = document.createElement('div');
                row.className = 'component-row';
                row.innerHTML = `
                    <input type="text" placeholder="Nama Komponen" class="input-modern">
                    <button type="button" class="btn-delete-item">🗑️</button>
                `;
                btnAdd.parentNode.insertBefore(row, btnAdd);
                
                row.querySelector('.btn-delete-item').addEventListener('click', function() {
                    this.parentElement.remove();
                });
            });
        }

        const btnDeletes = document.querySelectorAll('.btn-delete-item');
        btnDeletes.forEach(btn => {
            btn.addEventListener('click', function() {
                this.parentElement.remove();
            });
        });
    }


    // ==========================================================
// PEMANTAU HALAMAN OTOMATIS (ROUTER INTERCEPTOR)
// ==========================================================
// ==========================================================
// PEMANTAU HALAMAN OTOMATIS (DENGAN PEMISAH GURU & SISWA)
// ==========================================================
function cekDanMuatDataHalaman() {
    const hash = window.location.hash || '';
    
    // Ambil data sesi dari 'user_servisku'
    const sesiRaw = localStorage.getItem('user_servisku');
    let sesiUser = {};
    try {
        sesiUser = JSON.parse(sesiRaw) || {};
    } catch(e) {
        sesiUser.role = sesiRaw;
    }

    const roleUser = (sesiUser.role || sesiUser.hak_akses || sesiUser.level || '').toLowerCase();
    const username = sesiUser.username || sesiUser.nama || '';

    console.log("Halaman:", hash, "| Role Terdeteksi:", roleUser, "| Username:", username);

    // 1. Jika yang login adalah GURU
    if (roleUser === 'guru') {
        if (hash === '#dashboard-guru' || hash === '') {
            if (typeof ambilDataServisGuru === 'function') {
                ambilDataServisGuru('dashboard');
            }
        } else if (hash === '#servis') {
            if (typeof ambilDataServisGuru === 'function') {
                ambilDataServisGuru('semua');
            }
        }
    } 
    // 2. Jika yang login adalah SISWA
    else if (roleUser === 'siswa') {
        if (hash === '#servis' || hash === '') {
            if (typeof muatDataServisSiswa === 'function') {
                muatDataServisSiswa(username);
            }
        }else if (hash === '#poin') { // ===> TAMBAHAN BARU UNTUK HALAMAN POIN <===
            if (typeof renderHalamanPoin === 'function') {
                setTimeout(function(){
                    renderHalamanPoin();
                },50);
                }
            
        }
    }
}

window.addEventListener('DOMContentLoaded', cekDanMuatDataHalaman);
window.addEventListener('hashchange', cekDanMuatDataHalaman);


// EVENT LISTENER GLOBAL UNTUK KLIK (Login, Register & Kirim ke Google Sheets)
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

        if (e.target.closest('#btnLogout') || e.target.id === 'btnLogout') {
            e.preventDefault(); 
            localStorage.removeItem('user_servisku');
            window.location.hash = 'login';
        }

        if (e.target.closest('#btnKirimServis') || e.target.id === 'btnKirimServis') {
            e.preventDefault(); 
            
            const sesiUser = JSON.parse(localStorage.getItem('user_servisku'));
            if (!sesiUser) {
                window.location.hash = 'login';
                return;
            }

            const namaPelanggan = document.getElementById('tsNamaPelanggan').value;
            const alamat = document.getElementById('tsAlamat').value;
            const jenis = document.getElementById('tsJenis').value;
            const merk = document.getElementById('tsMerk').value;
            const keluhan = document.getElementById('tsKeluhan').value;
            const analisa = document.getElementById('tsAnalisa').value;
            const pengukuran = document.getElementById('tsPengukuran').value;
            const msgBox = document.getElementById('servisMessage');
            const btn = e.target.closest('#btnKirimServis'); 

            let komponenArray = [];
            const komponenInputs = document.querySelectorAll('.component-row input');
            komponenInputs.forEach(input => {
                if (input.value.trim() !== '') komponenArray.push(input.value.trim());
            });
            const komponenText = komponenArray.join(', ');

            if (!namaPelanggan || !merk || !keluhan) {
                if (msgBox) {
                    msgBox.innerText = "Data bertanda (*) wajib diisi!";
                    msgBox.style.color = "#ef4444";
                }
                return;
            }

            const originalBtnText = btn.innerHTML;
            btn.innerHTML = "⏳ MENGIRIM...";
            btn.disabled = true;
            if (msgBox) {
                msgBox.innerText = "Menyimpan ke database...";
                msgBox.style.color = "#f59e0b";
            }

            fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify({
                    action: "tambah_servis",
                    username: sesiUser.username,
                    nama_pelanggan: namaPelanggan,
                    alamat: alamat,
                    jenis: jenis,
                    merk: merk,
                    keluhan: keluhan,
                    analisa: analisa,
                    pengukuran: pengukuran,
                    komponen: komponenText || "-"
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    if (msgBox) {
                        msgBox.innerText = "Berhasil! Tiket: " + data.id_servis;
                        msgBox.style.color = "#10b981";
                    }
                    setTimeout(() => { window.location.hash = ''; }, 2000);
                } else {
                    if (msgBox) {
                        msgBox.innerText = data.message || "Gagal menyimpan.";
                        msgBox.style.color = "#ef4444";
                    }
                }
            })
            .catch(error => {
                if (msgBox) {
                    msgBox.innerText = "Gagal terhubung ke server!";
                    msgBox.style.color = "#ef4444";
                }
            })
            .finally(() => {
                btn.innerHTML = originalBtnText; 
                btn.disabled = false;
            });
        }

        if (e.target.closest('.btn-detail')) {
            const btn = e.target.closest('.btn-detail');
            const idServis = btn.getAttribute('data-id');
            if (idServis) {
            localStorage.setItem('selected_servis_id', idServis);
            window.location.hash = 'detail-servis';
            }
        }
    });

    // Memerintahkan browser untuk memantau jika URL berubah
    window.addEventListener('hashchange', render);
    
    // Menjalankan fungsi render saat aplikasi pertama kali dibuka
    render();
}