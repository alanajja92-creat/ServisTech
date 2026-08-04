    }
    const toast = document.createElement('div');
    
    let bgColor = 'bg-blue-500';
    if (type === 'success') bgColor = 'bg-green-500';
    if (type === 'error') bgColor = 'bg-red-500';
    if (type === 'warning') bgColor = 'bg-yellow-500';
    toast.className = `${bgColor} text-white px-4 py-3 rounded-lg shadow-lg transform transition-all duration-300 translate-y-[-100%] opacity-0 flex items-center justify-between`;
    toast.innerHTML = `
      <span class="text-sm font-medium">${message}</span>
      <button class="ml-4 text-white hover:text-gray-200 focus:outline-none" onclick="this.parentElement.remove()">
        &times;
      </button>
    `;
    container.appendChild(toast);
    // Animate in
    setTimeout(() => {
      toast.classList.remove('translate-y-[-100%]', 'opacity-0');
    }, 10);
    // Remove after duration
    if (duration > 0) {
      setTimeout(() => {
        if (document.body.contains(toast)) {
          toast.classList.add('opacity-0', 'translate-y-[-100%]');
          setTimeout(() => {
            if (document.body.contains(toast)) toast.remove();
          }, 300);
        }
      }, duration);
    }
  }
};
