<!DOCTYPE html>

<html class="dark" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ServisKu - Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        body {
            background-color: #0f0f1a;
            color: #e3e1eb;
            -webkit-font-smoothing: antialiased;
        }
        .glass-card {
            background: rgba(26, 26, 46, 0.6);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .stat-card-glow {
            box-shadow: 0 0 20px rgba(185, 195, 255, 0.15);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .active-glow {
            box-shadow: 0 0 15px rgba(185, 195, 255, 0.3);
        }
        /* Custom scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #34343c; border-radius: 10px; }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary": "#44176f",
                        "on-secondary-fixed-variant": "#5c3187",
                        "outline-variant": "#444653",
                        "on-secondary-fixed": "#2c0051",
                        "primary-fixed-dim": "#b9c3ff",
                        "on-error": "#690005",
                        "secondary-container": "#5c3187",
                        "surface-dim": "#121319",
                        "secondary-fixed-dim": "#dcb8ff",
                        "surface-bright": "#383940",
                        "inverse-on-surface": "#2f3037",
                        "on-primary-container": "#001e78",
                        "on-background": "#e3e1eb",
                        "on-primary-fixed-variant": "#1f3ba6",
                        "primary-fixed": "#dde1ff",
                        "on-tertiary-fixed-variant": "#663e00",
                        "secondary-fixed": "#f0dbff",
                        "primary-container": "#7189f6",
                        "on-error-container": "#ffdad6",
                        "surface-container-lowest": "#0d0e14",
                        "on-tertiary-container": "#3e2400",
                        "background": "#121319",
                        "tertiary-container": "#ca8012",
                        "secondary": "#dcb8ff",
                        "on-primary-fixed": "#001356",
                        "tertiary": "#ffb964",
                        "error-container": "#93000a",
                        "on-tertiary-fixed": "#2b1700",
                        "error": "#ffb4ab",
                        "surface-tint": "#b9c3ff",
                        "inverse-primary": "#3c55bf",
                        "outline": "#8f909e",
                        "inverse-surface": "#e3e1eb",
                        "surface-container-low": "#1a1b22",
                        "tertiary-fixed": "#ffddb9",
                        "surface-container-highest": "#34343c",
                        "surface-container": "#1e1f26",
                        "on-secondary-container": "#d0a1ff",
                        "on-surface-variant": "#c5c5d5",
                        "surface-variant": "#34343c",
                        "primary": "#b9c3ff",
                        "on-surface": "#e3e1eb",
                        "tertiary-fixed-dim": "#ffb964",
                        "on-primary": "#002388",
                        "surface-container-high": "#292931",
                        "surface": "#121319",
                        "on-tertiary": "#472a00"
                    },
                    "spacing": {
                        "input-padding-x": "16px",
                        "input-padding-y": "12px",
                        "container-margin": "24px",
                        "card-padding": "20px",
                        "gutter": "16px",
                        "unit": "4px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Outfit"],
                        "label-md": ["Inter"],
                        "headline-xl": ["Outfit"],
                        "label-sm": ["Inter"],
                        "body-lg": ["Inter"],
                        "body-md": ["Inter"],
                        "headline-lg-mobile": ["Outfit"],
                        "headline-md": ["Outfit"],
                        "body-sm": ["Inter"]
                    },
                    "fontSize": {
                        "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "label-md": ["14px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "headline-xl": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "label-sm": ["12px", {"lineHeight": "14px", "fontWeight": "500"}],
                        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "headline-lg-mobile": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                        "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}]
                    }
                }
            }
        }
    </script>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
</head>
<body class="font-body-md text-on-surface selection:bg-primary/30">
<!-- Top Navigation -->
<header class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-sm flex justify-between items-center px-container-margin h-16">
<div class="flex items-center gap-3">
<button class="md:hidden flex items-center justify-center p-2 text-on-surface-variant hover:bg-white/5 active:scale-95 duration-200">
<span class="material-symbols-outlined">menu</span>
</button>
<h1 class="font-headline-md text-headline-md font-bold text-primary dark:text-primary">ServisKu</h1>
</div>
<div class="flex items-center gap-2">
<button class="p-2 text-on-surface-variant hover:bg-white/5 transition-colors active:scale-95 duration-200 relative">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
</button>
<div class="w-10 h-10 rounded-full border border-primary/20 bg-surface-container overflow-hidden active:scale-95 duration-200 cursor-pointer">
<img class="w-full h-full object-cover" data-alt="A professional technician profile avatar in a high-tech studio environment, featuring a modern headset and a friendly expression. The lighting is futuristic with blue and violet undertones, reflecting the ServisKu brand identity. High-resolution digital portrait style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdr-L4qJ7VPHbcnM9W_hN9mwfPI6MCYWLHCFQjuMlM9jH1T_6SpQyBfQ8r8X2CwWviU4mMv-zgswCgxrK2pERP4oa6WaNhDDOyiH-i_I0v_FBLbA_KUG8u4JVk7Vp1arorQ9UgqabDtWLVEkmVsIoqwB_QwlfZb2c9G9fN4W8_4PM_UTrJdgi6rJhyRN57Jj51N5c-1VuCey3ruQlUXDTCczYo-VnnSAmxKS2OHorgfFLLDgqcGd32cKlte2i_YxLw6r0lIY4vIZQ"/>
</div>
</div>
</header>
<!-- Navigation Drawer (Desktop) -->
<aside class="fixed left-0 top-0 h-full w-[280px] hidden md:block bg-surface-container dark:bg-surface-container border-r border-white/10 flex flex-col pt-20 z-40">
<div class="px-6 py-4 flex items-center gap-4 mb-8">
<div class="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">account_circle</span>
</div>
<div>
<p class="font-headline-md text-body-lg font-bold text-primary">Admin ServisKu</p>
<p class="text-on-surface-variant text-label-sm">Service Manager</p>
<div class="flex items-center gap-1.5 mt-1">
<span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
<span class="text-[10px] text-green-500 font-bold uppercase tracking-wider">Online</span>
</div>
</div>
</div>
<nav class="flex flex-col">
<a class="flex items-center gap-4 text-primary font-bold border-l-4 border-primary bg-primary/10 px-6 py-4 cursor-pointer transition-colors duration-200" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-body-md text-body-md">Dashboard</span>
</a>
<a class="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 cursor-pointer transition-colors duration-200" href="#">
<span class="material-symbols-outlined">build</span>
<span class="font-body-md text-body-md">Servis</span>
</a>
<a class="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 cursor-pointer transition-colors duration-200" href="#">
<span class="material-symbols-outlined">stars</span>
<span class="font-body-md text-body-md">Poin</span>
</a>
<a class="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 cursor-pointer transition-colors duration-200" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-body-md text-body-md">Pengaturan</span>
</a>
</nav>
</aside>
<!-- Main Content -->
<main class="md:pl-[280px] pt-20 pb-24 px-container-margin min-h-screen">
<!-- Greeting Section -->
<section class="mb-8">
<h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Selamat Datang, Alan! 👋</h2>
<p class="text-on-surface-variant font-body-md mt-1">Pantau status servis perangkat elektronik Anda hari ini.</p>
</section>
<!-- Bento Stats Grid -->
<section class="grid grid-cols-2 lg:grid-cols-4 gap-gutter mb-10">
<div class="stat-card-glow rounded-xl p-card-padding bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed flex flex-col justify-between h-32 transform transition-transform hover:scale-[1.02]">
<span class="text-label-sm font-bold uppercase tracking-wider opacity-80">Total Servis</span>
<span class="font-headline-lg text-headline-xl">12</span>
</div>
<div class="stat-card-glow rounded-xl p-card-padding bg-gradient-to-br from-tertiary to-tertiary-container text-on-tertiary-container flex flex-col justify-between h-32 transform transition-transform hover:scale-[1.02]">
<span class="text-label-sm font-bold uppercase tracking-wider opacity-80">Dalam Proses</span>
<span class="font-headline-lg text-headline-xl">5</span>
</div>
<div class="stat-card-glow rounded-xl p-card-padding bg-gradient-to-br from-secondary to-secondary-container text-on-secondary-container flex flex-col justify-between h-32 transform transition-transform hover:scale-[1.02]">
<span class="text-label-sm font-bold uppercase tracking-wider opacity-80">Selesai</span>
<span class="font-headline-lg text-headline-xl">7</span>
</div>
<div class="stat-card-glow rounded-xl p-card-padding bg-gradient-to-br from-[#818cf8] to-[#4f46e5] text-white flex flex-col justify-between h-32 transform transition-transform hover:scale-[1.02]">
<span class="text-label-sm font-bold uppercase tracking-wider opacity-80">Loyalty Poin</span>
<span class="font-headline-lg text-headline-xl">850</span>
</div>
</section>
<!-- Search Bar -->
<div class="mb-6 group">
<div class="relative flex items-center">
<span class="material-symbols-outlined absolute left-4 text-on-surface-variant group-focus-within:text-primary transition-colors">search</span>
<input class="w-full bg-surface-container-low border border-white/10 rounded-xl pl-12 pr-4 py-3 text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/50" placeholder="Cari nomor nota atau perangkat..." type="text"/>
</div>
</div>
<!-- Recent Services List -->
<section>
<div class="flex justify-between items-end mb-4">
<h3 class="font-headline-md text-body-lg font-bold">Servis Terbaru</h3>
<button class="text-primary font-label-md hover:underline">Lihat Semua</button>
</div>
<div class="space-y-4">
<!-- Item 1 -->
<div class="glass-card rounded-xl p-card-padding flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/5 transition-all">
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[28px]">smartphone</span>
</div>
<div>
<h4 class="font-body-md font-bold text-on-surface group-hover:text-primary transition-colors">iPhone 13 Pro</h4>
<p class="text-on-surface-variant text-body-sm">Ganti LCD Retina XDR</p>
</div>
</div>
<div class="flex items-center justify-between md:justify-end gap-6">
<div class="text-right hidden md:block">
<p class="text-label-sm text-on-surface-variant">Tanggal Masuk</p>
<p class="text-body-sm font-medium">22 Jul 2026</p>
</div>
<span class="px-3 py-1 rounded-full bg-tertiary/20 text-tertiary text-label-sm font-bold uppercase tracking-wider border border-tertiary/10">Dalam Proses</span>
<button class="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-colors">
<span class="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
<!-- Item 2 -->
<div class="glass-card rounded-xl p-card-padding flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/5 transition-all">
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[28px]">laptop_mac</span>
</div>
<div>
<h4 class="font-body-md font-bold text-on-surface group-hover:text-primary transition-colors">Laptop ASUS ROG</h4>
<p class="text-on-surface-variant text-body-sm">Ganti Keyboard Mechanical</p>
</div>
</div>
<div class="flex items-center justify-between md:justify-end gap-6">
<div class="text-right hidden md:block">
<p class="text-label-sm text-on-surface-variant">Tanggal Masuk</p>
<p class="text-body-sm font-medium">20 Jul 2026</p>
</div>
<span class="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-label-sm font-bold uppercase tracking-wider border border-green-500/10">Selesai</span>
<button class="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-colors">
<span class="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
<!-- Loyalty Teaser (Glassmorphic) -->
<div class="relative overflow-hidden rounded-xl p-8 mt-8 glass-card border-primary/20">

<div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h3 class="font-headline-md text-headline-md text-white">Klaim Hadiah Anda</h3>
<p class="text-white/70 font-body-md max-w-md mt-2">Kumpulkan poin dari setiap servis dan tukarkan dengan diskon sparepart atau aksesori premium.</p>
</div>
<button class="bg-primary text-on-primary font-bold px-8 py-3 rounded-full active-glow active:scale-95 transition-all flex items-center gap-2">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">redeem</span>
                            Tukar Poin
                        </button>
</div>
</div>
</div>
</section>
</main>
<!-- FAB -->
<button class="fixed bottom-20 right-6 z-50 md:bottom-8 md:right-8 bg-primary text-on-primary-container px-6 py-4 rounded-full shadow-[0_0_20px_rgba(185,195,255,0.4)] flex items-center gap-2 hover:scale-105 active:scale-95 transition-all font-bold">
<span class="material-symbols-outlined">add</span>
<span>Tambah Servis</span>
</button>
<!-- Bottom Navigation (Mobile Only) -->
<nav class="fixed bottom-0 w-full z-50 md:hidden bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_20px_rgba(185,195,255,0.1)] flex justify-around items-center h-16 px-4 pb-safe">
<a class="flex flex-col items-center justify-center text-primary font-bold after:content-[''] after:w-1 after:h-1 after:bg-primary after:rounded-full after:mt-1 after:shadow-[0_0_10px_rgba(185,195,255,0.8)] active:scale-90 transition-transform" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">dashboard</span>
<span class="font-label-sm text-label-sm">Dashboard</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 active:scale-90 transition-transform" href="#">
<span class="material-symbols-outlined">build</span>
<span class="font-label-sm text-label-sm">Servis</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 active:scale-90 transition-transform" href="#">
<span class="material-symbols-outlined">stars</span>
<span class="font-label-sm text-label-sm">Poin</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 active:scale-90 transition-transform" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-label-sm text-label-sm">Pengaturan</span>
</a>
</nav>
<script>
        // Simple scroll effect for TopAppBar
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 20) {
                header.classList.add('shadow-md', 'bg-surface/95');
            } else {
                header.classList.remove('shadow-md', 'bg-surface/95');
            }
        });

        // Search bar micro-interaction
        const searchInput = document.querySelector('input[type="text"]');
        searchInput.addEventListener('focus', () => {
            searchInput.parentElement.classList.add('scale-[1.01]');
        });
        searchInput.addEventListener('blur', () => {
            searchInput.parentElement.classList.remove('scale-[1.01]');
        });
    </script>
</body></html>