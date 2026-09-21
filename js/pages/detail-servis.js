// ==========================================================
// HALAMAN DETAIL SERVIS
// ==========================================================
import { API_URL } from '../config.js';
import { ambilDataServisGuru } from './dashboard.js';

export const routeDetailServis = `
        <div id="detailServisContainer" class="detail-servis-page">
            <!-- Tampilan Loading awal sebelum data detail dirender oleh JS -->
            <div style="text-align: center; padding: 40px 20px;">
                <span style="font-size: 30px;">⏳</span>
                <p style="color: #a0a4b8; font-size: 14px; margin-top: 10px;">Memuat detail servis...</p>
            </div>
        </div>
    `;



// Fungsi untuk merender Halaman Detail Servis secara dinamis
export function renderDetailServis() {
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
                        <button onclick="hitungDanKirimPoin(event)" style="flex: 1; padding: 12px; background: #3b82f6; border: none; color: white; border-radius: 8px; cursor: pointer; font-weight: bold;">Kirim Poin</button>
                    </div>
                </div>
            </div>
        `;
    }
    // ==========================================================

    html += `</div>`; // Menutup detail-actions

    container.innerHTML = html;
}

// Menempelkan seluruh fungsi global window.* terkait detail servis
// (dipanggil sekali saat aplikasi diinisialisasi lewat initRouter(),
// persis seperti waktu eksekusi assignment window.* pada kode asli).
export function attachDetailServisGlobals() {

// Fungsi navigasi back khusus agar sesuai role (Guru ke dashboard-guru, Siswa ke home/servis)
// PERBAIKAN BUG: fungsi ini dipanggil lewat atribut inline onclick="kembaliKeDashboard()"
// pada HTML hasil renderDetailServis(), sehingga harus ditempel ke window supaya
// tombol "←" di halaman Detail Servis dapat berfungsi (sebelumnya fungsi ini
// tidak pernah global sehingga tombol back menghasilkan error).
window.kembaliKeDashboard = function () {
    const sesiUser = JSON.parse(localStorage.getItem('user_servisku'));
    if (sesiUser) {
        window.location.hash = sesiUser.role === 'guru' ? 'dashboard-guru' : '';
    } else {
        window.location.hash = 'login';
    }
};

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

// PERBAIKAN BUG: sebelumnya fungsi ini mengandalkan variabel global
// implisit `event` (window.event) untuk tahu tombol mana yang diklik.
// window.event tidak didukung konsisten di semua browser (mis. Firefox),
// jadi sekarang event dikirim eksplisit lewat onclick="hitungDanKirimPoin(event)".
window.hitungDanKirimPoin = function(event) {
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

// ==========================================================
// FUNGSI MENYIMPAN VALIDASI GURU KE GOOGLE SHEETS
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

            // PERBAIKAN BUG: sebelumnya memanggil muatDataServisGuru() yang
            // merender ke fungsi renderTabelDashboardGuru() yang tidak pernah
            // ada, sehingga dashboard guru tidak pernah benar-benar ter-refresh.
            // ambilDataServisGuru('dashboard') adalah fungsi yang benar-benar
            // dipakai untuk merender dashboard guru (sama seperti di hitungDanKirimPoin).
            if (typeof ambilDataServisGuru === 'function') {
                ambilDataServisGuru('dashboard');
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

} // akhir attachDetailServisGlobals
