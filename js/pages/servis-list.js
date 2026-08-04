<!DOCTYPE html>

<html class="dark" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0, viewport-fit=cover" name="viewport"/>
<title>Daftar Servis - ServisKu</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&amp;family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
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
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
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
          },
        },
      }
    </script>
<style>
        body {
            background-color: #0f0f1a;
            color: #e3e1eb;
            font-family: 'Inter', sans-serif;
            -webkit-tap-highlight-color: transparent;
        }
        .glass-card {
            background: rgba(26, 26, 46, 0.6);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .primary-glow {
            box-shadow: 0 0 20px rgba(185, 195, 255, 0.15);
        }
        .active-tab-glow {
            box-shadow: 0 0 15px rgba(185, 195, 255, 0.4);
        }
        /* Custom scrollbar for clean UI */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #34343c; border-radius: 10px; }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="min-h-screen pb-24">
<!-- Top App Bar -->
<header class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-sm flex justify-between items-center px-container-margin h-16">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
<span class="material-symbols-outlined text-primary text-xl">manage_accounts</span>
</div>
<h1 class="font-headline-md text-headline-md font-bold text-primary dark:text-primary">Daftar Servis</h1>
</div>
<div class="flex items-center gap-4">
<button class="p-2 rounded-full hover:bg-white/5 transition-colors active:scale-95 duration-200">
<span class="material-symbols-outlined text-on-surface-variant">search</span>
</button>
<button class="p-2 rounded-full hover:bg-white/5 transition-colors active:scale-95 duration-200 relative">
<span class="material-symbols-outlined text-on-surface-variant">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_#b9c3ff]"></span>
</button>
</div>
</header>
<!-- Navigation Drawer (Desktop) -->
<nav class="fixed left-0 top-0 h-full w-[280px] hidden md:block bg-surface-container border-r border-white/10 z-40 flex flex-col pt-20">
<div class="px-6 mb-8">
<div class="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
<div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
<span class="material-symbols-outlined text-on-secondary-container">engineering</span>
</div>
<div>
<p class="font-label-md text-on-surface font-bold">Admin ServisKu</p>
<p class="text-xs text-on-surface-variant">Service Manager</p>
</div>
</div>
</div>
<div class="space-y-1">
<a class="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 transition-all cursor-pointer" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-body-md">Dashboard</span>
</a>
<a class="flex items-center gap-4 text-primary font-bold border-l-4 border-primary bg-primary/10 px-6 py-4 transition-all cursor-pointer" href="#">
<span class="material-symbols-outlined">build</span>
<span class="font-body-md">Servis</span>
</a>
<a class="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 transition-all cursor-pointer" href="#">
<span class="material-symbols-outlined">stars</span>
<span class="font-body-md">Poin</span>
</a>
<a class="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 transition-all cursor-pointer" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-body-md">Pengaturan</span>
</a>
</div>
</nav>
<!-- Main Content Canvas -->
<main class="md:pl-[280px] pt-20 px-container-margin transition-all">
<!-- Filters / Status Chips -->
<section class="mt-4 mb-8 overflow-x-auto no-scrollbar py-2">
<div class="flex gap-3 min-w-max">
<button class="px-5 py-2 rounded-full bg-primary text-on-primary text-label-md active-tab-glow font-bold transition-all">
                    Semua
                </button>
<button class="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-on-surface-variant text-label-md hover:bg-white/10 transition-all">
                    Menunggu
                </button>
<button class="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-on-surface-variant text-label-md hover:bg-white/10 transition-all">
                    Dalam Proses
                </button>
<button class="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-on-surface-variant text-label-md hover:bg-white/10 transition-all">
                    Selesai
                </button>
</div>
</section>
<!-- Service List Bento Grid -->
<section class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-gutter">
<!-- Item 1: iPhone 13 Pro (Menunggu Approval/Kuning) -->
<div class="glass-card rounded-xl p-card-padding group hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
<!-- Background ambient glow -->
<div class="absolute -top-10 -right-10 w-24 h-24 bg-tertiary/5 rounded-full blur-3xl group-hover:bg-tertiary/10 transition-colors"></div>
<div class="flex justify-between items-start mb-4">
<div class="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center border border-white/10">
<span class="material-symbols-outlined text-primary text-3xl">smartphone</span>
</div>
<div class="flex flex-col items-end gap-2">
<span class="px-3 py-1 rounded-full border border-tertiary/30 bg-tertiary/10 text-tertiary text-[10px] font-bold tracking-wider uppercase">
                            Menunggu Approval
                        </span>
<button class="p-1 rounded-lg hover:bg-white/10 text-on-surface-variant">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
<div class="space-y-4">
<div>
<h3 class="font-headline-md text-lg font-bold text-on-surface">iPhone 13 Pro</h3>
<p class="text-on-surface-variant font-label-sm">Cust: Ani Susanti</p>
</div>
<div class="p-3 rounded-lg bg-white/5 border border-white/5 space-y-1">
<p class="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Keluhan</p>
<p class="text-body-sm text-on-surface">Ganti LCD (Layar Retak &amp; Ghost Touch)</p>
</div>
<div class="flex justify-between items-center pt-2">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-on-surface-variant text-sm">schedule</span>
<span class="text-[12px] text-on-surface-variant">12 Menit yang lalu</span>
</div>
<button class="text-primary text-label-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                            Detail <span class="material-symbols-outlined text-sm">arrow_forward_ios</span>
</button>
</div>
</div>
</div>
<!-- Item 2: MacBook Pro (Selesai/Hijau) -->
<div class="glass-card rounded-xl p-card-padding group hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
<div class="absolute -top-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
<div class="flex justify-between items-start mb-4">
<div class="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center border border-white/10">
<span class="material-symbols-outlined text-primary text-3xl">laptop_mac</span>
</div>
<div class="flex flex-col items-end gap-2">
<span class="px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-[10px] font-bold tracking-wider uppercase">
                            Selesai
                        </span>
<button class="p-1 rounded-lg hover:bg-white/10 text-on-surface-variant">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
<div class="space-y-4">
<div>
<h3 class="font-headline-md text-lg font-bold text-on-surface">MacBook Pro</h3>
<p class="text-on-surface-variant font-label-sm">Cust: Budi Hartono</p>
</div>
<div class="p-3 rounded-lg bg-white/5 border border-white/5 space-y-1">
<p class="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Keluhan</p>
<p class="text-body-sm text-on-surface">Ganti Baterai (Battery Health &lt; 70%)</p>
</div>
<div class="flex justify-between items-center pt-2">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-green-400 text-sm">check_circle</span>
<span class="text-[12px] text-on-surface-variant">2 Jam yang lalu</span>
</div>
<button class="text-primary text-label-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                            Invoice <span class="material-symbols-outlined text-sm">receipt_long</span>
</button>
</div>
</div>
</div>
<!-- Item 3: Samsung S22 (Dalam Proses/Biru) -->
<div class="glass-card rounded-xl p-card-padding group hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
<div class="flex justify-between items-start mb-4">
<div class="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center border border-white/10">
<span class="material-symbols-outlined text-primary text-3xl">smartphone</span>
</div>
<div class="flex flex-col items-end gap-2">
<span class="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-wider uppercase">
                            Dalam Proses
                        </span>
<button class="p-1 rounded-lg hover:bg-white/10 text-on-surface-variant">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
<div class="space-y-4">
<div>
<h3 class="font-headline-md text-lg font-bold text-on-surface">Samsung S22 Ultra</h3>
<p class="text-on-surface-variant font-label-sm">Cust: Rendi Wijaya</p>
</div>
<div class="p-3 rounded-lg bg-white/5 border border-white/5 space-y-1">
<p class="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Keluhan</p>
<p class="text-body-sm text-on-surface">Mati Total (Kena Air)</p>
</div>
<div class="flex justify-between items-center pt-2">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-blue-400 text-sm animate-spin">refresh</span>
<span class="text-[12px] text-on-surface-variant">Sedang Dikerjakan</span>
</div>
<button class="text-primary text-label-sm font-bold flex items-center gap-1">
                            Lacak <span class="material-symbols-outlined text-sm">my_location</span>
</button>
</div>
</div>
</div>
<!-- Empty State / Placeholder Card -->
<div class="border-2 border-dashed border-white/10 rounded-xl p-card-padding flex flex-col items-center justify-center text-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer group">
<div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
<span class="material-symbols-outlined text-on-surface-variant group-hover:text-primary">add</span>
</div>
<p class="text-label-md font-bold text-on-surface">Tambah Servis Baru</p>
<p class="text-[10px] text-on-surface-variant uppercase mt-1">Scan QR atau Input Manual</p>
</div>
</section>
<!-- Technical Stats Section (Atmospheric) -->
<section class="mt-12 mb-8">
<h2 class="font-headline-md text-headline-md text-on-surface mb-6">Efisiensi Workshop</h2>
<div class="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
<div class="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10">
<p class="text-label-sm text-on-surface-variant mb-2">Total Hari Ini</p>
<p class="font-headline-lg text-headline-lg text-on-surface">24</p>
</div>
<div class="p-6 rounded-2xl bg-gradient-to-br from-tertiary/20 to-orange-500/20 border border-white/10">
<p class="text-label-sm text-on-surface-variant mb-2">Tertunda</p>
<p class="font-headline-lg text-headline-lg text-on-surface">5</p>
</div>
<div class="p-6 rounded-2xl bg-surface-container-high border border-white/10">
<p class="text-label-sm text-on-surface-variant mb-2">Suku Cadang</p>
<p class="font-headline-lg text-headline-lg text-green-400">98%</p>
</div>
<div class="p-6 rounded-2xl bg-surface-container-high border border-white/10">
<p class="text-label-sm text-on-surface-variant mb-2">Avg. Time</p>
<p class="font-headline-lg text-headline-lg text-on-surface">45m</p>
</div>
</div>
</section>
</main>
<!-- Bottom Nav Bar (Mobile) -->
<nav class="fixed bottom-0 w-full z-50 md:hidden bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_20px_rgba(185,195,255,0.1)] flex justify-around items-center h-16 px-4 pb-safe">
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 active:scale-90 transition-transform" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-label-sm text-label-sm">Dashboard</span>
</a>
<a class="flex flex-col items-center justify-center text-primary font-bold after:content-[''] after:w-1 after:h-1 after:bg-primary after:rounded-full after:mt-1 after:shadow-[0_0_10px_rgba(185,195,255,0.8)] active:scale-90 transition-transform" href="#">
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
<!-- Floating Action Button -->
<button class="fixed bottom-20 right-6 w-14 h-14 bg-primary text-on-primary rounded-2xl shadow-[0_0_20px_rgba(185,195,255,0.4)] flex items-center justify-center active:scale-90 transition-all z-40 md:bottom-10">
<span class="material-symbols-outlined text-3xl">add_box</span>
</button>
<script>
        // Micro-interaction: Active state for filter chips
        const filterButtons = document.querySelectorAll('section button');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => {
                    b.classList.remove('bg-primary', 'text-on-primary', 'active-tab-glow', 'font-bold');
                    b.classList.add('border', 'border-white/10', 'bg-white/5', 'text-on-surface-variant');
                });
                btn.classList.add('bg-primary', 'text-on-primary', 'active-tab-glow', 'font-bold');
                btn.classList.remove('border', 'border-white/10', 'bg-white/5', 'text-on-surface-variant');
            });
        });

        // Atmospheric parallax on scroll
        window.addEventListener('scroll', () => {
            const scrollVal = window.scrollY;
            document.querySelectorAll('.glass-card').forEach((card, index) => {
                const speed = (index + 1) * 0.02;
                card.style.transform = `translateY(${scrollVal * speed * -0.5}px)`;
            });
        });
    </script>
</body></html>