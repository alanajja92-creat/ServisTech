// ==========================================================
// HALAMAN TAMBAH SERVIS
// ==========================================================
import { API_URL } from '../config.js';

export const routeTambahServis = `
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
    `;

// Mengisi username teknisi otomatis di form (dipanggil dari router.js
// setelah halaman 'tambah-servis' dirender, sama seperti logika aslinya).
export function isiUsernameOtomatis(sesiUser) {
    const elInputUser = document.getElementById('tsUsername');
    if (elInputUser) {
        elInputUser.value = sesiUser.username;
        elInputUser.readOnly = true;
        elInputUser.style.backgroundColor = "#19459e";
    }
}

// Menempelkan event submit form tambah servis (tombol Simpan)
export function attachServisFormEvents() {
    // PERBAIKAN BUG: formulir 'tambahServisForm' sebelumnya tidak punya
    // penangan event 'submit' sama sekali - hanya event klik pada tombolnya.
    // Akibatnya, menekan Enter di salah satu input teks memicu submit form
    // native (memuat ulang halaman & data yang sedang diisi hilang).
    // Menahan event submit di sini membuat satu-satunya jalur pengiriman
    // data tetap lewat logika klik #btnKirimServis di bawah, seperti semula.
    document.addEventListener('submit', (e) => {
        if (e.target && e.target.id === 'tambahServisForm') {
            e.preventDefault();
        }
    });

    document.addEventListener('click', (e) => {
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
    });
}
