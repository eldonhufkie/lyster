/**
 * Tailwind CSS v4 Configuration
 * Tidal-inspired dark music theme
 *
 * Note: This is a Tailwind v4 config using the new @import syntax.
 * Design tokens are defined in wwwroot/css/DesignTokens.css
 */

export default {
  // Dark mode is the default theme
  darkMode: 'class',

  content: [
    './Components/**/*.{razor,html,cshtml}',
    './Pages/**/*.{razor,html,cshtml}',
    './Shared/**/*.{razor,html,cshtml}',
    './wwwroot/**/*.html',
  ],

  theme: {
    extend: {
      colors: {
        // Map CSS variables to Tailwind color utilities
        bg: {
          900: 'var(--bg-900)',
          850: 'var(--bg-850)',
          800: 'var(--bg-800)',
          700: 'var(--bg-700)',
        },
        surface: {
          DEFAULT: 'var(--surface)',
          elevated: 'var(--surface-elevated)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          2: 'var(--accent-2)',
          '2-hover': 'var(--accent-2-hover)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          muted: 'var(--text-muted)',
        },
        border: {
          primary: 'var(--border-primary)',
          muted: 'var(--border-muted)',
          accent: 'var(--border-accent)',
        },
      },

      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },

      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
        '5xl': 'var(--text-5xl)',
        '6xl': 'var(--text-6xl)',
      },

      spacing: {
        'topbar': 'var(--topbar-height)',
        'sidenav': 'var(--sidenav-width)',
        'sidenav-collapsed': 'var(--sidenav-collapsed)',
        'playerbar': 'var(--playerbar-height)',
      },

      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        full: 'var(--radius-full)',
      },

      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-md)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        player: 'var(--shadow-player)',
        accent: 'var(--shadow-accent)',
        'accent-lg': 'var(--shadow-accent-lg)',
      },

      zIndex: {
        base: '0',
        dropdown: '100',
        sticky: '200',
        fixed: '300',
        'modal-backdrop': '400',
        modal: '500',
        popover: '600',
        tooltip: '700',
        player: '800',
        notification: '900',
      },

      transitionDuration: {
        fast: 'var(--duration-fast)',
        DEFAULT: 'var(--duration-base)',
        base: 'var(--duration-base)',
        slow: 'var(--duration-slow)',
        slower: 'var(--duration-slower)',
      },

      transitionTimingFunction: {
        'in': 'var(--ease-in)',
        'out': 'var(--ease-out)',
        'in-out': 'var(--ease-in-out)',
        'bounce': 'var(--ease-bounce)',
      },

      backdropBlur: {
        glass: '20px',
      },

      maxWidth: {
        content: 'var(--content-max-width)',
      },

      // Responsive breakpoints
      screens: {
        'xs': '480px',
        'sm': '640px',   // Mobile
        'md': '768px',   // Tablet
        'lg': '1024px',  // Desktop
        'xl': '1280px',  // Large desktop
        '2xl': '1536px', // Extra large
      },
    },
  },

  plugins: [
    // Plugin for forms (if needed - install @tailwindcss/forms)
    // require('@tailwindcss/forms'),

    // Plugin for line-clamp (if needed - install @tailwindcss/line-clamp)
    // require('@tailwindcss/line-clamp'),

    // Custom plugin for aspect ratio (if needed - install @tailwindcss/aspect-ratio)
    // require('@tailwindcss/aspect-ratio'),

    // Custom utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.glass-surface': {
          background: 'var(--glass-bg)',
          backdropFilter: 'var(--glass-blur)',
          border: '1px solid var(--glass-border)',
        },
        '.glass-surface-light': {
          background: 'var(--glass-bg-light)',
          backdropFilter: 'var(--glass-blur)',
          border: '1px solid var(--glass-border)',
        },
        '.gradient-accent': {
          background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)',
        },
        '.gradient-overlay': {
          background: 'linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.8) 100%)',
        },
        '.player-fixed-bottom': {
          position: 'fixed',
          bottom: '0',
          left: '0',
          right: '0',
          height: 'var(--playerbar-height)',
          zIndex: 'var(--z-player)',
        },
        '.content-with-player': {
          paddingBottom: 'calc(var(--playerbar-height) + var(--space-4))',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
