<!DOCTYPE html>

<html class="dark" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0, viewport-fit=cover" name="viewport"/>
<title>Tambah Servis Baru - ServisKu</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind Configuration -->
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
          }
        }
      }
    </script>
<style>
        body {
            background-color: #0f0f1a;
            color: #e3e1eb;
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
        }
        .glass-panel {
            background: rgba(26, 26, 46, 0.6);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .input-glow:focus {
            outline: none;
            border-color: #b9c3ff;
            box-shadow: 0 0 10px rgba(185, 195, 255, 0.2);
        }
        .primary-glow {
            box-shadow: 0 0 20px rgba(185, 195, 255, 0.3);
        }
        .form-section-divider {
            height: 1px;
            background: linear-gradient(90deg, rgba(185,195,255,0) 0%, rgba(185,195,255,0.2) 50%, rgba(185,195,255,0) 100%);
        }
        /* Custom scrollbar for textareas */
        textarea::-webkit-scrollbar {
            width: 4px;
        }
        textarea::-webkit-scrollbar-thumb {
            background: #34343c;
            border-radius: 10px;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
</head>
<body class="min-h-screen">
<!-- Top App Bar -->
<header class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-sm flex justify-between items-center px-6 h-16">
<div class="flex items-center gap-4">
<button class="active:scale-95 duration-200 p-2 hover:bg-white/5 rounded-full transition-colors">
<span class="material-symbols-outlined text-primary">arrow_back</span>
</button>
<h1 class="font-headline-md text-headline-md font-bold text-primary">Tambah Servis Baru</h1>
</div>
<div class="md:flex hidden items-center gap-2">
<div class="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center overflow-hidden">
<img class="w-full h-full object-cover" data-alt="A professional technician profile avatar, close-up portrait with a tech-focused laboratory background, neon accents, high-quality digital photography style with deep shadows and vibrant blue highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgVemLAOBHlhuxn9m5jwLYi9ZX4GlFRRF7haY8MHVGXKccN8DUO9dasUjgQD1qdSP9-I0BJdGlZIqGyPFZgdqGRVmwC_LjtCUp-SGwyfeURR0L2gkOOuUlGvWQfuG1hX0cSJankbN7_oUtHu1CEkRrWmLPqVs_64txCZXehTK0XVK3whvYTsZ1c0OiR3jfRSJUXoR10ONWe198w3KoP_ADNk9ySQ3zC-WhzL9_6VFpzvEQKUW_P8BWYMEcEVkITwtF4VTsZ8nQEWU"/>
</div>
</div>
</header>
<!-- Navigation Drawer (Desktop) -->
<aside class="fixed left-0 top-0 h-full w-[280px] hidden md:block bg-surface-container dark:bg-surface-container border-r border-white/10 z-40">
<div class="flex flex-col pt-20 h-full">
<div class="px-6 mb-8">
<div class="flex items-center gap-4 p-4 rounded-xl bg-white/5">
<div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary">engineering</span>
</div>
<div>
<p class="font-bold text-on-surface">Admin ServisKu</p>
<p class="text-xs text-on-surface-variant">Service Manager</p>
</div>
</div>
</div>
<nav class="space-y-1">
<a class="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 transition-all" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-body-md text-body-md">Dashboard</span>
</a>
<a class="flex items-center gap-4 text-primary font-bold border-l-4 border-primary bg-primary/10 px-6 py-4 transition-all" href="#">
<span class="material-symbols-outlined">build</span>
<span class="font-body-md text-body-md">Servis</span>
</a>
<a class="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 transition-all" href="#">
<span class="material-symbols-outlined">stars</span>
<span class="font-body-md text-body-md">Poin</span>
</a>
<a class="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-white/5 transition-all" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-body-md text-body-md">Pengaturan</span>
</a>
</nav>
</div>
</aside>
<!-- Main Content -->
<main class="pt-24 pb-32 md:pl-[300px] px-4 md:pr-8">
<div class="max-w-4xl mx-auto space-y-8">
<!-- Hero Background Element -->
<div class="relative overflow-hidden rounded-3xl h-32 mb-8 md:hidden">

<div class="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] to-transparent"></div>
<div class="absolute bottom-4 left-6">
<h2 class="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Formulir Input</h2>
<p class="text-on-surface-variant text-sm">Lengkapi data untuk memulai perbaikan</p>
</div>
</div>
<form class="space-y-6" id="serviceForm">
<!-- Section 1: Data Pelanggan -->
<section class="glass-panel rounded-2xl p-6 md:p-8 space-y-6">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">person</span>
<h3 class="font-headline-md text-headline-md text-on-surface">Data Pelanggan</h3>
</div>
<div class="form-section-divider"></div>
<div class="grid grid-cols-1 gap-6">
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant flex items-center gap-2" for="customer_name">
                                Nama Pelanggan <span class="text-error">*</span>
</label>
<input class="w-full bg-surface-container-high border border-white/10 rounded-xl px-4 py-3 text-on-surface input-glow transition-all" id="customer_name" placeholder="Masukkan nama lengkap pelanggan" required="" type="text"/>
</div>
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant" for="address">Alamat</label>
<textarea class="w-full bg-surface-container-high border border-white/10 rounded-xl px-4 py-3 text-on-surface input-glow transition-all resize-none" id="address" placeholder="Masukkan alamat lengkap" rows="3"></textarea>
</div>
</div>
</section>
<!-- Section 2: Data Perangkat -->
<section class="glass-panel rounded-2xl p-6 md:p-8 space-y-6">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-tertiary" style="font-variation-settings: 'FILL' 1;">devices</span>
<h3 class="font-headline-md text-headline-md text-on-surface">Data Perangkat</h3>
</div>
<div class="form-section-divider"></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant" for="device_type">Jenis Perangkat</label>
<div class="relative">
<select class="w-full bg-surface-container-high border border-white/10 rounded-xl px-4 py-3 text-on-surface appearance-none input-glow transition-all" id="device_type">
<option value="smartphone">Smartphone</option>
<option value="laptop">Laptop</option>
<option value="tablet">Tablet</option>
<option value="pc">PC Desktop</option>
<option value="other">Lainnya</option>
</select>
<span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
</div>
</div>
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant" for="model">Merk / Model</label>
<input class="w-full bg-surface-container-high border border-white/10 rounded-xl px-4 py-3 text-on-surface input-glow transition-all" id="model" placeholder="Contoh: MacBook Pro 2021" type="text"/>
</div>
<div class="md:col-span-2 space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant flex items-center gap-2" for="complaint">
                                Keluhan <span class="text-error">*</span>
</label>
<textarea class="w-full bg-surface-container-high border border-white/10 rounded-xl px-4 py-3 text-on-surface input-glow transition-all auto-expand" id="complaint" placeholder="Deskripsikan masalah perangkat..." required="" rows="4"></textarea>
</div>
</div>
</section>
<!-- Section 3: Data Servis (Editable) -->
<section class="glass-panel rounded-2xl p-6 md:p-8 space-y-6">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">analytics</span>
<h3 class="font-headline-md text-headline-md text-on-surface">Data Servis</h3>
</div>
<div class="form-section-divider"></div>
<div class="space-y-6">
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant" for="analysis">Analisa Teknis</label>
<textarea class="w-full bg-surface-container-high border border-white/10 rounded-xl px-4 py-3 text-on-surface input-glow transition-all auto-expand" id="analysis" placeholder="Hasil diagnosa awal..." rows="2"></textarea>
</div>
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant" for="measurements">Hasil Pengukuran</label>
<textarea class="w-full bg-surface-container-high border border-white/10 rounded-xl px-4 py-3 text-on-surface input-glow transition-all auto-expand" id="measurements" placeholder="Input tegangan, arus, atau parameter lainnya..." rows="2"></textarea>
</div>
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant" for="components">Komponen Diganti</label>
<div class="p-4 bg-surface-container-low border border-white/5 rounded-xl">
<div class="space-y-2 mb-3" id="component-list">
<div class="flex gap-2">
<input class="flex-grow bg-surface-container-highest border-none rounded-lg px-3 py-2 text-sm text-on-surface" placeholder="Nama Komponen" type="text"/>
<button class="p-2 text-error hover:bg-error/10 rounded-lg" type="button"><span class="material-symbols-outlined text-sm">delete</span></button>
</div>
</div>
<button class="text-primary text-xs font-bold flex items-center gap-1 hover:underline" type="button">
<span class="material-symbols-outlined text-xs">add_circle</span> Tambah Komponen
                                </button>
</div>
</div>
</div>
</section>
<!-- Action Button -->
<div class="flex justify-end pt-4 pb-12">
<button class="w-full md:w-auto px-12 py-4 bg-primary text-on-primary font-bold rounded-2xl transition-all hover:brightness-110 active:scale-95 primary-glow flex items-center justify-center gap-2" type="submit">
<span class="material-symbols-outlined">save</span>
                        SIMPAN
                    </button>
</div>
</form>
</div>
</main>
<!-- Bottom Navigation (Mobile Only) -->
<nav class="fixed bottom-0 w-full z-50 md:hidden bg-surface/80 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_20px_rgba(185,195,255,0.1)] flex justify-around items-center h-16 px-4 pb-safe">
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 transition-transform active:scale-90" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-label-sm text-label-sm">Dashboard</span>
</a>
<a class="flex flex-col items-center justify-center text-primary font-bold after:content-[''] after:w-1 after:h-1 after:bg-primary after:rounded-full after:mt-1 after:shadow-[0_0_10px_rgba(185,195,255,0.8)] transition-transform active:scale-90" href="#">
<span class="material-symbols-outlined">build</span>
<span class="font-label-sm text-label-sm">Servis</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 transition-transform active:scale-90" href="#">
<span class="material-symbols-outlined">stars</span>
<span class="font-label-sm text-label-sm">Poin</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary/80 transition-transform active:scale-90" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-label-sm text-label-sm">Pengaturan</span>
</a>
</nav>
<script>
        // Auto-expanding textareas for better SPA experience
        const textareas = document.querySelectorAll('.auto-expand');
        textareas.forEach(textarea => {
            textarea.addEventListener('input', () => {
                textarea.style.height = 'auto';
                textarea.style.height = textarea.scrollHeight + 'px';
            });
        });

        // Form Submission Interaction
        const form = document.getElementById('serviceForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = e.submitter;
            const originalText = btn.innerHTML;
            
            btn.disabled = true;
            btn.innerHTML = `<span class="material-symbols-outlined animate-spin">sync</span> MENYIMPAN...`;
            
            setTimeout(() => {
                btn.innerHTML = `<span class="material-symbols-outlined">check_circle</span> BERHASIL!`;
                btn.classList.replace('bg-primary', 'bg-tertiary');
                btn.classList.replace('text-on-primary', 'text-on-tertiary');
                
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                    btn.classList.replace('bg-tertiary', 'bg-primary');
                    btn.classList.replace('text-on-tertiary', 'text-on-primary');
                }, 2000);
            }, 1500);
        });

        // Simple component row management
        document.querySelector('button[type="button"]:last-of-type').addEventListener('click', function() {
            const list = document.getElementById('component-list');
            const row = document.createElement('div');
            row.className = 'flex gap-2 animate-in fade-in slide-in-from-top-1 duration-300';
            row.innerHTML = `
                <input type="text" placeholder="Nama Komponen" class="flex-grow bg-surface-container-highest border-none rounded-lg px-3 py-2 text-sm text-on-surface">
                <button type="button" class="p-2 text-error hover:bg-error/10 rounded-lg" onclick="this.parentElement.remove()"><span class="material-symbols-outlined text-sm">delete</span></button>
            `;
            list.appendChild(row);
        });
    </script>
</body></html>