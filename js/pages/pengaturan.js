// ==========================================================
// HALAMAN PENGATURAN (UMUM UNTUK SISWA & GURU)
// ==========================================================
import { isLightMode, toggleTheme } from '../theme.js';

export const routePengaturan = `
        <div class="dashboard-page">
            <!-- Header Pengaturan -->
            <div class="dashboard-header" style="margin-bottom: 25px;">
                <h3 class="app-brand" style="margin:0;">Pengaturan</h3>
            </div>

            <!-- Kartu Profil Singkat (Data akan dinamis saat login) -->
            <div class="profile-section" style="display: flex; align-items: center; gap: 15px; background-color: var(--bg-card); padding: 20px; border-radius: 14px; border: 1px solid var(--border-color); margin-bottom: 25px;">
                <div class="profile-avatar" id="profileAvatar" style="width: 60px; height: 60px; font-size: 24px; display: flex; justify-content: center; align-items: center; background: linear-gradient(135deg, #3b82f6, #8bb4f7); color: white; border-radius: 50%; font-weight: bold;">US</div>
                <div>
                    <h3 id="profileNama" style="margin: 0; color: var(--text-primary); font-size: 18px;">Nama Pengguna</h3>
                    <p id="profileRole" style="margin: 5px 0 0 0; color: var(--text-secondary); font-size: 13px;">Pengguna - Teknik Audio Video</p>
                </div>
            </div>

            <!-- Daftar Menu Pengaturan -->
            <div class="settings-menu" style="display: flex; flex-direction: column; gap: 12px;">
                
                <div class="section-title-small" style="margin-bottom: 5px;">Preferensi Aplikasi</div>
                
                <!-- Opsi Notifikasi dengan Toggle -->
                <div class="setting-item" style="display: flex; justify-content: space-between; align-items: center; background-color: var(--bg-card); padding: 15px; border-radius: 12px; border: 1px solid var(--border-color);">
                    <div style="display: flex; align-items: center; gap: 12px; color: var(--text-primary); font-size: 14px;">
                        <span style="font-size: 18px;">🔔</span> Notifikasi Pembaruan
                    </div>
                    <!-- Class 'active' membuat toggle menyala (biru) dari awal -->
                    <div class="toggle-switch active"></div>
                </div>

                <!-- Opsi Mode Gelap dengan Toggle -->
                <div class="setting-item" style="display: flex; justify-content: space-between; align-items: center; background-color: var(--bg-card); padding: 15px; border-radius: 12px; border: 1px solid var(--border-color);">
                    <div style="display: flex; align-items: center; gap: 12px; color: var(--text-primary); font-size: 14px;">
                        <span style="font-size: 18px;">🌙</span> Mode Gelap (Dark Mode)
                    </div>
                    <div class="toggle-switch" id="toggleDarkMode"></div>
                </div>

                <div class="section-title-small" style="margin-top: 15px; margin-bottom: 5px;">Akun & Bantuan</div>

                <!-- Opsi Edit Profil -->
                <a href="#" class="setting-item" style="display: flex; align-items: center; gap: 12px; background-color: var(--bg-card); padding: 15px; border-radius: 12px; border: 1px solid var(--border-color); text-decoration: none; color: var(--text-primary); font-size: 14px;">
                    <span style="font-size: 18px;">👤</span> Edit Profil
                </a>
                
                <!-- Opsi Panduan -->
                <a href="#" class="setting-item" style="display: flex; align-items: center; gap: 12px; background-color: var(--bg-card); padding: 15px; border-radius: 12px; border: 1px solid var(--border-color); text-decoration: none; color: var(--text-primary); font-size: 14px;">
                    <span style="font-size: 18px;">📖</span> Panduan Aplikasi
                </a>

                
                <button id="btnLogout" class="setting-item" style="display: flex; align-items: center; gap: 12px; background-color: var(--bg-card); padding: 15px; border-radius: 12px; border: 1px solid var(--border-color); text-decoration: none; color: var(--text-primary); font-size: 14px;">Keluar (Log Out)</button>
            </div>
        </div>
    `;

// Mengisi kartu profil dengan data user yang sedang login
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

// Menyamakan tampilan toggle "Mode Gelap" dengan tema yang sedang aktif
// (HTML dibuat ulang tiap halaman dibuka, jadi statusnya harus disetel lagi).
export function isiTemaToggle() {
    const toggle = document.getElementById('toggleDarkMode');
    if (!toggle) return;
    // "active" (menyala) = Mode Gelap sedang aktif
    toggle.classList.toggle('active', !isLightMode());
}

// Klik pada toggle "Mode Gelap" -> ganti tema & simpan pilihannya
export function attachThemeToggleEvent() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('#toggleDarkMode')) {
            toggleTheme();
            isiTemaToggle();
        }
    });
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