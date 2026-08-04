        });
        localStorage.setItem(POINTS_KEY, JSON.stringify(allHistory));
    }
    function getPointHistory(userId) {
        const allHistory = JSON.parse(localStorage.getItem(POINTS_KEY) || '[]');
        return allHistory.filter(h => h.userId === userId).sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    // --- HELPERS ---
    function formatDate(isoString) {
        if (!isoString) return '-';
        const date = new Date(isoString);
        return date.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    }
    function getStatusLabel(status) {
        const map = {
            'menunggu': 'Menunggu',
            'proses': 'Proses',
            'menunggu_approval': 'Menunggu Approval',
            'disetujui': 'Disetujui',
            'ditolak': 'Ditolak',
            'selesai': 'Selesai'
        };
        return map[status] || status;
    }
    function getDeviceIcon(type) {
        const map = {
            'Smartphone': '📱',
            'Laptop': '💻',
            'Tablet': '📟',
            'TV': '📺',
            'Audio': '📻',
            'Lainnya': '🔌'
        };
        return map[type] || '🔌';
    }
    return {
        initStore,
        getServices, getServiceById, addService, updateService, deleteService,
        getUsers, getUserByUsername, addUser, updateUser,
        getPoints, addPoints, getPointHistory,
        generateId, formatDate, getStatusLabel, getDeviceIcon
    };
})();
