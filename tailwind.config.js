/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* warm-gray-200 */
        input: "var(--color-input)", /* warm-gray-50 */
        ring: "var(--color-ring)", /* rose-gold */
        background: "var(--color-background)", /* warm-white */
        foreground: "var(--color-foreground)", /* warm-charcoal */
        primary: {
          DEFAULT: "var(--color-primary)", /* rose-gold */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* warm-gray-200 */
          foreground: "var(--color-secondary-foreground)", /* warm-charcoal */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* warm-red */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* warm-canvas */
          foreground: "var(--color-muted-foreground)", /* warm-gray-500 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* terracotta */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* warm-white */
          foreground: "var(--color-popover-foreground)", /* warm-charcoal */
        },
        card: {
          DEFAULT: "var(--color-card)", /* warm-gray-50 */
          foreground: "var(--color-card-foreground)", /* warm-charcoal */
        },
        success: {
          DEFAULT: "var(--color-success)", /* sage-green */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* warm-amber */
          foreground: "var(--color-warning-foreground)", /* white */
        },
        error: {
          DEFAULT: "var(--color-error)", /* warm-red */
          foreground: "var(--color-error-foreground)", /* white */
        },
        brand: {
          primary: "var(--color-brand-primary)", /* warm-ivory */
          secondary: "var(--color-brand-secondary)", /* soft-rose-gold */
          trust: "var(--color-trust-builder)", /* sage-green-light */
          conversion: "var(--color-conversion)", /* terracotta */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Crimson Text', 'serif'],
        accent: ['Crimson Text', 'serif'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 2vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 2.5vw, 1rem)',
        'fluid-base': 'clamp(1rem, 3vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 3.5vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 4vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 4vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 5vw, 2.5rem)',
        'fluid-4xl': 'clamp(2.25rem, 6vw, 3rem)',
        'fluid-5xl': 'clamp(3rem, 7vw, 4rem)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(44, 40, 37, 0.08)',
        'soft-lg': '0 8px 32px rgba(44, 40, 37, 0.12)',
        'glow': '0 0 20px rgba(212, 165, 116, 0.3)',
        'glow-lg': '0 0 40px rgba(212, 165, 116, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 165, 116, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 165, 116, 0.6)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}