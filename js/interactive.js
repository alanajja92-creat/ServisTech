// ==========================================================
// LOGIKA INTERAKTIF UMUM
// Dipakai ulang oleh beberapa halaman: tab filter (servis, poin),
// toggle switch (pengaturan), dan baris komponen dinamis (tambah-servis).
// Dipanggil oleh router.js setiap kali halaman selesai dirender.
// ==========================================================
export function jalankanLogikaInteraktif() {
    const tabGroups = document.querySelectorAll('.filter-tabs');
    tabGroups.forEach(group => {
        const tabs = group.querySelectorAll('.tab-btn');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });
    });

    const toggles = document.querySelectorAll('.toggle-switch');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
        });
    });

    const btnAdd = document.querySelector('.btn-add-item');
    if (btnAdd) {
        btnAdd.addEventListener('click', () => {
            const row = document.createElement('div');
            row.className = 'component-row';
            row.innerHTML = `
                <input type="text" placeholder="Nama Komponen" class="input-modern">
                <button type="button" class="btn-delete-item">🗑️</button>
            `;
            btnAdd.parentNode.insertBefore(row, btnAdd);

            row.querySelector('.btn-delete-item').addEventListener('click', function() {
                this.parentElement.remove();
            });
        });
    }

    const btnDeletes = document.querySelectorAll('.btn-delete-item');
    btnDeletes.forEach(btn => {
        btn.addEventListener('click', function() {
            this.parentElement.remove();
        });
    });
}
