// ==========================================================
// HALAMAN POIN
// ==========================================================

export const routePoin = `
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
                    <button class="btn-tukar" onclick="tukarPoin()">Tukar</button>
                </div>

                <!-- Voucher 2 -->
                <div class="reward-card">
                    <div class="reward-icon">🔍</div>
                    <div class="reward-details">
                        <h3 class="reward-title">Gratis Cek Perangkat</h3>
                        <p class="reward-req">Bebas biaya pengecekan awal kerusakan.</p>
                        <span class="reward-cost">250 ⭐</span>
                    </div>
                    <button class="btn-tukar" onclick="tukarPoin()">Tukar</button>
                </div>

                <!-- Voucher 3 -->
                <div class="reward-card">
                    <div class="reward-icon">🚚</div>
                    <div class="reward-details">
                        <h3 class="reward-title">Gratis Antar Jemput</h3>
                        <p class="reward-req">Maksimal jarak 5KM dari lokasi toko.</p>
                        <span class="reward-cost">800 ⭐</span>
                    </div>
                    <button class="btn-tukar" onclick="tukarPoin()">Tukar</button>
                </div>

            </div>
        </div>
    `;

// Menempelkan fungsi global window.renderHalamanPoin & window.tukarPoin
// (dipanggil sekali saat aplikasi diinisialisasi, sama seperti kode asli
// yang mendefinisikan kedua fungsi ini langsung ke objek window).
export function attachPoinGlobals() {
    window.renderHalamanPoin = function() {
        // 1. Ambil data dari penyimpanan lokal
        const sesiUser = JSON.parse(localStorage.getItem('user_servisku'));

        // 2. Cari elemen HTML
        const elemenPoin = document.getElementById('angkaPoinSiswa');

        // 3. Masukkan data ke HTML
        if (sesiUser && elemenPoin) {
            // Jika poin bernilai undefined atau null, set jadi 0
            const jumlahPoin = sesiUser.poin !== undefined ? sesiUser.poin : 0;
            elemenPoin.innerText = jumlahPoin;
        }
    };

    // Fungsi simulasi saat tombol tukar diklik
    window.tukarPoin = function() {
        alert("Fitur penukaran poin sedang dalam tahap pengembangan! Terus kumpulkan poinmu!");
    };
}
