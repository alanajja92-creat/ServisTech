<!DOCTYPE html>

<html class="dark" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ServisKu - Buat Akun Baru</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Inter:wght@100..900&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Outfit:wght@100..900&display=swap" rel="stylesheet"/>
<style>
        body {
            background-color: #0f0f1a;
            color: #e3e1eb;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
        }
        .glass-card {
            background: rgba(26, 26, 46, 0.6);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .primary-glow {
            box-shadow: 0 0 20px rgba(185, 195, 255, 0.3);
        }
        .input-focus-glow:focus-within {
            box-shadow: inset 0 0 8px rgba(185, 195, 255, 0.2), 0 0 0 1px #b9c3ff;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        /* Custom scrollbar for better aesthetic */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0f0f1a; }
        ::-webkit-scrollbar-thumb { background: #1f3ba6; border-radius: 10px; }
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
<body class="bg-background min-h-screen flex flex-col items-center justify-center relative px-4 py-8 md:py-12">
<!-- Animated Atmospheric Background -->
<div class="fixed inset-0 -z-10 overflow-hidden">
<div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]"></div>
<div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[150px]"></div>
</div>
<!-- Main Container -->
<div class="w-full max-w-md">
<!-- Header -->
<header class="mb-8 flex items-center gap-4">
<button aria-label="Back" class="p-2 rounded-full hover:bg-white/5 transition-colors active:scale-90">
<span class="material-symbols-outlined text-primary">arrow_back</span>
</button>
<h1 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface">Buat Akun Baru</h1>
</header>
<!-- Register Card -->
<div class="glass-card rounded-xl p-card-padding shadow-xl">
<p class="text-on-surface-variant font-body-sm mb-8">Daftar untuk mulai mengelola servis perangkat elektronik Anda dengan lebih cerdas.</p>
<form class="space-y-6" id="registerForm" onsubmit="return false">
<!-- Nama Lengkap -->
<div class="space-y-2">
<label class="font-label-sm text-label-sm text-on-surface-variant px-1 uppercase tracking-wider" for="full_name">Nama Lengkap</label>
<div class="relative flex items-center rounded-lg bg-surface-container-high border border-white/10 input-focus-glow transition-all duration-200">
<span class="material-symbols-outlined absolute left-3 text-on-surface-variant">person</span>
<input class="w-full bg-transparent border-none py-3 pl-11 pr-4 text-on-surface focus:ring-0 placeholder:text-outline-variant font-body-md rounded-lg" id="full_name" placeholder="John Doe" type="text"/>
</div>
</div>
<!-- Username -->
<div class="space-y-2">
<label class="font-label-sm text-label-sm text-on-surface-variant px-1 uppercase tracking-wider" for="username">Username</label>
<div class="relative flex items-center rounded-lg bg-surface-container-high border border-white/10 input-focus-glow transition-all duration-200">
<span class="material-symbols-outlined absolute left-3 text-on-surface-variant">alternate_email</span>
<input class="w-full bg-transparent border-none py-3 pl-11 pr-4 text-on-surface focus:ring-0 placeholder:text-outline-variant font-body-md rounded-lg" id="username" placeholder="johndoe123" type="text"/>
</div>
</div>
<!-- Password -->
<div class="space-y-2">
<label class="font-label-sm text-label-sm text-on-surface-variant px-1 uppercase tracking-wider" for="password">Password</label>
<div class="relative flex items-center rounded-lg bg-surface-container-high border border-white/10 input-focus-glow transition-all duration-200">
<span class="material-symbols-outlined absolute left-3 text-on-surface-variant">lock</span>
<input class="w-full bg-transparent border-none py-3 pl-11 pr-12 text-on-surface focus:ring-0 placeholder:text-outline-variant font-body-md rounded-lg" id="password" placeholder="••••••••" type="password"/>
<button class="absolute right-3 text-on-surface-variant hover:text-primary transition-colors" onclick="togglePassword('password')" type="button">
<span class="material-symbols-outlined" id="toggleIcon-password">visibility</span>
</button>
</div>
<!-- Password Strength Indicator -->
<div class="px-1 pt-1">
<div class="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
<div class="h-full w-0 bg-error transition-all duration-300" id="strengthBar"></div>
</div>
<p class="text-[10px] text-on-surface-variant mt-1.5 font-medium uppercase tracking-tighter" id="strengthLabel">KEAMANAN: TERLALU PENDEK</p>
</div>
</div>
<!-- Konfirmasi Password -->
<div class="space-y-2">
<label class="font-label-sm text-label-sm text-on-surface-variant px-1 uppercase tracking-wider" for="confirm_password">Konfirmasi Password</label>
<div class="relative flex items-center rounded-lg bg-surface-container-high border border-white/10 input-focus-glow transition-all duration-200">
<span class="material-symbols-outlined absolute left-3 text-on-surface-variant">shield</span>
<input class="w-full bg-transparent border-none py-3 pl-11 pr-12 text-on-surface focus:ring-0 placeholder:text-outline-variant font-body-md rounded-lg" id="confirm_password" placeholder="••••••••" type="password"/>
</div>
</div>
<!-- Submit Button -->
<button class="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-md py-4 rounded-lg primary-glow hover:brightness-110 active:scale-[0.98] transition-all duration-200 mt-4 shadow-lg uppercase tracking-widest" type="submit">
                    DAFTAR
                </button>
</form>
<!-- Footer Link -->
<div class="mt-8 text-center">
<p class="font-body-sm text-on-surface-variant">
                    Sudah punya akun? 
                    <a class="text-primary font-bold hover:underline ml-1" href="#">Masuk</a>
</p>
</div>
</div>
<!-- Extra Info Footer -->
<div class="mt-8 text-center text-outline-variant font-label-sm flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-[16px]">verified_user</span>
<span>Data Anda aman dengan enkripsi AES-256</span>
</div>
</div>
<script>
        // Password Visibility Toggle
        function togglePassword(id) {
            const input = document.getElementById(id);
            const icon = document.getElementById('toggleIcon-' + id);
            if (input.type === "password") {
                input.type = "text";
                icon.innerText = "visibility_off";
            } else {
                input.type = "password";
                icon.innerText = "visibility";
            }
        }

        // Password Strength Logic
        const passwordInput = document.getElementById('password');
        const strengthBar = document.getElementById('strengthBar');
        const strengthLabel = document.getElementById('strengthLabel');

        passwordInput.addEventListener('input', (e) => {
            const val = e.target.value;
            let strength = 0;
            
            if (val.length > 5) strength += 25;
            if (val.length > 8) strength += 25;
            if (/[A-Z]/.test(val)) strength += 25;
            if (/[0-9]/.test(val) || /[^A-Za-z0-9]/.test(val)) strength += 25;

            strengthBar.style.width = strength + '%';
            
            if (strength <= 25) {
                strengthBar.className = 'h-full bg-error transition-all duration-300';
                strengthLabel.innerText = val.length === 0 ? 'KEAMANAN: TERLALU PENDEK' : 'KEAMANAN: RENDAH';
                strengthLabel.className = 'text-[10px] text-error mt-1.5 font-medium uppercase tracking-tighter';
            } else if (strength <= 50) {
                strengthBar.className = 'h-full bg-tertiary transition-all duration-300';
                strengthLabel.innerText = 'KEAMANAN: SEDANG';
                strengthLabel.className = 'text-[10px] text-tertiary mt-1.5 font-medium uppercase tracking-tighter';
            } else if (strength <= 75) {
                strengthBar.className = 'h-full bg-primary transition-all duration-300';
                strengthLabel.innerText = 'KEAMANAN: KUAT';
                strengthLabel.className = 'text-[10px] text-primary mt-1.5 font-medium uppercase tracking-tighter';
            } else {
                strengthBar.className = 'h-full bg-secondary transition-all duration-300';
                strengthLabel.innerText = 'KEAMANAN: SANGAT KUAT';
                strengthLabel.className = 'text-[10px] text-secondary mt-1.5 font-medium uppercase tracking-tighter';
                // Add a glow effect to the bar when maxed
                strengthBar.style.boxShadow = '0 0 10px rgba(212, 161, 255, 0.4)';
            }
        });

        // Simple Form Interactivity
        document.getElementById('registerForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            btn.innerText = "MEMPROSES...";
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerText = "BERHASIL!";
                btn.classList.replace('from-primary', 'from-secondary');
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.classList.replace('from-secondary', 'from-primary');
                }, 2000);
            }, 1500);
        });
    </script>
</body></html>