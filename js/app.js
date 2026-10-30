// Memanggil mesin router dari file router.js
import { initRouter } from './router.js';
import { initTheme } from './theme.js';

// FITUR BARU: menerapkan tema gelap/terang tersimpan sesegera mungkin,
// sebelum halaman dirender, supaya tidak ada "kedipan" tema yang salah.
initTheme();

// Menunggu sampai seluruh kerangka HTML selesai dimuat oleh browser
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistem Aplikasi Servis Mulai Beroperasi!");
    
    // Menyalakan mesin router
    initRouter();
});