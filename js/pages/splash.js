<!DOCTYPE html>

<html class="dark" lang="id"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ServisKu - Splash Screen</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
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
            overflow: hidden;
            margin: 0;
            padding: 0;
        }

        .splash-gradient {
            background: radial-gradient(circle at center, #1a1a2e 0%, #0f0f1a 100%);
        }

        .glass-panel {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }

        .primary-glow {
            filter: drop-shadow(0 0 15px rgba(185, 195, 255, 0.4));
        }

        @keyframes bounce-custom {
            0%, 80%, 100% { transform: scale(0); opacity: 0.3; }
            40% { transform: scale(1); opacity: 1; }
        }

        .dot-loader div {
            width: 10px;
            height: 10px;
            background-color: #b9c3ff;
            border-radius: 50%;
            display: inline-block;
            animation: bounce-custom 1.4s infinite ease-in-out both;
        }

        .dot-loader .dot1 { animation-delay: -0.32s; }
        .dot-loader .dot2 { animation-delay: -0.16s; }

        .logo-animation {
            animation: pulse-logo 3s ease-in-out infinite;
        }

        @keyframes pulse-logo {
            0%, 100% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(185, 195, 255, 0.2)); }
            50% { transform: scale(1.05); filter: drop-shadow(0 0 25px rgba(185, 195, 255, 0.5)); }
        }

        .floating-orb {
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(185, 195, 255, 0.1) 0%, transparent 70%);
            z-index: 0;
            pointer-events: none;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="dark font-body-md text-body-md">
<!-- Background Orbs -->
<div class="floating-orb top-[-10%] left-[-5%]" id="orb1"></div>
<div class="floating-orb bottom-[-10%] right-[-5%]" id="orb2"></div>
<main class="splash-gradient relative w-full h-screen flex flex-center items-center justify-center overflow-hidden">
<!-- Center Content Container -->
<div class="relative z-10 flex flex-col items-center max-w-sm w-full px-container-margin">
<!-- Glassmorphic Card Shell -->
<div class="glass-panel w-full p-12 rounded-[2rem] flex flex-col items-center transition-all duration-700 opacity-0 translate-y-4" id="content-card">
<!-- Logo Visual -->
<div class="mb-8 logo-animation relative">
<div class="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(185,195,255,0.4)]">
<span class="material-symbols-outlined text-on-primary !text-5xl" data-icon="build" style="font-variation-settings: 'FILL' 1;">build</span>
</div>
</div>
<!-- Branding -->
<h1 class="font-headline-xl text-headline-xl text-primary tracking-tighter mb-2">
                    ServisKu
                </h1>
<p class="font-body-md text-body-md text-on-surface-variant text-center mb-10 opacity-80">
                    Kelola servis dengan mudah
                </p>
<!-- Loading Indicator -->
<div class="dot-loader flex gap-2 mb-2">
<div class="dot1"></div>
<div class="dot2"></div>
<div class="dot3"></div>
</div>
<span class="font-label-sm text-label-sm text-on-surface-variant/40 tracking-widest uppercase">
                    Memuat Sistem
                </span>
</div>
<!-- Subtle Decorative Bottom Detail -->
<div class="mt-12 text-center opacity-40 transition-opacity duration-1000 delay-500" id="footer-text">
<p class="font-label-sm text-label-sm">High Performance Service Management</p>
</div>
</div>
<!-- Atmospheric Canvas Overlay (Interactive Particles via JS) -->
<canvas class="absolute inset-0 pointer-events-none opacity-30" id="particleCanvas"></canvas>
</main>
<script>
        // Page Entrance Animation
        window.addEventListener('DOMContentLoaded', () => {
            const card = document.getElementById('content-card');
            const footer = document.getElementById('footer-text');
            
            setTimeout(() => {
                card.classList.remove('opacity-0', 'translate-y-4');
                card.classList.add('opacity-100', 'translate-y-0');
            }, 100);

            // Redirect visualization after 2.5 seconds
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                card.style.transition = 'all 0.8s ease-in-out';
                // Simulation of transition to main dashboard
                // window.location.href = '/dashboard';
            }, 2500);
        });

        // Background Particle Effect
        const canvas = document.getElementById('particleCanvas');
        const ctx = canvas.getContext('2d');
        let particles = [];

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.1;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }
            draw() {
                ctx.fillStyle = `rgba(185, 195, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < 60; i++) {
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }
        animate();

        // Mouse interaction for orbs
        document.addEventListener('mousemove', (e) => {
            const orb1 = document.getElementById('orb1');
            const orb2 = document.getElementById('orb2');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            orb1.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
            orb2.style.transform = `translate(${-x * 50}px, ${-y * 50}px)`;
        });
    </script>
</body></html>