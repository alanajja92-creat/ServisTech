<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ServisKu - Login</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
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
                        "background": "#0f0f1a",
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
                }
            }
        }
    </script>
<style>
        body {
            background-color: #0f0f1a;
            color: #e3e1eb;
            overflow: hidden;
        }
        .glass-card {
            background: rgba(26, 26, 46, 0.6);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glow-button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
            transition: all 0.3s ease;
        }
        .glow-button:hover {
            box-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
            transform: translateY(-1px);
        }
        .input-glow:focus-within {
            box-shadow: 0 0 15px rgba(185, 195, 255, 0.2);
            border-color: #b9c3ff;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .mesh-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.15) 0%, transparent 40%),
                        radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.15) 0%, transparent 40%);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
</head>
<body class="flex items-center justify-center min-h-screen p-container-margin font-body-md">
<!-- Background Atmospheric Effect -->
<div class="mesh-bg"></div>

<main class="w-full max-w-[440px] z-10">
<!-- Brand Header -->
<header class="flex flex-col items-center mb-8">
<div class="w-16 h-16 mb-4 rounded-2xl bg-surface-container-high flex items-center justify-center border border-white/10 shadow-[0_0_20px_rgba(185,195,255,0.15)]">
<span class="material-symbols-outlined text-primary text-[40px]" data-icon="build">build</span>
</div>
<h1 class="font-headline-xl text-headline-xl text-primary tracking-tight">ServisKu</h1>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-1">Sistem Manajemen Servis Elektronik Modern</p>
</header>
<!-- Login Card -->
<section class="glass-card rounded-[24px] p-8 md:p-10 shadow-2xl">
<form action="#" class="space-y-6" id="loginForm">
<!-- Username Field -->
<div class="space-y-2">
<label class="font-label-md text-label-md text-on-surface-variant ml-1" for="username">Username</label>
<div class="input-glow flex items-center bg-surface-container-low border border-white/5 rounded-xl transition-all duration-300">
<span class="material-symbols-outlined text-outline ml-4" data-icon="person">person</span>
<input class="w-full bg-transparent border-none focus:ring-0 text-on-surface px-input-padding-x py-input-padding-y font-body-md placeholder:text-outline-variant" id="username" name="username" placeholder="Masukkan username" type="text"/>
</div>
</div>
<!-- Password Field -->
<div class="space-y-2">
<div class="flex justify-between items-center px-1">
<label class="font-label-md text-label-md text-on-surface-variant" for="password">Password</label>
<a class="font-label-sm text-label-sm text-primary hover:underline transition-all" href="#">Lupa Password?</a>
</div>
<div class="input-glow flex items-center bg-surface-container-low border border-white/5 rounded-xl transition-all duration-300">
<span class="material-symbols-outlined text-outline ml-4" data-icon="lock">lock</span>
<input class="w-full bg-transparent border-none focus:ring-0 text-on-surface px-input-padding-x py-input-padding-y font-body-md placeholder:text-outline-variant" id="password" name="password" placeholder="Masukkan password" type="password"/>
<button class="mr-4 text-outline hover:text-on-surface transition-colors" onclick="togglePassword()" type="button">
<span class="material-symbols-outlined" data-icon="visibility" id="eyeIcon">visibility</span>
</button>
</div>
</div>
<!-- Submit Button -->
<button class="glow-button w-full py-4 rounded-xl font-label-md text-label-md text-white tracking-widest uppercase active:scale-[0.98] transition-transform" type="submit">
                    MASUK
                </button>
</form>
<!-- Footer Links -->
<div class="mt-8 pt-8 border-t border-white/5 text-center">
<p class="font-body-sm text-body-sm text-on-surface-variant">
                    Belum punya akun? 
                    <a class="text-primary font-semibold hover:underline ml-1" href="#">Daftar Sekarang</a>
</p>
</div>
</section>
<!-- Aesthetic Footer Decor -->
<footer class="mt-12 text-center opacity-40">
<div class="flex justify-center gap-6">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[16px]" data-icon="verified_user">verified_user</span>
<span class="font-label-sm text-label-sm">Secure Access</span>
</div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[16px]" data-icon="speed">speed</span>
<span class="font-label-sm text-label-sm">High Performance</span>
</div>
</div>
</footer>
</main>
<!-- Interactive Script -->
<script>
        function togglePassword() {
            const passwordInput = document.getElementById('password');
            const eyeIcon = document.getElementById('eyeIcon');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eyeIcon.innerText = 'visibility_off';
            } else {
                passwordInput.type = 'password';
                eyeIcon.innerText = 'visibility';
            }
        }

        // Lightweight atmospheric interaction
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            document.querySelector('.mesh-bg').style.background = `
                radial-gradient(circle at ${x}% ${y}%, rgba(102, 126, 234, 0.15) 0%, transparent 40%),
                radial-gradient(circle at ${100-x}% ${100-y}%, rgba(118, 75, 162, 0.15) 0%, transparent 40%)
            `;
        });

        // Form submission animation mock
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerText;
            btn.innerHTML = '<span class="animate-spin material-symbols-outlined">sync</span>';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
                alert('Sistem Login ServisKu sedang menyiapkan dashboard Anda...');
            }, 1500);
        });
    </script>
</body></html>