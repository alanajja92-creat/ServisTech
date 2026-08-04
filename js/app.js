// Memanggil mesin router dari file router.js
import { initRouter } from './router.js';

// Menunggu sampai seluruh kerangka HTML selesai dimuat oleh browser
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistem Aplikasi Servis Mulai Beroperasi!");
    
    // Menyalakan mesin router
    initRouter();
});