/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'poppins': ['Poppins', 'sans-serif'],
                'japanese': ['Noto Sans JP', 'sans-serif'],
            },
            colors: {
                // Giyuu Tomioka Theme Colors - Light mode với màu ngà ngà
                water: {
                    50: '#FDFCF8', // Cream/Off-white ngà ngà
                    100: '#F9F7F0', // Light cream
                    200: '#F0EDE1', // Soft cream
                    300: '#E6E0D1', // Warm cream
                    400: '#D4CBB8', // Medium cream
                    500: '#3B82F6', // Soft blue
                    600: '#2563EB',
                    700: '#1D4ED8',
                    800: '#1E3A5F', // Deep navy blue
                    900: '#1E293B',
                    950: '#0F172A'
                },
                navy: {
                    50: '#FDFCF8', // Cream/Off-white ngà ngà
                    100: '#F9F7F0', // Light cream
                    200: '#F0EDE1', // Soft cream
                    300: '#E6E0D1', // Warm cream
                    400: '#D4CBB8', // Medium cream
                    500: '#64748B',
                    600: '#475569',
                    700: '#334155',
                    800: '#1E3A5F', // Deep navy blue
                    900: '#0F172A',
                    950: '#020617'
                },
                crimson: {
                    50: '#FEF2F2',
                    100: '#FEE2E2',
                    200: '#FECACA',
                    300: '#FCA5A5',
                    400: '#F87171',
                    500: '#EF4444',
                    600: '#DC2626',
                    700: '#B91C1C',
                    800: '#991B1B', // Dark crimson accent
                    900: '#7F1D1D',
                    950: '#450A0A'
                },
                // Keep original colors for compatibility
                primary: {
                    50: '#F1F5F9',
                    100: '#E2E8F0',
                    200: '#CBD5E1',
                    300: '#94A3B8',
                    400: '#64748B',
                    500: '#3B82F6',
                    600: '#2563EB',
                    700: '#1D4ED8',
                    800: '#1E3A5F',
                    900: '#1E293B',
                    950: '#0F172A'
                },
                secondary: {
                    50: '#F1F5F9',
                    100: '#E2E8F0',
                    200: '#CBD5E1',
                    300: '#94A3B8',
                    400: '#64748B',
                    500: '#3B82F6',
                    600: '#2563EB',
                    700: '#1D4ED8',
                    800: '#1E3A5F',
                    900: '#1E293B',
                    950: '#0F172A'
                },
                accent: {
                    50: '#FEF2F2',
                    100: '#FEE2E2',
                    200: '#FECACA',
                    300: '#FCA5A5',
                    400: '#F87171',
                    500: '#EF4444',
                    600: '#DC2626',
                    700: '#B91C1C',
                    800: '#991B1B',
                    900: '#7F1D1D',
                    950: '#450A0A'
                },
                dark: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'bounce-slow': 'bounce 2s infinite',
                'float': 'float 6s ease-in-out infinite',
                'plane-fly': 'planeFly 8s ease-in-out infinite',
                'rotate-3d': 'rotate3d 10s linear infinite',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
                // Water-themed animations
                'water-flow': 'waterFlow 8s ease-in-out infinite',
                'water-ripple': 'waterRipple 2s ease-out infinite',
                'water-splash': 'waterSplash 1.5s ease-out infinite',
                'wave-motion': 'waveMotion 6s ease-in-out infinite',
                'breathing-glow': 'breathingGlow 4s ease-in-out infinite',
                'glassmorphism': 'glassmorphism 0.6s ease-in-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                planeFly: {
                    '0%': { transform: 'translateX(-100px) translateY(0px) rotate(0deg)' },
                    '25%': { transform: 'translateX(25vw) translateY(-10px) rotate(5deg)' },
                    '50%': { transform: 'translateX(50vw) translateY(0px) rotate(0deg)' },
                    '75%': { transform: 'translateX(75vw) translateY(-10px) rotate(-5deg)' },
                    '100%': { transform: 'translateX(100vw) translateY(0px) rotate(0deg)' },
                },
                rotate3d: {
                    '0%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
                    '25%': { transform: 'rotateX(5deg) rotateY(90deg) rotateZ(0deg)' },
                    '50%': { transform: 'rotateX(0deg) rotateY(180deg) rotateZ(5deg)' },
                    '75%': { transform: 'rotateX(-5deg) rotateY(270deg) rotateZ(0deg)' },
                    '100%': { transform: 'rotateX(0deg) rotateY(360deg) rotateZ(0deg)' },
                },
                pulseGlow: {
                    '0%': { boxShadow: '0 0 5px rgba(100, 127, 188, 0.5)' },
                    '100%': { boxShadow: '0 0 20px rgba(100, 127, 188, 0.8), 0 0 30px rgba(100, 127, 188, 0.6)' },
                },
                // Water-themed keyframes
                waterFlow: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                waterRipple: {
                    '0%': { transform: 'scale(0)', opacity: '1' },
                    '100%': { transform: 'scale(4)', opacity: '0' },
                },
                waterSplash: {
                    '0%': { transform: 'translateY(0) scale(1)', opacity: '1' },
                    '50%': { transform: 'translateY(-20px) scale(1.2)', opacity: '0.8' },
                    '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
                },
                waveMotion: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                breathingGlow: {
                    '0%, 100%': { boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)' },
                    '50%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)' },
                },
                glassmorphism: {
                    '0%': { backdropFilter: 'blur(0px)', backgroundColor: 'rgba(255, 255, 255, 0)' },
                    '100%': { backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                }
            }
        },
    },
    plugins: [],
}
