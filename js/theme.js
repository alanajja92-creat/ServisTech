// ==========================================================
// SISTEM TEMA GELAP / TERANG
// ==========================================================
const STORAGE_KEY = 'servisku_theme'; // nilai tersimpan: 'dark' atau 'light'

// Menerapkan tema tersimpan ke <body> saat aplikasi pertama kali dibuka.
// Dipanggil sedini mungkin (dari app.js) supaya tidak ada "kedipan"
// tema salah sebelum halaman sempat dirender oleh router.
export function initTheme() {
    const tersimpan = localStorage.getItem(STORAGE_KEY);
    if (tersimpan === 'light') {
        document.body.classList.add('light-mode');
    }
}

// Mengecek apakah tema terang sedang aktif
export function isLightMode() {
    return document.body.classList.contains('light-mode');
}

// Membalik tema aktif (gelap <-> terang) dan menyimpan pilihannya
// agar tetap diingat walau aplikasi ditutup/dibuka kembali.
export function toggleTheme() {
    const sekarangTerang = document.body.classList.toggle('light-mode');
    localStorage.setItem(STORAGE_KEY, sekarangTerang ? 'light' : 'dark');
    return sekarangTerang;
}