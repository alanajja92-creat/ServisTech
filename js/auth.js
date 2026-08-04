        return !!getCurrentUser();
    }
    function isAdmin() {
        const user = getCurrentUser();
        return user && user.role === 'admin';
    }
    function updateProfile(data) {
        const user = getCurrentUser();
        if (!user) return { success: false, message: 'Belum login.' };
        const updatedUser = window.App.Store.updateUser(user.id, data);
        if (updatedUser) {
            const { password: _, ...userWithoutPassword } = updatedUser;
            localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
            return { success: true };
        }
        return { success: false, message: 'Gagal update profil.' };
    }
    function changePassword(oldPw, newPw) {
        const user = getCurrentUser();
        if (!user) return { success: false, message: 'Belum login.' };
        // Need the actual user object with password to verify
        const fullUser = window.App.Store.getUsers().find(u => u.id === user.id);
        if (fullUser && fullUser.password === oldPw) {
            window.App.Store.updateUser(user.id, { password: newPw });
            return { success: true };
        }
        return { success: false, message: 'Password lama salah.' };
    }
    return {
        login,
        register,
        logout,
        getCurrentUser,
        isLoggedIn,
        isAdmin,
        updateProfile,
        changePassword
    };
})();
