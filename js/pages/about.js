window.App = window.App || {};
window.App.Pages = window.App.Pages || {};
window.App.Pages.About = {
  render: function() {
    return `
      <div class="about-page p-6 animate-fade-in flex flex-col min-h-screen pb-20">
        <div class="flex items-center mb-8">
          <a href="#/pengaturan" class="text-gray-400 hover:text-white mr-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          </a>
          <h1 class="text-xl font-bold text-white">Tentang</h1>
        </div>
        <div class="flex-grow flex flex-col items-center justify-center text-center max-w-md mx-auto w-full">
          <!-- Logo -->
          <div class="w-32 h-32 mb-6 bg-gray-800 rounded-3xl flex items-center justify-center shadow-lg border border-gray-700">
            <svg class="w-20 h-20 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          
          <h2 class="text-3xl font-bold text-white mb-2 tracking-tight">e-Servis</h2>
          <div class="inline-block bg-blue-900 bg-opacity-50 text-blue-400 text-sm px-3 py-1 rounded-full mb-6 font-medium border border-blue-800">
            Versi 1.0.0
          </div>
          
          <p class="text-gray-400 mb-8 leading-relaxed">
            Aplikasi pencatatan dan pengelolaan servis elektronik. Memudahkan manajemen pelanggan, riwayat perbaikan, dan pelacakan status.
          </p>
          
          <div class="w-full bg-gray-800 border border-gray-700 rounded-xl p-5 mb-8 text-left">
            <h3 class="text-white font-medium mb-4 text-center">Fitur Utama</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span class="text-gray-300 text-sm">Pencatatan data servis dan pelanggan</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span class="text-gray-300 text-sm">Sistem persetujuan (Approval) admin</span>