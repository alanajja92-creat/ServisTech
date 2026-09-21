// ==========================================================
// HALAMAN DAFTAR SERVIS
// ==========================================================

export const routeServis = `
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
    `;

// Fungsi helper untuk merender ke Halaman Servis (dipakai juga oleh
// alur siswa di dashboard.js dan alur guru di dashboard.js)
export function renderHalamanServis(list) {
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

// Menempelkan klik pada tombol '.btn-detail' (dipakai di kartu servis
// siswa maupun guru) yang mengarahkan ke halaman detail-servis.
export function attachServisListEvents() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('.btn-detail')) {
            const btn = e.target.closest('.btn-detail');
            const idServis = btn.getAttribute('data-id');
            if (idServis) {
                localStorage.setItem('selected_servis_id', idServis);
                window.location.hash = 'detail-servis';
            }
        }
    });
}
