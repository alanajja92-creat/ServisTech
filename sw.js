const CACHE_NAME = 'servisku-v1';

// Menginstal service worker
self.addEventListener('install', event => {
    console.log('Service Worker: Terinstal');
});

// Mengaktifkan service worker
self.addEventListener('activate', event => {
    console.log('Service Worker: Aktif');
});

// Mengambil data (fetch)
self.addEventListener('fetch', event => {
    // Biarkan kosong untuk tahap awal, ini syarat minimal agar bisa diinstal
});