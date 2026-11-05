// ==========================================================
// HALAMAN PERSETUJUAN AKUN (KHUSUS GURU)
// Guru menyetujui / menolak akun baru (siswa maupun guru).
// Keputusan sebenarnya tetap diperiksa di server (Apps Script);
// halaman ini hanya antarmukanya.
// ==========================================================
import { getApiUrl } from '../config.js';

export const routePersetujuan = `
        <div class="dashboard-page">
            <div class="page-header">
                <a href="#pengaturan" class="back-link">←</a>
                <h2>Persetujuan Akun</h2>
            </div>
            <p class="page-subtitle">Akun baru baru bisa dipakai masuk setelah kamu setujui.</p>

            <div id="listPendingContainer" style="display: flex; flex-direction: column; gap: 12px; margin-top: 15px;">
                <p style="text-align:center; color: var(--text-secondary); padding: 20px;">⏳ Memuat daftar pendaftar...</p>
            </div>
        </div>
    `;

// Data pendaftar adalah input orang lain -> WAJIB di-escape sebelum
// dimasukkan ke innerHTML, supaya tidak bisa menyisipkan skrip (XSS).
function esc(teks) {
    return String(teks == null ? '' : teks)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function ambilSesi() {
    try { return JSON.parse(localStorage.getItem('user_servisku')); }
    catch (e) { return null; }
}

// Dipakai saat server menolak token (sesi habis / bukan guru)
function sesiTidakValid(pesan) {
    alert(pesan || 'Sesi kamu sudah habis. Silakan login ulang.');
    localStorage.removeItem('user_servisku');
    window.location.hash = 'login';
}

function renderDaftarPending(list) {
    const container = document.getElementById('listPendingContainer');
    if (!container) return;

    if (list.length === 0) {
        container.innerHTML = `<p style="text-align:center; color: var(--text-secondary); padding: 20px;">Tidak ada akun yang menunggu persetujuan. 🎉</p>`;
        return;
    }

    let html = '';
    list.forEach(item => {
        const role = String(item.role || '').toLowerCase();
        const roleLabel = role === 'guru' ? '👨‍🏫 Guru' : '🎓 Siswa';
        const roleWarna = role === 'guru' ? '#f59e0b' : '#3b82f6';
        const tgl = item.tanggal_daftar
            ? new Date(item.tanggal_daftar).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
            : '-';

        html += `
            <div style="background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: 14px; padding: 15px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <span style="font-size: 12px; font-weight: bold; color: ${roleWarna};">${roleLabel}</span>
                    <span style="font-size: 11px; color: var(--text-secondary);">Daftar: ${esc(tgl)}</span>
                </div>
                <div style="font-size: 15px; font-weight: bold; color: var(--text-primary);">${esc(item.nama_lengkap)}</div>
                <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 12px;">@${esc(item.username)}</div>
                ${role === 'guru' ? `<div style="font-size: 11px; color: #f59e0b; margin-bottom: 10px;">⚠️ Meminta akses sebagai GURU. Setujui hanya jika kamu mengenalnya.</div>` : ''}
                <div style="display: flex; gap: 10px;">
                    <button class="btn-aksi-akun" data-aksi="rejected" data-username="${esc(item.username)}" style="flex: 1; padding: 10px; background: transparent; border: 1px solid #ef4444; color: #ef4444; border-radius: 8px; font-weight: bold; cursor: pointer;">Tolak</button>
                    <button class="btn-aksi-akun" data-aksi="approved" data-username="${esc(item.username)}" style="flex: 1; padding: 10px; background-color: #10b981; border: none; color: white; border-radius: 8px; font-weight: bold; cursor: pointer;">Setujui</button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// Dipanggil router.js setiap halaman 'persetujuan' dibuka
export function muatAkunPending() {
    const sesi = ambilSesi();
    const container = document.getElementById('listPendingContainer');
    if (!sesi || !container) return;

    fetch(getApiUrl(), {
        method: 'POST',
        body: JSON.stringify({ action: 'get_pending_users', token: sesi.token })
    })
    .then(res => res.json())
    .then(resp => {
        if (resp.status === 'success') {
            renderDaftarPending(resp.data || []);
        } else if (resp.code === 'unauthorized') {
            sesiTidakValid(resp.message);
        } else {
            container.innerHTML = `<p style="text-align:center; color:#ef4444; padding:20px;">${esc(resp.message || 'Gagal memuat data.')}</p>`;
        }
    })
    .catch(() => {
        container.innerHTML = `<p style="text-align:center; color:#ef4444; padding:20px;">Gagal terhubung ke server.</p>`;
    });
}

// Klik tombol Setujui / Tolak
export function attachPersetujuanEvents() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-aksi-akun');
        if (!btn) return;

        const sesi = ambilSesi();
        if (!sesi) { window.location.hash = 'login'; return; }

        const username = btn.getAttribute('data-username');
        const aksi = btn.getAttribute('data-aksi'); // 'approved' | 'rejected'
        const kata = aksi === 'approved' ? 'MENYETUJUI' : 'MENOLAK';
        if (!confirm('Yakin ingin ' + kata + ' akun @' + username + '?')) return;

        const teksAsli = btn.innerText;
        btn.innerText = '⏳...';
        btn.disabled = true;

        fetch(getApiUrl(), {
            method: 'POST',
            body: JSON.stringify({
                action: 'set_user_status',
                token: sesi.token,
                target_username: username,
                status_baru: aksi
            })
        })
        .then(res => res.json())
        .then(resp => {
            if (resp.status === 'success') {
                muatAkunPending(); // segarkan daftar
            } else if (resp.code === 'unauthorized') {
                sesiTidakValid(resp.message);
            } else {
                alert('❌ ' + (resp.message || 'Gagal memproses akun.'));
                btn.innerText = teksAsli;
                btn.disabled = false;
            }
        })
        .catch(() => {
            alert('⚠️ Gagal terhubung ke server.');
            btn.innerText = teksAsli;
            btn.disabled = false;
        });
    });
}