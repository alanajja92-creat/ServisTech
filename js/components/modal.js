    });
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        if (onCancel) onCancel();
        close();
      }
    });
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        if (onCancel) onCancel();
        close();
        document.removeEventListener('keydown', handleEsc);
      }
    };
    document.addEventListener('keydown', handleEsc);
  },
  confirmModal: function(title, message, type = 'default') {
    return new Promise((resolve) => {
      this.showModal({
        title,
        content: message,
        type,
        onConfirm: () => resolve(true),
        onCancel: () => resolve(false)
      });
    });
  },
  closeModal: function() {
    const container = document.getElementById('modal-container');
    if (container) {
      container.innerHTML = '';
    }
  }
};
