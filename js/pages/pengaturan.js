// ==========================================================
// HALAMAN PENGATURAN (UMUM UNTUK SISWA & GURU)
// ==========================================================

export const routePengaturan = `
        <div class="dashboard-page">
            <!-- Header Pengaturan -->
            <div class="dashboard-header" style="margin-bottom: 25px;">
                <h3 class="app-brand" style="margin:0;">Pengaturan</h3>
            </div>

            <!-- Kartu Profil Singkat (Data akan dinamis saat login) -->
            <div class="profile-section" style="display: flex; align-items: center; gap: 15px; background-color: #16192b; padding: 20px; border-radius: 14px; border: 1px solid #22263e; margin-bottom: 25px;">
                <div class="profile-avatar" id="profileAvatar" style="width: 60px; height: 60px; font-size: 24px; display: flex; justify-content: center; align-items: center; background: linear-gradient(135deg, #3b82f6, #8bb4f7); color: white; border-radius: 50%; font-weight: bold;">US</div>
                <div>
                    <h3 id="profileNama" style="margin: 0; color: white; font-size: 18px;">Nama Pengguna</h3>
                    <p id="profileRole" style="margin: 5px 0 0 0; color: #a0a4b8; font-size: 13px;">Pengguna - Teknik Audio Video</p>
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

                
                <button id="btnLogout" class="setting-item" style="display: flex; align-items: center; gap: 12px; background-color: #16192b; padding: 15px; border-radius: 12px; border: 1px solid #22263e; text-decoration: none; color: white; font-size: 14px;">Keluar (Log Out)</button>
            </div>
        </div>
    `;

// PERBAIKAN: melengkapi maksud komentar asli "Data akan dinamis saat login" -
// kartu profil sebelumnya selalu menampilkan teks statis "Nama Pengguna"
// meski data sesiUser sudah tersedia. Dipanggil dari router.js setelah
// halaman 'pengaturan' dirender, mengikuti pola isiUsernameOtomatis().
export function isiProfilPengaturan(sesiUser) {
    const elNama = document.getElementById('profileNama');
    const elRole = document.getElementById('profileRole');
    const elAvatar = document.getElementById('profileAvatar');

    const nama = sesiUser.nama_lengkap || sesiUser.username || 'Pengguna';
    const roleLabel = sesiUser.role && sesiUser.role.toLowerCase() === 'guru' ? 'Guru' : 'Siswa';

    if (elNama) elNama.innerText = nama;
    if (elRole) elRole.innerText = roleLabel + ' - Teknik Audio Video';
    if (elAvatar) elAvatar.innerText = nama.trim().charAt(0).toUpperCase() || 'U';
}

// Menempelkan event tombol Logout
export function attachLogoutEvent() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('#btnLogout') || e.target.id === 'btnLogout') {
            e.preventDefault();
            localStorage.removeItem('user_servisku');
            window.location.hash = 'login';
        }
    });
}
