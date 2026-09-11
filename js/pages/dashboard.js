// ==========================================================
// HALAMAN DASHBOARD (SISWA & GURU)
// ==========================================================
import { API_URL } from '../config.js';
import { renderHalamanServis } from './servis-list.js';

// HALAMAN DASHBOARD SISWA
export const routeDashboardSiswa = `
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
    `;

// HALAMAN DASHBOARD GURU / ADMIN
export const routeDashboardGuru = `
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
    `;

// ==========================================================
// ALUR SISWA
// ==========================================================

// Fungsi untuk memuat data servis siswa dari Google Sheets
export function muatDataServisSiswa(username) {
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

// Fungsi helper untuk merender ringkasan ke Dashboard (Maksimal 3 data terakhir)
export function renderDashboardSiswa(list) {
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

// ==========================================================
// ALUR GURU
// ==========================================================

// FUNGSI UTAMA UNTUK MENARIK DATA SERVIS GURU
export function ambilDataServisGuru(tujuanRender = 'dashboard') {
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

// Fungsi untuk merender Angka Statistik dan Kartu Servis Guru
export function renderDashboardGuru(list) {
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
