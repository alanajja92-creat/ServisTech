<!DOCTYPE html>

<html class="dark" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ServisKu - Pengaturan</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        :root {
            --glass-bg: rgba(26, 26, 46, 0.8);
            --glass-border: rgba(255, 255, 255, 0.1);
        }
        body {
            background-color: #0f0f1a;
            color: #e3e1eb;
            font-family: 'Inter', sans-serif;
        }
        .glass-card {
            background: var(--glass-bg);
            backdrop-filter: blur(12px);
            border: 1px solid var(--glass-border);
        }
        .primary-glow {
            box-shadow: 0 0 20px rgba(185, 195, 255, 0.2);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        /* Custom Toggle Switch Style */
        .toggle-checkbox:checked {
            right: 0;
            border-color: #b9c3ff;
            background-color: #b9c3ff;
        }
        .toggle-checkbox:checked + .toggle-label {
            background-color: #3c55bf;
        }
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
      min-height: max(884px, 100dvh);
    }
  </style>
</head>
<body class="bg-background text-on-background selection:bg-primary selection:text-on-primary">
<!-- Desktop Sidebar -->
<aside class="fixed left-0 top-0 h-full w-[280px] hidden md:flex flex-col bg-surface-container border-r border-white/10 pt-20 z-40">
<nav class="flex flex-col gap-1">
<a class="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 transition-all" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="font-body-md text-body-md">Dashboard</span>
</a>
<a class="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 transition-all" href="#">
<span class="material-symbols-outlined" data-icon="build">build</span>
<span class="font-body-md text-body-md">Servis</span>
</a>
<a class="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 transition-all" href="#">
<span class="material-symbols-outlined" data-icon="stars">stars</span>
<span class="font-body-md text-body-md">Poin</span>
</a>
<a class="flex items-center gap-4 text-primary font-bold border-l-4 border-primary bg-primary/10 px-6 py-4 transition-all" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="font-body-md text-body-md">Pengaturan</span>
</a>
</nav>
</aside>
<!-- Top AppBar -->
<header class="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-sm">
<div class="flex items-center gap-4">
<h1 class="font-headline-md text-headline-md font-bold text-primary">ServisKu</h1>
</div>
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-primary p-2 hover:bg-white/5 rounded-full transition-colors active:scale-95 duration-200" data-icon="notifications">notifications</button>
<div class="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border border-primary/20">
<img class="w-full h-full object-cover" data-alt="A high-quality professional studio portrait of a modern Indonesian technician in a clean, high-tech electronics lab. The lighting is crisp and blue-toned, emphasizing technical precision and trustworthiness. The person has a friendly but professional expression, styled with modern business-casual attire against a background of softly blurred futuristic hardware." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqwCNjU28RRlo-Xt3AgkA_cVmnMGCHj2gSFDRDEeBnnjJcDsZ_xsQLdWZq1h5V_aL-AGYBbaIQflwu4UEXxjSZmptF9_cylf_DMl2SODJCY0b2tjSSIVUGdqmldJvrb5xWFiIGQpArC9nIgLw9fo2kfuWDkboMi92C815e0sGZw5MUEzcxMMcfJbqgFuuZ1L2NWP2dCAgCsAlo0riSbN-do8KhhENtztOmu_WjNewFaj22vhW8TSfsZBn4kVmYh-rlUluRwz_O_eg"/>
</div>
</div>
</header>
<main class="pt-24 pb-32 md:pb-12 md:pl-[304px] px-6 max-w-5xl">
<div class="space-y-8">
<!-- Profile Section -->
<section class="glass-card rounded-xl p-6 relative overflow-hidden">

<div class="relative flex flex-col md:flex-row items-center md:items-start gap-6">
<div class="relative">
<div class="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-primary/30 p-1 bg-surface">
<div class="w-full h-full rounded-full overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A professional close-up avatar of Alan Kurniawan, a tech service manager with a confident and approachable look. The image features cinematic backlighting with a cool primary blue glow, set in a futuristic workspace with blurred electronics in the background. The aesthetic is clean, professional, and sophisticated." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS-TbwrtbFWXwOV56imbSOi3FvRR7onPLtIQpS4Ml4lpGEsPUYXHeRgC1MUTokS34chzg6N6niNbpK_fvYTC_p1ecGcz_JF34PEfWRd0clKeN2-ri6atGPE0ykSFefjHYqSSml55khBfKja5nvtzBt41r1S-AZ3khDgNO5oEGe8bLzdLT80y0I_DDF-AxGKHZeLeke9WrE2ks0naqmRSfWcLl8L99CqpWY1O0XYKLVDl2jJOcmXqtn3j1IiRB02fRWFygiB9WzUco"/>
</div>
</div>
<button class="absolute bottom-1 right-1 bg-primary text-on-primary p-2 rounded-full shadow-lg active:scale-90 transition-transform">
<span class="material-symbols-outlined text-[18px]" data-icon="edit">edit</span>
</button>
</div>
<div class="flex-1 text-center md:text-left space-y-1">
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Alan Kurniawan</h2>
<p class="font-body-md text-on-surface-variant">alankurniawan@servisku.tech</p>
<div class="pt-4 flex justify-center md:justify-start">
<button class="px-6 py-2.5 bg-primary/10 border border-primary text-primary font-label-md text-label-md rounded-lg hover:bg-primary/20 transition-all primary-glow active:scale-95">
                                Edit Profil
                            </button>
</div>
</div>
</div>
</section>
<!-- Preferences & Account Bento Grid -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
<!-- Preferences Card -->
<div class="glass-card rounded-xl p-6 flex flex-col gap-6">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary" data-icon="tune">tune</span>
<h3 class="font-headline-md text-headline-md text-on-surface">Preferensi</h3>
</div>
<div class="space-y-4">
<!-- Dark Mode Toggle -->
<div class="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="dark_mode">dark_mode</span>
<div>
<p class="font-label-md text-label-md text-on-surface">Mode Gelap</p>
<p class="text-[11px] text-on-surface-variant">Hemat baterai &amp; kurangi lelah mata</p>
</div>
</div>
<div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none right-4 checked:right-0 transition-all duration-300" id="darkmode" name="darkmode" type="checkbox"/>
<label class="toggle-label block overflow-hidden h-6 rounded-full bg-surface-container-highest cursor-pointer transition-colors duration-300" for="darkmode"></label>
</div>
</div>
<!-- Notifications Toggle -->
<div class="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface-variant" data-icon="notifications_active">notifications_active</span>
<div>
<p class="font-label-md text-label-md text-on-surface">Notifikasi</p>
<p class="text-[11px] text-on-surface-variant">Update status servis &amp; promo</p>
</div>
</div>
<div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none right-4 checked:right-0 transition-all duration-300" id="notif" name="notif" type="checkbox"/>
<label class="toggle-label block overflow-hidden h-6 rounded-full bg-surface-container-highest cursor-pointer transition-colors duration-300" for="notif"></label>
</div>
</div>
<!-- Language Dropdown -->
<div class="flex flex-col gap-2">
<label class="font-label-sm text-label-sm text-on-surface-variant px-1">Pilih Bahasa</label>
<div class="relative">
<select class="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 appearance-none focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-on-surface font-body-md text-body-md">
<option value="id">Bahasa Indonesia</option>
<option value="en">English (US)</option>
<option value="jp">日本語 (Japanese)</option>
</select>
<span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant" data-icon="expand_more">expand_more</span>
</div>
</div>
</div>
</div>
<!-- Account Settings Card -->
<div class="glass-card rounded-xl p-6 flex flex-col gap-6">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary" data-icon="manage_accounts">manage_accounts</span>
<h3 class="font-headline-md text-headline-md text-on-surface">Akun &amp; Data</h3>
</div>
<div class="space-y-2">
<a class="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group active:scale-[0.98]" href="#">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-primary" data-icon="lock_reset">lock_reset</span>
</div>
<span class="font-body-md text-body-md text-on-surface">Ubah Password</span>
</div>
<span class="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
</a>
<a class="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group active:scale-[0.98]" href="#">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-lg bg-tertiary-container/20 flex items-center justify-center">
<span class="material-symbols-outlined text-tertiary" data-icon="cloud_sync">cloud_sync</span>
</div>
<span class="font-body-md text-body-md text-on-surface">Backup Data</span>
</div>
<span class="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
</a>
<a class="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group active:scale-[0.98]" href="#">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-lg bg-secondary-container/20 flex items-center justify-center">
<span class="material-symbols-outlined text-secondary" data-icon="file_export">file_export</span>
</div>
<span class="font-body-md text-body-md text-on-surface">Ekspor Data</span>
</div>
<span class="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
</a>
</div>
<div class="mt-auto pt-6 border-t border-white/5">
<button class="w-full flex items-center justify-center gap-3 p-4 rounded-xl bg-error/10 border border-error/30 text-error font-headline-md text-headline-md hover:bg-error/20 transition-all active:scale-95 group">
<span class="material-symbols-outlined group-hover:-translate-x-1 transition-transform" data-icon="logout">logout</span>
                            Keluar (Logout)
                        </button>
</div>
</div>
</div>
<!-- Additional Help Section -->
<div class="glass-card rounded-xl p-6 border-l-4 border-l-primary">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-primary text-4xl" data-icon="help_outline">help_outline</span>
<div>
<h4 class="font-headline-md text-headline-md text-on-surface">Butuh Bantuan?</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Pusat bantuan kami tersedia 24/7 untuk kendala teknis.</p>
</div>
<button class="ml-auto px-4 py-2 bg-surface border border-white/10 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors">Hubungi Support</button>
</div>
</div>
</div>
</main>
<!-- Bottom Navigation (Mobile Only) -->
<nav class="fixed bottom-0 w-full z-50 md:hidden bg-surface/80 backdrop-blur-xl border-t border-white/10 flex justify-around items-center h-16 px-4 pb-safe shadow-[0_-4px_20px_rgba(185,195,255,0.1)]">
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 transition-transform active:scale-90" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="font-label-sm text-label-sm">Dashboard</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 transition-transform active:scale-90" href="#">
<span class="material-symbols-outlined" data-icon="build">build</span>
<span class="font-label-sm text-label-sm">Servis</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 transition-transform active:scale-90" href="#">
<span class="material-symbols-outlined" data-icon="stars">stars</span>
<span class="font-label-sm text-label-sm">Poin</span>
</a>
<a class="flex flex-col items-center justify-center text-primary font-bold transition-transform active:scale-90 after:content-[''] after:w-1 after:h-1 after:bg-primary after:rounded-full after:mt-1 after:shadow-[0_0_10px_rgba(185,195,255,0.8)]" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="font-label-sm text-label-sm">Pengaturan</span>
</a>
</nav>
<script>
        // Simple Interaction Script
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('click', (e) => {
                if(el.getAttribute('href') === '#') e.preventDefault();
            });
        });

        // Toggle Switch Listeners
        document.getElementById('darkmode')?.addEventListener('change', function() {
            if(!this.checked) {
                document.documentElement.classList.remove('dark');
            } else {
                document.documentElement.classList.add('dark');
            }
        });
    </script>
</body></html>