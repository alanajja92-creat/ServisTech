<!DOCTYPE html>

<html class="dark" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ServisKu - Poin &amp; Rewards</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Shared Tailwind Config -->
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
        }
        .glass-card {
            background: rgba(26, 26, 46, 0.6);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .hero-glow {
            box-shadow: 0 0 40px rgba(185, 195, 255, 0.15);
        }
        .mesh-bg {
            background: radial-gradient(at 0% 0%, rgba(60, 85, 191, 0.15) 0px, transparent 50%),
                        radial-gradient(at 100% 100%, rgba(185, 195, 255, 0.1) 0px, transparent 50%);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="font-body-md text-body-md selection:bg-primary/30">
<!-- Desktop Sidebar (Shared Component) -->
<aside class="fixed left-0 top-0 h-full w-[280px] hidden md:flex flex-col pt-20 bg-surface-container dark:bg-surface-container border-r border-white/10 z-50">
<div class="px-6 mb-8">
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
<span class="material-symbols-outlined">account_circle</span>
</div>
<div>
<h3 class="font-bold text-on-surface">Admin ServisKu</h3>
<p class="text-xs text-on-surface-variant">Service Manager</p>
</div>
</div>
</div>
<nav class="flex flex-col">
<a class="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 transition-all" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</a>
<a class="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 transition-all" href="#">
<span class="material-symbols-outlined">build</span>
<span>Servis</span>
</a>
<a class="flex items-center gap-4 text-primary font-bold border-l-4 border-primary bg-primary/10 px-6 py-4" href="#">
<span class="material-symbols-outlined">stars</span>
<span>Poin</span>
</a>
<a class="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 transition-all" href="#">
<span class="material-symbols-outlined">settings</span>
<span>Pengaturan</span>
</a>
</nav>
</aside>
<!-- Top App Bar (Shared Component) -->
<header class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-sm flex justify-between items-center px-container-margin h-16">
<div class="flex items-center gap-3">
<span class="font-headline-md text-headline-md font-bold text-primary dark:text-primary">ServisKu</span>
</div>
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-primary hover:bg-white/5 transition-colors p-2 rounded-full active:scale-95 duration-200">notifications</button>
<div class="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container text-xs font-bold md:hidden">AS</div>
</div>
</header>
<main class="md:ml-[280px] pt-24 pb-32 px-container-margin min-h-screen mesh-bg">
<div class="max-w-4xl mx-auto space-y-8">
<!-- Hero Point Card -->
<section class="relative group">
<div class="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<div class="relative glass-card rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 hero-glow overflow-hidden">
<!-- Background Decoration -->
<div class="absolute -right-10 -top-10 opacity-10">
<span class="material-symbols-outlined !text-[160px] text-primary" style="font-variation-settings: 'FILL' 1;">stars</span>
</div>
<div class="flex-1 space-y-4 relative z-10">
<div class="flex items-center gap-2 text-primary">
<span class="material-symbols-outlined">verified</span>
<span class="font-label-md text-label-md tracking-widest uppercase">Level: Silver</span>
</div>
<div>
<p class="text-on-surface-variant font-body-md">Total Poin</p>
<div class="flex items-baseline gap-2">
<span class="material-symbols-outlined text-tertiary !text-4xl" style="font-variation-settings: 'FILL' 1;">stars</span>
<h1 class="font-headline-xl text-headline-xl md:text-[64px] text-on-surface">850</h1>
</div>
</div>
</div>
<div class="relative z-10 w-full md:w-auto">
<button class="w-full md:w-auto px-8 py-4 bg-primary text-on-primary font-bold rounded-xl shadow-[0_0_20px_rgba(185,195,255,0.3)] hover:shadow-[0_0_30px_rgba(185,195,255,0.5)] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2">
<span class="material-symbols-outlined">redeem</span>
                            Redeem Rewards
                        </button>
</div>
</div>
</section>
<!-- Info & Bento Content Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<!-- Cara Mendapatkan Poin -->
<section class="glass-card rounded-2xl p-card-padding space-y-6">
<div class="flex items-center gap-3">
<div class="p-2 bg-primary/10 rounded-lg text-primary">
<span class="material-symbols-outlined">info</span>
</div>
<h2 class="font-headline-md text-headline-md-mobile md:text-headline-md">Cara Mendapatkan Poin</h2>
</div>
<ul class="space-y-4">
<li class="flex items-start gap-3">
<div class="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined !text-xs text-primary">add</span>
</div>
<div>
<p class="font-bold text-on-surface">Servis Perangkat</p>
<p class="text-body-sm text-on-surface-variant">Dapatkan 50-200 poin untuk setiap unit servis yang selesai.</p>
</div>
</li>
<li class="flex items-start gap-3">
<div class="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined !text-xs text-primary">add</span>
</div>
<div>
<p class="font-bold text-on-surface">Review Layanan</p>
<p class="text-body-sm text-on-surface-variant">Tulis ulasan setelah servis selesai dan dapatkan 20 poin.</p>
</div>
</li>
<li class="flex items-start gap-3">
<div class="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined !text-xs text-primary">add</span>
</div>
<div>
<p class="font-bold text-on-surface">Referral Teman</p>
<p class="text-body-sm text-on-surface-variant">Gunakan kode referral kamu untuk mendapatkan 100 poin bonus.</p>
</div>
</li>
</ul>
</section>
<!-- Status Progress Card -->
<section class="glass-card rounded-2xl p-card-padding flex flex-col justify-between">
<div class="space-y-2">
<div class="flex justify-between items-end">
<h3 class="font-headline-md text-headline-md-mobile md:text-headline-md">Kejar Gold</h3>
<span class="text-on-surface-variant text-body-sm">150 poin lagi</span>
</div>
<div class="w-full bg-white/5 h-3 rounded-full overflow-hidden">
<div class="bg-gradient-to-r from-primary to-secondary w-[85%] h-full rounded-full shadow-[0_0_10px_rgba(185,195,255,0.4)]"></div>
</div>
</div>
<div class="mt-8 p-4 bg-tertiary/10 border border-tertiary/20 rounded-xl flex items-center gap-4">
<span class="material-symbols-outlined text-tertiary !text-3xl">workspace_premium</span>
<p class="text-body-sm text-tertiary">Upgrade ke Gold untuk mendapatkan cashback servis 5% lebih banyak!</p>
</div>
</section>
</div>
<!-- Transaction History -->
<section class="glass-card rounded-2xl p-card-padding space-y-6">
<div class="flex items-center justify-between">
<h2 class="font-headline-md text-headline-md-mobile md:text-headline-md">Riwayat Poin</h2>
<button class="text-primary text-label-md hover:underline">Lihat Semua</button>
</div>
<div class="divide-y divide-white/5">
<!-- History Item 1 -->
<div class="py-4 flex items-center justify-between group cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center text-success" style="background-color: rgba(76, 175, 80, 0.1); color: #81c784;">
<span class="material-symbols-outlined">add_circle</span>
</div>
<div>
<p class="font-bold text-on-surface">Servis iPhone 13</p>
<p class="text-body-sm text-on-surface-variant">12 Okt 2023 • Perbaikan Layar</p>
</div>
</div>
<div class="text-right">
<p class="font-bold text-success" style="color: #81c784;">+100</p>
</div>
</div>
<!-- History Item 2 -->
<div class="py-4 flex items-center justify-between group cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-error/20 flex items-center justify-center text-error">
<span class="material-symbols-outlined">remove_circle</span>
</div>
<div>
<p class="font-bold text-on-surface">Redeem Voucher</p>
<p class="text-body-sm text-on-surface-variant">05 Okt 2023 • Voucher Diskon 20k</p>
</div>
</div>
<div class="text-right">
<p class="font-bold text-error">-200</p>
</div>
</div>
<!-- History Item 3 -->
<div class="py-4 flex items-center justify-between group cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center text-success" style="background-color: rgba(76, 175, 80, 0.1); color: #81c784;">
<span class="material-symbols-outlined">add_circle</span>
</div>
<div>
<p class="font-bold text-on-surface">Bonus Referral</p>
<p class="text-body-sm text-on-surface-variant">28 Sep 2023 • Teman: Budi S.</p>
</div>
</div>
<div class="text-right">
<p class="font-bold text-success" style="color: #81c784;">+100</p>
</div>
</div>
</div>
</section>
</div>
</main>
<!-- Bottom Navigation Bar (Shared Component) -->
<nav class="fixed bottom-0 w-full z-50 md:hidden bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_20px_rgba(185,195,255,0.1)] flex justify-around items-center h-16 px-4 pb-safe">
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 active:scale-90 transition-transform" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-label-sm text-label-sm">Dashboard</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 active:scale-90 transition-transform" href="#">
<span class="material-symbols-outlined">build</span>
<span class="font-label-sm text-label-sm">Servis</span>
</a>
<a class="flex flex-col items-center justify-center text-primary font-bold after:content-[''] after:w-1 after:h-1 after:bg-primary after:rounded-full after:mt-1 after:shadow-[0_0_10px_rgba(185,195,255,0.8)] active:scale-90 transition-transform" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">stars</span>
<span class="font-label-sm text-label-sm">Poin</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 active:scale-90 transition-transform" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-label-sm text-label-sm">Pengaturan</span>
</a>
</nav>
<!-- Background Elements -->
<div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
<div class="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
<div class="absolute bottom-1/4 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]"></div>
</div>
<script>
        // Simple animation logic for point numbers
        document.addEventListener('DOMContentLoaded', () => {
            const pointDisplay = document.querySelector('h1');
            const target = 850;
            let current = 0;
            const increment = target / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    pointDisplay.textContent = target;
                    clearInterval(timer);
                } else {
                    pointDisplay.textContent = Math.floor(current);
                }
            }, 20);
        });
    </script>
</body></html>