// ==========================================================
// KONFIGURASI BERSAMA UNTUK SELURUH APLIKASI
// ==========================================================
// Tiap jurusan punya backend (Apps Script) dan database sendiri.
// Ganti URL TSM dengan URL /exec dari deployment di akun TSM.
const API_URLS = {
    tav: "https://script.google.com/macros/s/AKfycbxk53ooG4jSwxzWJfavK6K8XmByCh9x5OivfcjWtHfnVUwvy8fPRvaGeJIi_N7tI5xOuA/exec",
    tsm: "https://script.google.com/macros/s/AKfycbzFanJ0TyVT9_HBeugOz7xuTdmXi-bFT-ru4G-69v9BqWz0al69ImIFnk9Hj8UAIIrN/exec"
};

// Daftar jurusan: kunci dipakai di kode, nama dipakai untuk tampilan
export const JURUSAN = {
    tav: { nama: "Teknik Audio Video" },
    tsm: { nama: "Teknik Sepeda Motor" }
};

const KUNCI_JURUSAN = 'jurusan_servisku';

// Jurusan yang sedang dipakai (default TAV, supaya akun lama tetap jalan)
export function getJurusan() {
    const j = localStorage.getItem(KUNCI_JURUSAN);
    return JURUSAN[j] ? j : 'tav';
}

export function setJurusan(j) {
    if (JURUSAN[j]) localStorage.setItem(KUNCI_JURUSAN, j);
}

// URL backend sesuai jurusan yang sedang dipakai
export function getApiUrl() {
    return API_URLS[getJurusan()];
}

export function getNamaJurusan() {
    return JURUSAN[getJurusan()].nama;
}